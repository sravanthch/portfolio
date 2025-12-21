"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { ContactDialog } from "@/components/contact-dialog";
import { useState } from "react";

export function HomeSection() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <SectionContainer id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-7 ml-0 md:ml-20 order-last md:order-first relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-muted rounded-2xl overflow-hidden border border-border shadow-xl flex items-center justify-center group"
                >
                    <Image
                        src="/images/Kashmir.jpg"
                        alt="Sravanth profile picture"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 360px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none" />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            Hi, I'm <span className="bg-clip-text bg-gradient-to-r from-primary to-primary/60">Sravanth</span>
                        </h1>
                        <p className="text-xl leading-relaxed max-w-lg">
                            I am a passionate <b>Full Stack Developer</b>. I specialize in building dynamic and responsive web applications. I enjoy working on projects that challenge my skills and allow me to learn new technologies.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects">
                            <Button size="lg" className="group">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setIsContactOpen(true)}
                        >
                            Contact Me
                        </Button>
                    </div>

                    <ContactDialog
                        open={isContactOpen}
                        onOpenChange={setIsContactOpen}
                    />

                </motion.div>
            </div>
        </SectionContainer>
    );
}
