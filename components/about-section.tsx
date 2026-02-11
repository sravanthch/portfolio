"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

export function AboutSection() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Angular","HTML/CSS", "Tailwind CSS", "JavaScript", "TypeScript"]
        },
        {
            title: "Backend",
            skills: ["Spring Boot", "Hibernate/JPA", "Node.js", "Express", "NestJS", "FastAPI", "SQL_Alchemy" ]
        },
        {
            title: "API & Databases",
            skills: ["SQL", "PostgreSQL", "MongoDB", "VectorDB", "REST APIs", "GraphQL"]
        },
        {
            title: "Cloud & Testing",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitLab", "S3/ECR/EKS/IAM", "Junit", "Jest", "Vitest"]
        },
        {
            title: "AI & ML",
            skills: ["NLP", "RAG", "ML", "LLM Integration","Pandas", "NumPy", "OpenAI", "TensorFlow", "PyTorch"]
        },
        {
            title: "Languages & Other Tools",
            skills: ["Java", "Python", "C", "Git", "SharePoint", "Postman", "Azure", "Agile", "Scrum"]
        }
    ];
    return (
        <SectionContainer id="about" className="bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8 max-w-4xl mx-auto"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    I hold a B.Tech degree in Computer Science and am a passionate full-stack developer. Coding has always been a strong interest of mine, and I have built multiple end-to-end full-stack projects. I am highly motivated to continuously learn new technologies and enhance my skill set.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
                        >
                            <h3 className="text-xl font-bold mb-4 text-primary group-hover:translate-x-1 transition-transform">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skill}
                                        className="bg-muted px-3 py-1 rounded-full text-sm font-medium border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors"
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
