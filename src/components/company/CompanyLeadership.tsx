import Image from "next/image";

export default function CompanyLeadership() {
  return (
    <div className="py-16">
      <div className="">
        <p className="mb-4 text-[14px] uppercase text-[#303030]">
          urangan Leadership
        </p>
        <div className="mb-16 flex w-full justify-between text-[42px] text-[#414545]">
          <p>Meet the Urangan leadership team.</p>
          <div className="flex gap-[18px]">
            <p>←</p>
            <span className="text-black">→</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        <div className="">
          <Image
            src="/assets/home/fyodor.png"
            alt="skibidi"
            width={400}
            height={367}
            className="rounded-[20px] object-contain"
          />
          <p className="text-[16px]">B. Lkhagvasuren</p>
          <p className="text-black/65">General Director of Urangan Group</p>
        </div>
        <div className="">
          <Image
            src="/assets/home/fyodor.png"
            alt="skibidi"
            width={400}
            height={367}
            className="rounded-[20px]"
          />
          <p className="text-[16px]">L.Zolboo</p>
          <p className="text-black/65">CEO of Urangan Group</p>
        </div>
        <div className="">
          <Image
            src="/assets/home/fyodor.png"
            alt="skibidi"
            width={400}
            height={367}
            className="rounded-[20px]"
          />
          <p className="text-[16px]">L.Zolzaya</p>
          <p className="text-black/65">
            Executive Director of Urangan Palace LLC
          </p>
        </div>
        <div className="">
          <Image
            src="/assets/home/fyodor.png"
            alt="skibidi"
            width={400}
            height={367}
            className="rounded-[20px]"
          />
          <p className="text-[16px]">D.Zolzaya</p>
          <p className="text-black/65">Deputy Director of Urangan Palace LLC</p>
        </div>
      </div>
    </div>
  );
}
