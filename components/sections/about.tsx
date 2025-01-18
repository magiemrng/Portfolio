"use client";
import { SkillsList } from "@/components/skills-list";
import ExperienceCard from "@/components/experience-card";
import GitHubInfo from "@/components/github-info";
import BlogList from "@/components/blog-list";

const skills = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"];

const experiences = [
  {
    title: "WEB DEVELOPER",
    company: "CODIT TECH SOLUTIONS",
    period: "2024"
  },
  {
    title: "Undergraduate in Computer Science",
    company: "SR University , Warangal",
    period: "2022 - 2026 "
  }
];

const blogs = [
  {
    title: "React.js: The Powerhouse of Modern Web Development",
    link: "https://medium.com/@saikumarthota2004/react-js-the-powerhouse-of-modern-web-development-15f7bd5a03e6",
    date: "2024-12-15"
  },
  {
    title:"The Journey of Learning: How I Balance Building Projects and Pursuing My B-Tech in Computer Science",
    link:"https://medium.com/@saikumarthota2004/the-journey-of-learning-how-i-balance-building-projects-and-pursuing-my-b-tech-in-computer-science-f8751c590062",
    date:"2024-12-16"
  }
  
];

export function AboutSection() {
  return (
    <>
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            I specialize in React, Node.js, and cloud technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <SkillsList skills={skills} />
            </div>
            <ExperienceCard experiences={experiences} title="Experience" />
          </div>
          <div className="mt-8">
            <GitHubInfo username="SAIKUMAR039" />
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Blog Posts</h3>
            <BlogList blogs={blogs} />
          </div>
        </div>
      </section>
    
    </>
  );
}