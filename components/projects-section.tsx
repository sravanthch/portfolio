"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
    projectId: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string | null;
    liveUrl: string | null;
}

const INITIAL_PROJECTS: Project[] = [
    {
        projectId: "1",
        title: "Chat With PDF",
        description: "An AI-powered web application that allows users to chat normally or upload a PDF and ask questions based on its content.",
        techStack: ["React", "TypeScript", "Vite", "OpenAI API (gpt-4o-mini)", "Tailwind CSS", "pdfjs-dist"],
        githubUrl: "https://github.com/sravanthch/Personal-AI-Assistant",
        liveUrl: "https://pdfassitant.netlify.app/"
    },
    {
        projectId: "2",
        title: "Login Authentication",
        description: "An end-to-end authentication system that provides secure user login and signup functionality.It ensures data integrity through duplicate email detection, password hashing, and Joi-based input validation.",
        techStack: ["React", "JavaScript", "Node.js", "Express", "HTML/CSS", "PostgreSQL"],
        githubUrl: "https://github.com/sravanthch/authentication-frontend",
        liveUrl: "https://whimsical-griffin-cf1e2e.netlify.app/"
    }
];

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = `${process.env.NEXT_PUBLIC_PROJECTS_API}/projects`;

    useEffect(() => {
        const fetchProjects = async () => {
            console.log("Fetching projects from:", API_URL);
            if (!API_URL) {
                console.warn("API_URL is not defined");
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProjects(prev => [...prev, ...data]);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, [API_URL]);

    return (
        <SectionContainer id="projects" className="bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={`${project.projectId}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
                        >
                            <div className="p-6 flex flex-col gap-4 flex-grow">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-4">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 pt-4 mt-auto border-t border-border">
                                    {project.githubUrl ? (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button size="sm" variant="outline" className="w-full gap-2 pointer-events-none">
                                                <Github className="h-4 w-4" /> Code
                                            </Button>
                                        </a>
                                    ) : (
                                        <Button size="sm" variant="outline" className="w-full gap-2" disabled>
                                            <Github className="h-4 w-4" /> Code
                                        </Button>
                                    )}

                                    {project.liveUrl ? (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button size="sm" className="w-full gap-2 pointer-events-none">
                                                <ExternalLink className="h-4 w-4" /> Live Demo
                                            </Button>
                                        </a>
                                    ) : (
                                        <Button size="sm" className="w-full gap-2" disabled>
                                            <ExternalLink className="h-4 w-4" /> Live Demo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {isLoading && (
                        <div className="flex items-center justify-center p-12 col-span-1 md:col-span-2 lg:col-span-3">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    )}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
