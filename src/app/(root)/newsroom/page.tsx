import NewsroomCareer from "@/components/newsroom/NewsroomCareer";
import NewsroomImages from "@/components/newsroom/NewsroomImages";
import NewsroomIndustry from "@/components/newsroom/NewsroomIndustry";

export default function Newsroom() {
  return (
    <div className="my-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col">
        <NewsroomCareer />
        <NewsroomImages />
        <NewsroomIndustry />
      </div>
    </div>
  );
}
