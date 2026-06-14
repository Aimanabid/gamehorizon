"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionTitleProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-brand-primary" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-primary">
            {label}
          </span>
          <span className="h-px w-8 bg-brand-primary" />
        </div>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gradient">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-400 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
