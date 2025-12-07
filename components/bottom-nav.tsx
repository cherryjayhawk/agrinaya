"use client";

import {
  PiChatsLight,
  PiChatsFill,
  PiPlant,
  PiPlantFill,
  PiUsersThree,
  PiUsersThreeFill,
  PiHouse,
  PiHouseFill,
  PiScan,
  PiScanFill,
} from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    to: "/main",
    icon: PiHouse,
    activeIcon: PiHouseFill,
    label: "Home",
  },
  {
    to: "/main/insight",
    icon: PiPlant,
    activeIcon: PiPlantFill,
    label: "Insight",
  },
  {
    to: "/main/scan",
    icon: PiScan,
    activeIcon: PiScanFill,
    label: "Scan",
  },
  {
    to: "/main/community",
    icon: PiUsersThree,
    activeIcon: PiUsersThreeFill,
    label: "Community",
  },
  {
    to: "/main/chat",
    icon: PiChatsLight,
    activeIcon: PiChatsFill,
    label: "Chat",
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-lg z-50 bg-white border-t border-gray-200 shadow-md rounded-t-2xl w-full">
      <div className="flex justify-around py-2">
        {navItems.map(({ to, icon: Icon, activeIcon: ActiveIcon, label }) => {
          const isActive = pathname === to;
          return (
            <Link key={to} href={to} className="text-center">
              <motion.div
                layout
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  opacity: isActive ? 1 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-10 h-7 flex items-center justify-center rounded-full ${
                    isActive ? "bg-gray-200" : ""
                  }`}
                >
                  {isActive ? (
                    <ActiveIcon className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
              </motion.div>
              <p
                className={cn(
                  isActive
                    ? "text-gray-900 font-semibold"
                    : " font-light text-gray-900",
                  "text-xs"
                )}
              >
                {label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
