"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

const education = [
    {
        school: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        year: "2019 - 2023",
        description: "Graduated with honors. Focused on Software Engineering and Artificial Intelligence."
    },
    {
        school: "Tech High School",
        degree: "High School Diploma",
        year: "2015 - 2019",
        description: "Specialized in Mathematics and Physics. Lead of the coding club."
    }
];

export function EducationSection() {
    return (
        <SectionContainer id="education">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12 max-w-4xl mx-auto"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="relative border-l border-primary/20 ml-4 md:ml-0 space-y-12">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold">{item.school}</h3>
                                <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">{item.year}</span>
                            </div>
                            <h4 className="text-lg font-medium text-primary mb-2">{item.degree}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
