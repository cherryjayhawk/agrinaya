import {
  Breadcrumb,
  BreadcrumbItem,
  // BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  // BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { PiDotsThreeVerticalBold, PiPlant } from "react-icons/pi";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function Page() {
  const insights = [
    {
      key: 1,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 2,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 3,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 4,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 5,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 6,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 7,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 8,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 9,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
    {
      key: 10,
      crop: "Tomato",
      location: "Greenhouse 1",
      details: "20 HST - Polybag",
    },
  ];

  return (
    <div className="overflow-y-hidden h-svh">
      <div className="flex justify-between p-4 shadow-md">
        <div className="flex items-end-safe gap-2">
          <PiPlant size={24} />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  Insight
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <PiDotsThreeVerticalBold size={24} />
      </div>
      
      <div className="p-4 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">Catalogs</h2>

        <div className="grid grid-cols-2 gap-2 h-32">
          <div className="rounded-xl bg-teal-600 p-4 gap-2 flex flex-col justify-center-safe">
            <p className="text-3xl text-teal-900 font-bold">Fields</p>
            <p className="text-gray-200 font-normal">Browse field catalog</p>
          </div>
          <div className="rounded-xl bg-amber-400 p-4 gap-2 flex flex-col justify-center-safe">
            <p className="text-3xl text-amber-800 font-bold">Crops</p>
            <p className="text-gray-600 font-normal">Browse crops catalog</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold my-4">Insights</h2>

        {/* Categories */}
        <div className="flex gap-2 my-4 overflow-x-auto whitespace-nowrap">
          <div className="border p-2 rounded-lg">All</div>
          <div className="border p-2 rounded-lg">Greenhouse 1</div>
          <div className="border p-2 rounded-lg">Greenhouse 2</div>
          <div className="border p-2 rounded-lg">Field 1</div>
          <div className="border p-2 rounded-lg">Field 2</div>
          <div className="border p-2 rounded-lg">Field 3</div>
          <div className="border p-2 rounded-lg">Field 4</div>
          <div className="border p-2 rounded-lg">Field 5</div>
        </div>

        {/* list of insights */}
        <div className="flex flex-col gap-2 overflow-y-scroll h-[60vh] pb-16">
          {insights.map((insight) => {
            return (
              <Link
                href={`/main/insight/${insight.key}`}
                className="flex items-center justify-between bg-gray-50 border h-20 rounded-2xl p-4"
                key={insight.key}
              >
                <div className="flex items-center-safe">
                  <Image
                    src={"/maskable_icon.png"}
                    width={32}
                    height={32}
                    alt="img"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="font-semibold">
                      {insight.crop} - {insight.location}
                    </p>
                    <p className="">{insight.details}</p>
                  </div>
                </div>

                <ChevronRight />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
