import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-6 mt-auto">
      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <a href={SITE_CONFIG.github}>
          <span className="text-yellow-500">{SITE_CONFIG.name}</span>
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
}
