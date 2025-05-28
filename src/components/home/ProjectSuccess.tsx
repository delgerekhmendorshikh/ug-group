import Image from "next/image";

export default function ProjectSuccess() {
  return (
    <div className="flex w-full flex-col items-center items-center justify-center space-y-6 p-6">
      <div className="flex w-[50%] flex-col items-center justify-center p-8 text-center">
        <p className="text-[14px] text-[#767777]">BUSINESS BRANCH</p>
        <p className="mt-2 text-[42px]">Projects & Success</p>

        <p className="mt-4 w-[20%] text-[#414545]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className="flex w-[67%]  flex-col gap-6  p-4 md:flex-row"
        >
          <div className="overflow-hidden rounded-[12px]">
            <Image
              src="/assets/home/fyodor.png"
              alt="Waste Crushed"
              width={600}
              height={400}
              className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
            />
          </div>

          <div className="w-[50%] space-y-3">
            <h2 className="text-[24px]">3000 Tons of Waste Crushed</h2>
            <p className="text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
