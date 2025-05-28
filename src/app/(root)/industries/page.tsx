import CoreCareer from "@/components/industries/CoreCareer";
import CoreCollaboration from "@/components/industries/CoreCollaboration";
import CoreImages from "@/components/industries/CoreImages";
import CoreIndustries from "@/components/industries/CoreIndustries";

export default function NewIndustries() {
  return (
    <div className="mt-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col gap-[100px]">
        <CoreIndustries />
        <CoreImages />
        <CoreCollaboration />
        <CoreCareer />
      </div>
    </div>
  );
}
