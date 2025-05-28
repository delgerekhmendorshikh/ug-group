"use client";
import { useState } from "react";
import Image from "next/image";

const salaryData = [
  {
    title: "13TH MONTH",
    description: "Supplementary salary given annually.",
    image: "/assets/home/fyodor.png",
  },
  {
    title: "SALARY INCREASE",
    description: "Annual salary increment based on reviews.",
    image: "/assets/home/fyodor.png",
  },
  {
    title: "LONG-TERM",
    description: "Sustainable salary growth strategy.",
    image: "/assets/home/fyodor.png",
  },
];

const insuranceData = [
  {
    title: "HEALTH INSURANCE",
    description: "Comprehensive health coverage for employees.",
    image: "/assets/home/fyodor.png",
  },
];

const bonusData = [
  {
    title: "PERFORMANCE BONUS",
    description: "Bonuses based on KPIs and achievements.",
    image: "/assets/home/fyodor.png",
  },
];

const retirementData = [
  {
    title: "RETIREMENT PLAN",
    description: "Company-supported retirement contributions.",
    image: "/assets/home/fyodor.png",
  },
];

const vacationData = [
  {
    title: "PAID TIME OFF",
    description: "Annual leave with full pay.",
    image: "/assets/home/fyodor.png",
  },
];

const CardGroup = ({ title, data }: { title: string; data: any[] }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="mb-8 rounded-[12px] bg-white p-6 transition-all duration-500">
      <div className="flex items-center justify-between">
        <p className="text-[24px]">{title}</p>
        <button
          onClick={() => setShow((prev) => !prev)}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${show ? "max-h-[1000px] space-y-6 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between border-t pt-4"
          >
            <div className="flex gap-[80px]">
              <p className="mb-1 text-[14px] text-[#767777]">{item.title}</p>
              <p className="w-[60%] text-[16px] text-[#767777]">
                {item.description}
              </p>
            </div>
            <div className="relative h-28 w-48 overflow-hidden rounded-[10px]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CareerBenefits() {
  return (
    <div>
      <div className="px-6 py-16 md:px-20">
        <p className="mb-4 text-[14px] text-[#767777]">BENEFITS</p>
        <p className="mb-6 w-[40%] text-[42px]">
          With better opportunities come better benefits
        </p>
      </div>

      <CardGroup title="01. Basic and additional salary" data={salaryData} />
      <CardGroup title="02. Insurance benefits" data={insuranceData} />
      <CardGroup title="03. Performance bonuses" data={bonusData} />
      <CardGroup title="04. Retirement support" data={retirementData} />
      <CardGroup title="05. Vacation and leaves" data={vacationData} />
    </div>
  );
}
