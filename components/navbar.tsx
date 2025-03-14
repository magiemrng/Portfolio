// Create a new file at @/components/navbar.tsx
import React from "react";
import Link from "next/link";

export function Navbar(): React.ReactElement {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border/40 shadow-md">
      <div className="container flex h-16 items-center justify-center mx-auto">
        
        <nav className="flex items-center gap-6 text-lg font-medium">
          <Link href="#about" className="text-foreground/80 hover:text-foreground transition px-3">
            About
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-foreground transition px-3">
            Skills
          </Link>
          <Link href="#projects" className="text-foreground/80 hover:text-foreground transition px-3">
            Projects
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground transition px-3">
            Contact
          </Link>
        </nav>
       
      </div>
    </header>
  );
}