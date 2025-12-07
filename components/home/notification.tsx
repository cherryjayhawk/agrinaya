"use client";

import { BellDot } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  PiChatsLight,
  PiChecksBold,
  PiDotsThreeVerticalBold,
  PiGear,
  PiPlant,
  PiScan,
  PiSealCheck,
  PiUsersThree,
} from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/hooks/helpers/timeAgoFormatter";

type NotificationItem = {
  feature: keyof typeof notificationIcon;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  date: string;
  read: boolean;
};

type NotificationProps = {
  notifications: NotificationItem[];
};

const notificationType = {
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

const notificationIcon = {
  insight: PiPlant,
  chat: PiChatsLight,
  scan: PiScan,
  community: PiUsersThree,
  other: PiSealCheck,
};

export default function Notification({ notifications }: NotificationProps) {

  // TODO: check indexedDB if notification exists to set read status

  // TODO: implement mark all as read functionality

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative flex items-center justify-center rounded-full bg-blue-100 p-2 cursor-pointer">
          <BellDot width={20} height={20} />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
              {notifications.length}
            </span>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent className="max-w-88 min-w-88 min-h-24 max-h-96 mr-4 p-0 overflow-y-hidden shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 shadow-md">
          <h2 className="text-lg font-semibold">Notification</h2>
          <PiGear size={16} className="cursor-pointer" />
        </div>

        <div className="max-h-60 overflow-y-scroll">
          {notifications.length === 0 ? (
            <div className="h-16 flex items-center justify-center text-foreground/50">
              No notifications
            </div>
          ) : (
            notifications.map((item, idx) => {
              const Icon =
                notificationIcon[item.feature] || notificationIcon.other;

              return (
                <div key={idx}>
                  <div
                    className={cn(
                      "h-14 px-3 flex items-center text-xs gap-3 py-0 my-0",
                      item.read ? "bg-white" : "bg-gray-100"
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-full",
                        notificationType[item.type || "info"]
                      )}
                    >
                      <Icon size={16} />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm">{item.message}</p>
                      <span className="text-xs text-foreground/50">
                        {item.feature} • {timeAgo(item.date)}
                      </span>
                    </div>

                    <PiDotsThreeVerticalBold
                      size={16}
                      className="ml-auto mr-2 cursor-pointer"
                    />
                  </div>

                  <Separator />
                </div>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-white flex justify-end items-center border-t cursor-pointer hover:underline">
          <PiChecksBold size={16} />
          <p className="text-xs text-end px-2">Mark all as read</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
