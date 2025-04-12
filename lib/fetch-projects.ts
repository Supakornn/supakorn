interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Supakornn/Supakornn/refs/heads/main/README.md');
    const text = await response.text();
    
    const projects: Project[] = [];
    const lines = text.split('\n');
    
    let inProjectsSection = false;
    let currentProject: Partial<Project> = {};
    
    for (const line of lines) {
      if (line.startsWith('## Projects')) {
        inProjectsSection = true;
        continue;
      }
      
      if (inProjectsSection) {
        if (line.startsWith('## ')) {
          break;
        }
        
        const projectMatch = line.match(/^- \[([^\]]+)\]\(([^)]+)\) - (.+)$/);
        if (projectMatch) {
          if (currentProject.title) {
            projects.push(currentProject as Project);
          }
          
          currentProject = {
            title: projectMatch[1],
            description: projectMatch[3],
            link: projectMatch[2],
            tags: [],
          };
        }
      }
    }
    
    if (currentProject.title) {
      projects.push(currentProject as Project);
    }
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
} 