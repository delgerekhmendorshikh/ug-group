import Image from "next/image";

export default function NewsroomCareer() {
  return (
    <div className="relative flex h-[474px] w-full flex-col  overflow-hidden rounded-[12px]">
      <div className="">
        <p className="text-black">HOME → CAREER</p>
        <p className="w-[70%] text-[42px] text-black">NEWSROOM</p>
      </div>
      <div className="flex w-[full] flex-col justify-between rounded-[12px] bg-white p-[20px] md:flex-row">
        <div className="w-[50%] space-y-3">
          <p className="text-[16px] text-[#8A8F98]">2 сарын 8, 2025</p>
          <p className="w-[50%] text-[24px] text-[#414545]">
            Stephen Curry-ийн Gentleman's Cut бурбон вискиний талаарх 5
            сонирхолтой баримт
          </p>
          <p className="text-[14px] text-[#414545]">
            Монгол Улсын Их Хурлын ээлжит сонгууль болох ердөө сар гаруй хугацаа
            үлджээ. Сонгууль болохтой зэрэгцэн олон нийтийн сүлжээний бот
            хаягууд идэвхэждэг бичигдээгүй дүрэмтэй. 
          </p>
        </div>
        <div className="overflow-hidden rounded-[12px]">
          <Image
            src="/assets/home/fyodor.png"
            alt=""
            width={670}
            height={460}
            className="objet-contain h-[350px] rounded-[12px] border-2 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
