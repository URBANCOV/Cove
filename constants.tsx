import { NavLink, Project, Service, SocialLink } from './types';
import { Code, Layout, Smartphone, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'BloomCare - Mental Health App Landing Page',
    category: 'Web Application',
    description: 'A comprehensive financial analytics dashboard featuring real-time data visualization and reporting tools.',
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop',
    link: '#',
    type: 'Real Project',
    tags: ['Landing Page', 'Hunger Studio']
  },
  {
    id: 2,
    title: 'FragWater - Luxury Fragrance Landing Page',
    category: 'E-Commerce',
    description: 'A minimal, high-performance e-commerce storefront built with Next.js and headless CMS integration.',
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    link: '#',
    type: 'Real Project',
    tags: ['Landing Page', 'Hunger Studio']
  },
  {
    id: 3,
    title: 'CryptoCalm - Crypto Investment Dashboard for Beginners',
    category: 'Mobile App',
    description: 'Productivity application focused on gesture-based task management for iOS and Android platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=800&auto=format&fit=crop',
    link: '#',
    type: 'Exploration',
    tags: ['Dashboard', 'Mobile']
  },
  {
    id: 4,
    title: 'Spence - Redefining Personal Finance with AI',
    category: 'Website',
    description: 'A visually driven portfolio site for an architecture firm, emphasizing large imagery and clean typography.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    link: '#',
    type: 'Real Project',
    tags: ['Mobile App', 'Edson Team']
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'UIUX DESIGN',
    description: 'Designing clean and scalable interfaces for dashboards, mobile apps, and websites.',
    icon: Layout,
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'WEB DESIGN & DEV',
    description: 'Building fast, scalable, and secure websites using modern technologies like React, TypeScript, and Node.js.',
    icon: Code,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'BRANDING',
    description: 'Crafting unique visual identities that resonate with your target audience and stand out in the market.',
    icon: Smartphone,
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'MOTIONS & ANIMATIONS',
    description: 'Bringing interfaces to life with smooth, purposeful animations that enhance the user experience.',
    icon: Layout,
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
  },
];

export const SOCIALS: SocialLink[] = [
  { id: 1, platform: 'GitHub', url: '#', icon: Github },
  { id: 2, platform: 'LinkedIn', url: '#', icon: Linkedin },
  { id: 3, platform: 'Twitter', url: '#', icon: Twitter },
  { id: 4, platform: 'Email', url: 'mailto:hello@example.com', icon: Mail },
];

export const SKILLS = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Figma", "AWS"
];