import CompanyDocument from "@/components/company/CompanyDocument";
import CompanyFundamentals from "@/components/company/CompanyFundamentals";
import CompanyGroup from "@/components/company/CompanyGroup";
import CompanyImages from "@/components/company/CompanyImages";
import CompanyInfo from "@/components/company/CompanyInfo";
import CompanyLeadership from "@/components/company/CompanyLeadership";
import CompanyNumbers from "@/components/company/CompanyNumbers";
import CompanyPartnership from "@/components/company/CompanyPartnership";
import CompanyStuff from "@/components/company/CompanyStuff";

export default function Company() {
  return (
    <div className="my-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col gap-2">
        <CompanyImages />
        <CompanyFundamentals />
        <CompanyStuff />
        <CompanyNumbers />
        <CompanyLeadership />
        <CompanyDocument />
        <CompanyInfo />
        <CompanyGroup />
        <CompanyPartnership />
      </div>
    </div>
  );
}
