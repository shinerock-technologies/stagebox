"use client";

import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

interface CTAProps {
  data: {
    title: string;
    description: string;
    button: string;
  };
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-neutral-300 mb-10">{data.description}</p>

        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black text-white flex items-center space-x-2 text-lg px-10 py-4">
          <span>{data.button}</span>
        </HoverBorderGradient>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
    </section>
  );
}
