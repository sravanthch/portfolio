"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-6"
                    >
                        <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h2 className="text-2xl font-bold">Contact Me</h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => onOpenChange(false)}
                                    className="h-8 w-8 rounded-full"
                                >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </div>

                            <div className="p-6 flex flex-col gap-4">
                                <a
                                    href="https://www.linkedin.com/in/sravanth-ch/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                                >
                                    <div className="h-10 w-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors">
                                        <Linkedin className="h-5 w-5 text-[#0077b5]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">LinkedIn</p>
                                        <p className="text-sm text-muted-foreground">sravanth-ch</p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/sravanthch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                                >
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Github className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">GitHub</p>
                                        <p className="text-sm text-muted-foreground">sravanthch</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/20">
                                    <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-muted-foreground">sravanth935@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
