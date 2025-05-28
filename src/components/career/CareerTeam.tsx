export default function CareerTeam() {
  return (
    <div className="rounded-[12px relative flex h-[474px]  w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/home/fyodor.png)" }}
      ></div>
      <div className="absolute bottom-20 left-20 z-20 flex flex-col">
        <p className="text-white">HOME → INDUSTRIES</p>
        <p className="text-[42px] text-white">Career with team Urangan</p>
        <p className="text-[16px] text-white">
          Enjoy a career working with a team that is committed to each other &
          our customers
        </p>
      </div>
    </div>
  );
}
