"use client";

import {
  IoHomeOutline,
  IoHomeSharp,
  IoPersonOutline,
  IoPersonSharp,
} from "react-icons/io5";
import {
  PiChatsLight,
  PiChatsFill,
  PiCamera,
  PiCameraFill,
  PiPlant,
  PiPlantFill,
} from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    to: "/main",
    icon: IoHomeOutline,
    activeIcon: IoHomeSharp,
  },
  {
    to: "/main/market",
    icon: PiPlant,
    activeIcon: PiPlantFill,
  },
  {
    to: "/main/camera",
    icon: PiCamera,
    activeIcon: PiCameraFill,
  },
  {
    to: "/main/chat",
    icon: PiChatsLight,
    activeIcon: PiChatsFill,
  },
  {
    to: "/main/profile",
    icon: IoPersonOutline,
    activeIcon: IoPersonSharp,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-lg z-50 border-t border-gray-200 shadow-md rounded-t-2xl w-full">
      <div className="flex justify-around py-2">
        {navItems.map(({ to, icon: Icon, activeIcon: ActiveIcon }) => {
          const isActive = pathname === to;
          return (
            <Link key={to} href={to}>
              <motion.div
                layout
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  opacity: isActive ? 1 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-xs"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isActive
                      ? "bg-gray-200"
                      : "text-gray-500"
                  }`}
                >
                  {isActive ? (
                    <ActiveIcon className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
