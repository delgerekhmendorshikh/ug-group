export default function CollaborationImages() {
  return (
    <div className="relative flex h-[474px] w-full  overflow-hidden rounded-[12px]">
      <div
        className="absolute inset-0 z-0 rounded-[20px] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/home/fyodor.png)" }}
      ></div>
      <div className="absolute bottom-20 left-20 z-20 flex flex-col">
        <p className="text-white">HOME → INDUSTRIES</p>
        <p className="w-[70%] text-[42px] text-white">
          WORKING TOGETHER ADDING VALUE
        </p>
        <p className="text-[16px] text-white">
          Enjoy a career working with a team that is committed to each other &
          our customersx``
        </p>
      </div>
    </div>
  );
}
