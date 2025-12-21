"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Berkadia",
        role: "AssociateSoftware Engineer",
        duration: "Jan 2023 - Nov 2023",
        description: [
            "Provided production support during the project launch, collaborating with users to resolve bugs",
            "Designed  a user interface enabling users to import documents and input metadata.",
            "Worked on features to allow the users to view, download and share the documents.",
            "Implemented document upload and download workflows by integrating Amazon S3, using pre-signed URLs",
            "Implemented a form-locking mechanism, preventing simultaneous edits improving data integrity",
            "Designed and deployed real-time dashboards for tracking requests and processing status",
"Developed the “Export to Excel” feature for the dashboard data, enhancing the user experience"
        ]
    },
];

export function ExperienceSection() {
    return (
        <SectionContainer id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-12 max-w-4xl mx-auto"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </div>

                <div className="relative border-l border-primary/20 ml-4 md:ml-0 space-y-12">
                    {experiences.map((item, index) => (
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
                                <h3 className="text-xl font-bold">{item.company}</h3>
                                <span className="text-sm text-muted-foreground font-medium bg-muted px-2 py-1 rounded">{item.duration}</span>
                            </div>
                            <h4 className="text-lg font-medium text-primary mb-2">{item.role}</h4>
                            <ul className="list-disc list-outside ml-4 space-y-1 text-muted-foreground">
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionContainer>
    );
}
