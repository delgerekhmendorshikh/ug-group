import Image from "next/image";

export default function CoreInfo() {
  return (
    <div className="w-[580px] rounded-[30px] bg-white p-[20px]">
      <div className="flex flex-col gap-[20px]">
        <Image
          src="/assets/home/yayee.png"
          alt="skibidi"
          width={144}
          height={58}
          className="rounded-[20px] object-contain"
        />
        <p className="w-full text-[14px] text-[#414545]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="w-[40%] rounded-full border border-[#C79D58] p-[6px] text-[#C79D58]">
          Sportainment center
        </button>
        <div className="flex justify-between p-[20px]">
          <div className="">
            <p className="text-[24px]">1995</p>
            <p className="text-[16px] text-[#414545]">Year of establishment</p>
          </div>
          <div className="">
            <p className="text-[24px]">185+</p>
            <p className="text-[16px] text-[#414545]">Number of employees</p>
          </div>
        </div>
        <Image
          src="/assets/home/fyodor.png"
          alt="skibidi"
          width={550}
          height={200}
          className="rounded-[20px] object-contain"
        />
      </div>
    </div>
  );
}
