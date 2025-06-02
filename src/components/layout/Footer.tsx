import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white px-[5%] py-8">
      <div className="flex w-full items-center justify-between">
        <Image
          src="/assets/home/logo.png"
          alt="Urangan Logo"
          width={59}
          height={75}
        />
        <Link href="/contact">
          <button className="rounded-full bg-[#b99860] px-6 py-2 text-white">
            Let’s Collaborate
          </button>
        </Link>
      </div>
      <div className="mt-6 grid h-[325px] w-full grid-cols-4 justify-between gap-8">
        <div className="text-left text-[14px]">
          <p className="">Address</p>
          <p className="mb-2 text-[#414545]">
            "Urangan LLC" on the bank of the Dund River, 3rd khoroo, BGD
          </p>
          <p>© 2025 — Copyright (Erxes llc)</p>
        </div>
        <div className="text-left text-[14px]">
          <p className="">Info</p>
          <p className="flex flex-col text-[#414545]">
            <p>Company</p>
            <p>Industries</p>
            <p>Social Responsible</p>
            <p>Careers</p>
            <p>Collaborate</p>
            <p>Blog</p>
            <p>Contacts</p>
          </p>
          <p className="mt-2">Privacy & Policy</p>
        </div>
        <div className="text-left text-[14px]">
          <p className="">Contact us</p>
          <p className="text-[#414545]">+976 7004-4721</p>
          <p className="text-[#414545]">Info@urangan.mn</p>
        </div>

        <div className="mt-8 flex flex-col items-end justify-between space-x-4">
          <div className="flex space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#C79D58]">
              <FaInstagram />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#C79D58]">
              <FaFacebookF />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#C79D58]">
              <FaYoutube />
            </div>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b99860] text-white">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
