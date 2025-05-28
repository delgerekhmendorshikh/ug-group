import Image from "next/image";

export default function Core() {
  const data = [
    {
      id: 1,
      title:
        "M bank arena is a prominent sportainment center located in Ulaanbaatar, Mongolia.",
      img: "/assets/home/mbank.png",
    },
    {
      id: 2,
      title:
        "Gan Sports Center is a multi-sports facility located in Ulaanbaatar, Mongolia, offering a range of athletic amenities and programs.",
      img: "/assets/home/gan.png",
    },
    {
      id: 3,
      title:
        "UG Inn is a hotel located in Ulaanbaatar, Mongolia, offering air-conditioned rooms with Wi-Fi and flat-screen TVs.",
      img: "/assets/home/UGInn.png",
    },
    {
      id: 4,
      title:
        "UG Auto, also known as Urangan Auto, is a car dealership located in Ulaanbaatar, Mongolia.",
      img: "/assets/home/UGAuto.png",
    },
    {
      id: 5,
      title:
        "UG Finance offers financial services tailored for individuals and businesses in Mongolia.",
      img: "/assets/home/UGFinance.png",
    },
    {
      id: 6,
      title:
        "U Lounge is a dining spot located on the 4th floor of UG Palace in Ulaanbaatar.",
      img: "/assets/home/ULounge.png",
    },
    {
      id: 7,
      title:
        "UG Palace is a notable sportainment venue in Ulaanbaatar, Mongolia.",
      img: "/assets/home/UGPalace.png",
    },
    {
      id: 8,
      title:
        "UG Expo is a shopping center in Ulaanbaatar offering a range of goods and services under one roof.",
      img: "/assets/home/UGExpo.png",
    },
    {
      id: 9,
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "/assets/home/UGInn2.png",
    },
  ];
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[86%] flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4">
            <Image
              src="/assets/home/logo.png"
              alt="skibidi"
              width={59}
              height={75}
              className=""
            />
          </div>

          <p className="text-[14px] text-[#767777]">BUSINESS BRANCH</p>
          <p className="mt-2 text-[42px]">Core Industries</p>

          <p className="mt-4 w-[50%] text-[#414545]">
            “Urangan” LLC has been expanding into a group company since 2021 and
            is expanding its operations in a total of 9 sectors.
          </p>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((el, index) => (
            <div
              key={index}
              className="flex min-h-[290px] flex-col items-center justify-start rounded-xl border border-[#C79D58] bg-[#C79D58] p-6 text-white"
            >
              <div className="relative mb-4 h-12 w-24">
                <Image src={el.img} alt="" layout="fill" objectFit="contain" />
              </div>
              <p className="text-[14px]] text-center">{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
