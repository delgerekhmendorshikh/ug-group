import Image from "next/image";

export default function About() {
  return (
    // <div className="min-h-screen px-10 py-16 text-neutral-800">
    //   <div className="">
    //     <div className="mb-2 text-sm uppercase tracking-widest text-gray-500">
    //       Company
    //     </div>
    //     <h1 className="mb-12 text-[42px]">About Us</h1>
    //   </div>
    //   <div className="mb-12 flex flex-col gap-[24px]">
    //     <div className="flex gap-[50px]">
    //       <div className="flex flex-col items-start md:items-center">
    //         <h2 className="mb-4 text-[28px]">10</h2>
    //         <p className="w-[60%] text-center text-[16px] text-[#414545] md:text-left">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-start md:items-center">
    //         <h2 className="mb-4 text-[28px]">10</h2>
    //         <p className="w-[60%] text-center text-[16px] text-[#414545] md:text-left">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-[30%] text-[16px] text-[#414545]">
    //       Urangan LLC began its operations in 1996 in the fields of welding,
    //       turning, thin metal production, and all types of electric motor
    //       repair. Over the past 28 years, it has been actively participating in
    //       the prosperity and development of Mongolia and has continued to expand
    //       into new sectors. “Urangan” LLC has expanded into a group company
    //       since 2021 and is expanding its operations in a total of 9 sectors.
    //     </div>

    //     <button className="flex w-[7%] items-center rounded-full border border-[#C79D58] px-6 py-3 text-[#C79D58]">
    //       <span className="text[14px]">Learn More</span>
    //     </button>
    //   </div>
    // </div>
    <div className="flex w-full flex-col  items-center justify-center">
      <div className="flex w-[57%] flex-col  justify-center">
        <div className="">
          <p className="text-[14px] font-[500] text-[#767777]">Company</p>
        </div>
        <div className="flex w-[100%] justify-between">
          <div className="w-[40%]">
            <p className="font-500 text-[42px]">About Us</p>
          </div>
          <div className="flex w-[60%] flex-col items-start gap-[54px]">
            <div className="flex gap-[50px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-500 text-[42px]">10</p>
                <p className="text-justify text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-500 text-[42px]">10</p>

                <p className="text-justify text-[#414545]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <p className="text-[#414545]">
              Urangan LLC began its operations in 1996 in the fields of welding,
              turning, thin metal production, and all types of electric motor
              repair. Over the past 28 years, it has been actively participating
              in the prosperity and development of Mongolia and has continued to
              expand into new sectors. “Urangan” LLC has expanded into a group
              company since 2021 and is expanding its operations in a total of 9
              sectors.
            </p>
            <button className="flex h-[40px] w-[125px] items-center justify-center rounded-full border-[1px] border-[#C79D58] text-[#C79D58]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] px-[1%] py-[30px]">
        <Image
          src="/assets/home/fyodor.png"
          alt="skibidi"
          width={700}
          height={367}
          className="rounded-[20px]"
        />
        <Image
          src="/assets/home/fyodor.png"
          alt="skibidi"
          width={700}
          height={367}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
}
