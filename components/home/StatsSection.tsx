"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/ui/StatCounter";

const stats = [
  { value: 100, suffix: "%", label: "Client Focus" },
  { value: 10,  suffix: "+", label: "Active Projects" },
  { value: 24,  suffix: "/7", label: "Dedicated Support" },
  { value: 1,   suffix: "",  label: "Shared Vision" },
];

export default function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5 border-y border-brand-primary/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
