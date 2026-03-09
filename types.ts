import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  type: 'Real Project' | 'Exploration';
  tags: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: LucideIcon;
}