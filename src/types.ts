export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  testimonial?: {
    name: string;
    role: string;
    content: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStats {
  projects: number;
  experience: number;
  clients: number;
  awards: number;
}