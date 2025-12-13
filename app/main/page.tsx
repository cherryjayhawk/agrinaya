import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Notification from "@/components/home/notification";
import { ChevronRight } from "lucide-react";
import { PiDropFill } from "react-icons/pi";

async function Page() {
  // TODO: fetch notifications from indexedDB or API

  // TODO: fetch insights from API

  return (
    <div className="relative z-10 flex-1 p-4 min-h-dvw h-screen overflow-y-hidden">
      <div className="rounded-xs flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/cherryjayhawk.png" />
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-light">Hi, Rama! &#128075;</p>
            <p className="font-semibold">Good morning!</p>
          </div>
        </div>
        <div className="full">
          <Notification
            notifications={[
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-12-02 20:19:00",
                read: false,
              },
              {
                feature: "chat",
                message: "Your daily insight has been updated!",
                type: "error",
                date: "2025-12-01",
                read: false,
              },
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-11-28",
                read: true,
              },
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-11-25",
                read: true,
              },
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-11-10",
                read: true,
              },
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-11-01",
                read: true,
              },
              {
                feature: "insight",
                message: "Your daily insight has been updated!",
                type: "info",
                date: "2025-11-01",
                read: true,
              },
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-gray-200 w-full h-72 my-4 text-center">
        Banner
      </div>

      <div className="flex justify-start items-center gap-2">
        <h2 className="text-lg font-semibold my-4">Today&apos;s Insight</h2>
        <ChevronRight size={20} />
      </div>

      {/* Insights */}
      <div className="flex flex-col gap-4 mb-12 overflow-y-scroll h-[46vh]">
        <div className="bg-white rounded-2xl flex flex-col w-full h-full p-4 gap-2">
          <div className="flex w-full gap-4">
            <div className="flex justify-center-safe items-center w-12 h-14 bg-blue-50 rounded-full">
              <PiDropFill size={32} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center-safe flex-1">
              <h3 className="font-semibold text-gray-600">WATERING</h3>
              <h4 className="text-base font-semibold">Maize - Field A3</h4>
            </div>
            <div>
              <p className="text-red-600 bg-red-200 font-semibold rounded-lg px-3 py-1">
                High
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Low soil moisture detected. Recommend immediate irigation to prevent
            stress and yield loss.
          </p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col w-full h-full p-4 gap-2">
          <div className="flex w-full gap-4">
            <div className="flex justify-center-safe items-center w-12 h-14 bg-blue-50 rounded-full">
              <PiDropFill size={32} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center-safe flex-1">
              <h3 className="font-semibold text-gray-600">WATERING</h3>
              <h4 className="text-base font-semibold">Maize - Field A3</h4>
            </div>
            <div>
              <p className="text-red-600 bg-red-200 font-semibold rounded-lg px-3 py-1">
                High
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Low soil moisture detected. Recommend immediate irigation to prevent
            stress and yield loss.
          </p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col w-full h-full p-4 gap-2">
          <div className="flex w-full gap-4">
            <div className="flex justify-center-safe items-center w-12 h-14 bg-blue-50 rounded-full">
              <PiDropFill size={32} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center-safe flex-1">
              <h3 className="font-semibold text-gray-600">WATERING</h3>
              <h4 className="text-base font-semibold">Maize - Field A3</h4>
            </div>
            <div>
              <p className="text-red-600 bg-red-200 font-semibold rounded-lg px-3 py-1">
                High
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Low soil moisture detected. Recommend immediate irigation to prevent
            stress and yield loss.
          </p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col w-full h-full p-4 gap-2">
          <div className="flex w-full gap-4">
            <div className="flex justify-center-safe items-center w-12 h-14 bg-blue-50 rounded-full">
              <PiDropFill size={32} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center-safe flex-1">
              <h3 className="font-semibold text-gray-600">WATERING</h3>
              <h4 className="text-base font-semibold">Maize - Field A3</h4>
            </div>
            <div>
              <p className="text-red-600 bg-red-200 font-semibold rounded-lg px-3 py-1">
                High
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Low soil moisture detected. Recommend immediate irigation to prevent
            stress and yield loss.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
