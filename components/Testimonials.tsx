"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsProps {
  data: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {data.title}
          </h2>
          <p className="mt-2 sm:mt-3 lg:mt-4 text-neutral-400 text-sm sm:text-base lg:text-lg">
            {data.subtitle}
          </p>
        </motion.div>

        <InfiniteMovingCards items={data.items} speed="slow" />
      </div>
    </section>
  );
}
