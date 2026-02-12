"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Database,
    Cloud,
    BrainCircuit,
    Wrench,
    Sparkles
} from "lucide-react";

export function AboutSection() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code2 className="w-5 h-5" />,
            skills: ["React", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS", "JavaScript", "TypeScript"]
        },
        {
            title: "Backend",
            icon: <Server className="w-5 h-5" />,
            skills: ["Spring Boot", "Hibernate/JPA", "Node.js", "Express", "NestJS", "FastAPI", "SQL_Alchemy"]
        },
        {
            title: "Data & Architecture",
            icon: <Database className="w-5 h-5" />,
            skills: ["SQL", "PostgreSQL", "MongoDB", "VectorDB", "REST APIs", "GraphQL"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="w-5 h-5" />,
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitLab", "S3/ECR/EKS/IAM", "Junit", "Jest", "Vitest"]
        },
        {
            title: "AI & ML",
            icon: <BrainCircuit className="w-5 h-5" />,
            skills: ["NLP", "RAG", "ML", "LLM Integration", "Pandas", "NumPy", "OpenAI", "TensorFlow", "PyTorch"]
        },
        {
            title: "Core & Tools",
            icon: <Wrench className="w-5 h-5" />,
            skills: ["Java", "Python", "C", "Git", "SharePoint", "Postman", "Azure", "Agile", "Scrum", "Sprints", "Retrsopective"]
        }
    ];

    return (
        <SectionContainer id="about" className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>
                <br></br>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        I hold a B.Tech degree in Computer Science and am a passionate full-stack developer.
                        With a deep expertise in building end-to-end applications, I focus on creating
                        performant, scalable, and elegant solutions that solve real-world problems.
                    </p>
                </div>

                {/* Sub-label */}
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-sm font-black tracking-widest uppercase text-muted-foreground whitespace-nowrap">
                        Technical Expertise
                    </h3>
                    <div className="h-[1px] w-full bg-border" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 rounded-3xl border border-border bg-muted/30 transition-all duration-300 hover:bg-card hover:shadow-xl hover:border-primary/20 group flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-background border border-border text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold tracking-tight">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm font-semibold px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
