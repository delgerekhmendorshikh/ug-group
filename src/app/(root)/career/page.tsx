import CareerBenefits from "@/components/career/CareerBenefits";
import CareerCollaboration from "@/components/career/CareerCollaboration";
import CareerIndustries from "@/components/career/CareerIndustries";
import CareerTeam from "@/components/career/CareerTeam";
import UraganTeam from "@/components/career/CareerUragan";

export default function Career() {
  return (
    <div className="my-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col gap-2">
        <CareerTeam />
        <UraganTeam />
        <CareerBenefits />
        <CareerCollaboration />
        <CareerIndustries />
      </div>
    </div>
  );
}
