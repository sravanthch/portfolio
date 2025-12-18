"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HomeSection() {
    return (
        <SectionContainer id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
                {/* Left Side - Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="ml-20 mt-7 order-last md:order-first relative md:w-90 md:h-90 bg-muted rounded-2xl overflow-hidden border border-border shadow-xl flex items-center justify-center group"
                >
                    {/* Placeholder Illustration / Text */}
                    <div>
                            <Image
                                src="/images/Kashmir.jpg"
                                alt="Sravanth profile picture"
                                fill
                                className="object-cover"
                                priority
                            />
                    </div>



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
                        <Button size="lg" className="group">
                            <a href="#projects">View Projects</a>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Contact Me
                        </Button>
                    </div>


                </motion.div>
            </div>
        </SectionContainer>
    );
}
