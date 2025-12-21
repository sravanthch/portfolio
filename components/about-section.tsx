"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

export function AboutSection() {
    const skills = ["React", "Next.js", "Java","Python","Node.js","Express","Spring Boot","SQL", "PostgreSQL","MongoDB", "Git","Docker", "Kubernetes","AWS","Postman","SharePoint","HTML/CSS","Tailwind CSS","JavaScript","TypeScript"];
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border p-4 rounded-xl text-center font-medium shadow-sm hover:shadow-md transition-shadow"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
