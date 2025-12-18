"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers. Built with Next.js and Tailwind CSS.",
        tags: ["Next.js", "React", "Tailwind", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "Real-time task collaboration tool with drag-and-drop features. Uses Socket.io for live updates.",
        tags: ["React", "Express", "Socket.io", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Weather Forecast CLI",
        description: "A simple yet powerful command-line interface tool to fetch weather data for any city.",
        tags: ["Node.js", "API Integration", "CLI"],
        link: "#",
        github: "#"
    }
];

export function ProjectsSection() {
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
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-muted w-full relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-black rotate-12 select-none">
                                    PROJECT
                                </div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col gap-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 pt-4 mt-auto border-t border-border">
                                    <Button size="sm" variant="outline" className="w-full gap-2">
                                        <Github className="h-4 w-4" /> Code
                                    </Button>
                                    <Button size="sm" className="w-full gap-2">
                                        <ExternalLink className="h-4 w-4" /> Live Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
