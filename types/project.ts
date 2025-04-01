export interface Project {
  id?: string;
  name: string;
  gitURL: string;
  liveURL?: string;
  description: string;
  technologies: string[];
  image: string;
  year: string;
  features: string[];
}