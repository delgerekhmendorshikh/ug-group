"use client";

import Image from "next/image";
import { useState } from "react";

export default function CompanyLeadership() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const leaders = [
    {
      name: "Б.Лхагвасурэн",
      title: "Уранган Группын Ерөнхий захирал",
      image: "/assets/home/fyodor.png",
      bio: "Avner Applbaum is the President and Chief Executive Officer of Valmont Industries, leading a team of 11,000 employees across more than 20 countries. Under his leadership, Valmont delivers engineered structures that support critical infrastructure globally, and advances agriculture productivity as the industry leader in mechanized irrigation.",
      additionalInfo:
        "As President and CEO, Applbaum is committed to executing Valmont's long-term strategy, fostering customer-driven innovation, and driving continuous improvement across the organization. His leadership emphasizes operational excellence, strategic growth, and leveraging technology to enhance Valmont's impact on the industries it serves.",
    },
    {
      name: "Л.Золбоо",
      title: "Уранган Группын Гүйцэтгэх захирал",
      image: "/assets/home/fyodor.png",
      bio: "L.Zolboo serves as the Chief Executive Officer of Urangan Group, bringing extensive experience in corporate leadership and strategic planning. His leadership has been instrumental in driving the company's growth and establishing strong partnerships across various industries.",
      additionalInfo:
        "Zolboo's approach to leadership emphasizes collaboration, innovation, and sustainable business practices. He is committed to building a strong organizational culture that promotes excellence and delivers value to all stakeholders.",
    },
    {
      name: "Л.Золзаяа",
      title: "Уранган Палас ХХК захирал",
      image: "/assets/home/fyodor.png",
      bio: "L.Zolzaya is the Executive Director of Urangan Palace LLC, overseeing the strategic operations and development of the company's hospitality and real estate ventures. Her expertise in project management and business development has been crucial to the company's success.",
      additionalInfo:
        "Under her leadership, Urangan Palace LLC has achieved significant milestones in delivering high-quality services and maintaining strong customer relationships. She focuses on operational efficiency and continuous improvement in all aspects of the business.",
    },
    {
      name: "Д.Золзаяа",
      title: "Уранган Палас ХХК дэд захирал",
      image: "/assets/home/fyodor.png",
      bio: "D.Zolzaya serves as the Deputy Director of Urangan Palace LLC, supporting the executive team in implementing strategic initiatives and managing day-to-day operations. Her attention to detail and commitment to excellence ensures smooth business operations.",
      additionalInfo:
        "As Deputy Director, she plays a key role in coordinating between different departments and ensuring that all projects are executed according to the highest standards. Her leadership style emphasizes teamwork and effective communication.",
    },
  ];

  return (
    <>
      <div className="min-h-screen  py-16">
        <div className="mb-16">
          <p className="mb-4 text-[14px] font-medium uppercase text-[#303030]">
            УРАНГАHЫ УДИРДЛАГА
          </p>
          <h2 className="mb-12 text-4xl font-light text-gray-800">
            Урангаhы удирдлагын багтай танилц
          </h2>

          <div className="mb-16 grid grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="flex cursor-pointer flex-col transition-all duration-200"
                onClick={() => setSelectedPerson(index)}
              >
                <Image
                  src="/assets/home/fyodor.png"
                  alt="skibidi"
                  width={400}
                  height={367}
                  className="rounded-[20px] object-contain"
                />
                <h3 className="mb-1 text-lg font-medium text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[14px] font-medium uppercase text-[#303030]">
            ДЭЛБҮТГЭЛ
          </p>
          <h2 className="text-4xl font-light text-gray-800">
            Уранган группын бүтээц
          </h2>
        </div>
      </div>

      {selectedPerson !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[20px] bg-white shadow-2xl">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedPerson(null)}
                className="text-xl font-light text-gray-500 hover:text-gray-700"
              >
                Хаах
              </button>
            </div>

            <div className="px-6 pb-6">
              <div className="mb-6 flex aspect-[16/9] items-center justify-center rounded-[15px] bg-gradient-to-br from-gray-300 to-gray-400 text-2xl font-medium text-white">
                {leaders[selectedPerson].name}
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <h3 className="mb-1 text-xl font-semibold text-gray-800">
                    {leaders[selectedPerson].name}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {leaders[selectedPerson].title}
                  </p>
                </div>
              </div>

              <div className="space-y-4 leading-relaxed text-gray-700">
                <p>{leaders[selectedPerson].bio}</p>
                <p>{leaders[selectedPerson].additionalInfo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
