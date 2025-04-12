interface Blog {
  title: string;
  link: string;
  description: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Supakornn/Supakornn/refs/heads/main/README.md');
    const text = await response.text();
    
    const blogs: Blog[] = [];
    const lines = text.split('\n');
    
    let inBlogsSection = false;
    
    for (const line of lines) {
      if (line.startsWith('## Blogs')) {
        inBlogsSection = true;
        continue;
      }
      
      if (inBlogsSection) {
        if (line.startsWith('## ')) {
          break;
        }
        
        const blogMatch = line.match(/^- \[([^\]]+)\]\(([^)]+)\) - (.+)$/);
        if (blogMatch) {
          blogs.push({
            title: blogMatch[1],
            link: blogMatch[2],
            description: blogMatch[3],
          });
        }
      }
    }
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
} 