export default function CompanyPartnership() {
  return (
    <div className="flex flex-col gap-12 px-6">
      <div className="h-[1px] w-full bg-black/20 "></div>
      <div className="flex w-full justify-between">
        <div className=""></div>
        <div>
          <p className="flex items-center gap-2 text-[42px]">
            Careers <span className="text-3xl">→</span>
          </p>
          <p className="mt-4 w-[90%] text-[16px] text-black/65">
            Hello, modern workforce. All are welcome here.
          </p>
        </div>

        <div>
          <p className="flex items-center gap-2 text-[42px]">
            Industries <span className="text-3xl">→</span>
          </p>
          <p className="mt-4 text-[16px] text-black/65">
            Investing in a brighter future for all.
          </p>
        </div>
      </div>
    </div>
  );
}
