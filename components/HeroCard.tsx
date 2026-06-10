"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="
      col-span-2
      rounded-3xl
      bg-gradient-to-br
      from-zinc-900
      via-zinc-900
      to-zinc-800
      p-8
      border
      border-zinc-800
      hover:border-blue-500/30
      hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      transition-all
      duration-300
      "
    >
      <div className="space-y-4">
        <h1
          className="
          text-5xl
          font-bold
          bg-gradient-to-r
          from-white
          via-zinc-200
          to-zinc-500
          bg-clip-text
          text-transparent
          "
        >
          Welcome Back, Vanshika 👋
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-2xl">🔥</span>

          <div>
            <p className="text-orange-400 font-semibold text-xl">
              12 Day Learning Streak
            </p>

            <p className="text-zinc-400 text-sm">
              Keep going! You're doing great.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}