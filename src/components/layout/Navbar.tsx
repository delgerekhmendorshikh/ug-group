"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div
      className={`absolute z-30 mt-[30px] flex w-full justify-center transition-colors duration-300 ${
        isHome ? "bg-transparent" : ""
      }`}
    >
      <div className="flex h-[50px] w-[86%] items-center justify-between">
        <div
          className={`flex h-[48px] items-center gap-10 rounded-full ${
            isHome ? "bg-white/20" : "bg-white"
          } px-6`}
        >
          <Logo />
          <div className={isHome ? "text-white" : "text-black"}>Company</div>

          <Link href="/industries">
            <div
              className={`cursor-pointer transition-all hover:rounded-full hover:px-2 ${
                isHome
                  ? "text-white hover:bg-white/50"
                  : "text-[#C79D58] hover:bg-gray-100"
              }`}
            >
              Industries
            </div>
          </Link>

          <Link href="/social">
            <div
              className={`cursor-pointer transition-all hover:rounded-full hover:px-2 ${
                isHome
                  ? "text-white hover:bg-white/50"
                  : "text-[#C79D58] hover:bg-gray-100"
              }`}
            >
              Social Responsible
            </div>
          </Link>
          <Link href="/career">
            <div
              className={`cursor-pointer transition-all hover:rounded-full hover:px-2 ${
                isHome
                  ? "text-white hover:bg-white/50"
                  : "text-[#C79D58] hover:bg-gray-100"
              }`}
            >
              Careers
            </div>
          </Link>
          <Link href="/collaboration">
            <div
              className={`cursor-pointer transition-all hover:rounded-full hover:px-2 ${
                isHome
                  ? "text-white hover:bg-white/50"
                  : "text-[#C79D58] hover:bg-gray-100"
              }`}
            >
              Collaboration
            </div>
          </Link>
          <Link href="/newsroom">
            <div
              className={`cursor-pointer transition-all hover:rounded-full hover:px-2 ${
                isHome
                  ? "text-white hover:bg-white/50"
                  : "text-[#C79D58] hover:bg-gray-100"
              }`}
            >
              Newsroom
            </div>
          </Link>

          <div className="flex gap-2">
            <div
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full ${
                isHome ? "bg-white/20" : "bg-gray-200"
              }`}
            >
              <Logo />
            </div>
            <div
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full ${
                isHome ? "bg-white/20" : "bg-gray-200"
              }`}
            >
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
