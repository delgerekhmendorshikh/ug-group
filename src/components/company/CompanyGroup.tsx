import Image from "next/image";

export default function CompanyGroup() {
  return (
    <div className="py-16">
      <div className="">
        <p className="mb-4 text-[14px] uppercase text-[#767777]">
          Infrastructure
        </p>
        <p className="mb-16 text-[42px]">Urangan group structure</p>
      </div>
      <Image
        src="/assets/home/project.png"
        alt="skibidi"
        width={400}
        height={367}
        className="w-full rounded-[20px]"
      />
    </div>
  );
}
