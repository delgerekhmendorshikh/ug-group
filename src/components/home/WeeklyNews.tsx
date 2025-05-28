export default function News() {
  return (
    <div className="">
      <div className="flex w-[50%] flex-col p-8">
        <div>
          <p className="text-[14px] text-[#767777]">NEWSROOM</p>
        </div>

        <div className="mt-4 flex w-full items-center justify-between">
          <p className="text-[42px]">Weekly news</p>
          <button className="rounded-full bg-white px-4 py-2 text-[#414545]">
            Discover more
          </button>
        </div>
      </div>

      <div className="rounded-2x grid grid-cols-1 gap-[50px] p-6 md:grid-cols-3">
        <div className="flex flex-col space-y-4 overflow-hidden">
          <img
            src="/assets/home/fyodor.png"
            alt=""
            className="h-56 w-full rounded-[20px] object-cover"
          />
          <div className="text-[14px] text-[#8A8F98]">February 8, 2025</div>
          <p className="text-[16px] text-[#414545]">
            Best new books published this month
          </p>
        </div>

        <div className="flex flex-col space-y-4 overflow-hidden rounded-2xl">
          <img
            src="/assets/home/fyodor.png"
            alt=""
            className="h-56 w-full rounded-[20px] object-cover"
          />
          <div className="text-[14px] text-[#8A8F98]">February 8, 2025</div>
          <p className="text-[16px] text-[#414545]">
            5 interesting facts about Stephen Curry's Gentleman's Cut bourbon
            whiskey
          </p>
        </div>
        <div className="flex flex-col space-y-4 overflow-hidden rounded-2xl">
          <img
            src="/assets/home/fyodor.png"
            alt=""
            className="h-56 w-full rounded-[20px] object-cover"
          />
          <div className="text-[14px] text-[#8A8F98]">January 31, 2025</div>
          <p className="text-[16px] text-[#414545]">
            A masterpiece of 7 generations, the completely updated Nissan Patrol
            Y63
          </p>
        </div>
      </div>
    </div>
  );
}
