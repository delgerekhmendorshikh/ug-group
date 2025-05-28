import Image from "next/image";

export default function CollaborationPartnerships() {
  return (
    <div className="mb-[50px] flex flex-col">
      <div className="">
        <p className="mb-4 text-[14px] uppercase uppercase text-[#767777]">
          Partnerships and collaborations
        </p>
        <p className="mb-6 text-[42px]">Elevate Your Career with Urangan</p>
        <p className="mb-16 text-[16px] text-[#414545]">
          Urangan Group develops long-term partnerships with domestic and
          international strategic partners. These include:
        </p>
      </div>
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
    </div>
  );
}
