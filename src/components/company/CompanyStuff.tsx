import Image from "next/image";

export default function CompanyStuff() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-white p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/assets/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3 text-black/65">
          <p>Mbank</p>
          <p>
            M Bank: Working in partnership with the sports and entertainment
            industries, we are developing Mongolia's first dedicated sports
            arena, "M Bank Arena."
          </p>
        </div>
      </div>
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-white p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/assets/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-black/65">
          <p>Associations and organizations</p>
          <p>
            We actively collaborate with relevant professional associations in
            each industry and strive to raise quality and service standards to
            new levels.
          </p>
        </div>
      </div>
      <div className="flex h-[290px] w-[30%] flex-col justify-between rounded-[20px] bg-white p-[20px]">
        <div className="relative h-[60px] w-[60px]">
          <Image
            src="/assets/home/vector.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-black/65">
          <p>Foreign suppliers and brands</p>
          <p>
            We are working together to introduce products and services with
            international standards and bring new choices to Mongolian
            consumers.
          </p>
        </div>
      </div>
    </div>
  );
}
