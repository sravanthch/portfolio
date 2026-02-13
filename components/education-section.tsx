"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

const education = [
    {
        school: "JNTU College Of Engineering Hyderabad",
        degree: "Bachelors",
        year: "2019 - 2023",
        course: "Computer Science Engineering - 8.3 CGPA"
    },
    {
        school: "Narayana Junior College",
        degree: "Intermediate",
        year: "2017 - 2019",
        course: "Mathematics Physics and Chemistry (MPC) - 95%"
    },
    {
        school: "Narayana E-Techno School",
        degree: "SSC",
        year: "2016 - 2017",
        course: "10th Class - 9.0 CGPA"
    },

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
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold">{item.school}</h3>
                                <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">{item.year}</span>
                            </div>
                            <h4 className="text-lg font-medium text-primary mb-2">{item.degree}</h4>
                            <p className="text-muted-foreground">{item.course}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
