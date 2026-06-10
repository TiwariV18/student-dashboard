"use client";

import { Home, BookOpen, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { id: "home", icon: Home },
  { id: "courses", icon: BookOpen },
  { id: "settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="h-screen w-20 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-6">
      <ul className="space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <button
                onClick={() => setActive(item.id)}
                className="relative flex items-center justify-center w-12 h-12"
              >
                {active === item.id && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-xl bg-white/10 border border-white/20"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <Icon className="relative z-10 text-white" size={24} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}