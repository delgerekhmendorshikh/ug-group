"use client";

import Image from "next/image";

const cards = [
  { title: "M bank arena" },
  { title: "GAN sports center" },
  { title: "UG INN" },
];

export default function CoreImages() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[20px] pt-8">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col rounded-[20px] bg-white">
            <div className="relative h-[220px] w-full">
              <Image
                src="/assets/home/fyodor.png"
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 text-white">
                {card.title}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h2 className="mb-2 text-[16px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
                <p className="border-t pt-4 text-[14px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col rounded-[20px] bg-white">
            <div className="relative h-[220px] w-full">
              <Image
                src="/assets/home/fyodor.png"
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                {card.title}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h2 className="mb-2 text-[16px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
                <p className="border-t pt-4 text-[14px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col rounded-[20px] bg-white">
            <div className="relative h-[220px] w-full">
              <Image
                src="/assets/home/fyodor.png"
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                {card.title}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h2 className="mb-2 text-[16px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
                <p className="border-t pt-4 text-[14px] text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
