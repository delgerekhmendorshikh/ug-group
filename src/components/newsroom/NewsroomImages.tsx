import Image from "next/image";
import React from "react";

const items = [
  {
    date: "2 сарын 8, 2025",
    description: "2025/01: Энэ сард шинээр хэвлэгдсэн шилдэг номууд",
  },
  {
    date: "2 сарын 8, 2025",
    description:
      "Stephen Curry-ийн Gentleman's Cut бурбон вискиний талаарх 5 сонирхолтой баримт",
  },
  {
    date: " 1 сарын 31, 2025",
    description:
      "7 үе дамжсан шилмэл бүтээл, бүрэн шинэчлэгдсэн Nissan Patrol Y63",
  },
];

const NewsroomImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div className="flex flex-col rounded-lg p-4">
          <Image
            src="/assets/home/fyodor.png"
            alt=""
            width={670}
            height={460}
            className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[14px] uppercase text-[#8A8F98]">
                {item.date}
              </p>
              <p className="text-[20px] text-[#414545]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      {items.map((item, index) => (
        <div className="flex flex-col rounded-lg p-4">
          <Image
            src="/assets/home/fyodor.png"
            alt=""
            width={670}
            height={460}
            className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[14px] uppercase text-[#8A8F98]">
                {item.date}
              </p>
              <p className="text-[20px] text-[#414545]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      {items.map((item, index) => (
        <div className="flex flex-col rounded-lg p-4">
          <Image
            src="/assets/home/fyodor.png"
            alt=""
            width={670}
            height={460}
            className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[14px] uppercase text-[#8A8F98]">
                {item.date}
              </p>
              <p className="text-[20px] text-[#414545]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      {items.map((item, index) => (
        <div className="flex flex-col rounded-lg p-4">
          <Image
            src="/assets/home/fyodor.png"
            alt=""
            width={670}
            height={460}
            className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
          />
          <div className="flex flex-col">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[14px] uppercase text-[#8A8F98]">
                {item.date}
              </p>
              <p className="text-[20px] text-[#414545]">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsroomImages;
