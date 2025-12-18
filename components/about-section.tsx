"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

export function AboutSection() {
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
                    I am a dedicated developer with a strong foundation in computer science and a knack for creating intuitive, dynamic user interfaces. My journey began with a curiosity for how things work on the web, which has since evolved into a professional pursuit of building robust applications. I thrive in collaborative environments and am always eager to learn new technologies to solve real-world problems.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Git", "Framer Motion"].map((skill, index) => (
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
