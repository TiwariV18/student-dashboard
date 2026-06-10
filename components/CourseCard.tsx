"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  Code,
  Layers,
} from "lucide-react";

const icons = {
  BookOpen,
  Rocket,
  Code,
  Layers,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: {
  title: string;
  progress: number;
  icon_name: keyof typeof icons;
}) {
  const Icon = icons[icon_name];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      p-6
      hover:border-blue-500/30
      hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Gradient Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-500/5
        via-transparent
        to-purple-500/5
        pointer-events-none
        "
      />

      <div className="relative z-10">
        <Icon
          className="mb-5 text-zinc-300"
          size={28}
        />

        <h3 className="text-lg font-semibold mb-6">
          {title}
        </h3>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            "
          />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-zinc-400 text-sm">
            Progress
          </span>

          <span className="font-semibold text-white">
            {progress}%
          </span>
        </div>
      </div>
    </motion.article>
  );
}