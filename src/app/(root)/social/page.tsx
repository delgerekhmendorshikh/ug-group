// import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
// import { ArrowUp } from "lucide-react";
// import Image from "next/image";

import SocialCompany from "@/components/social/SocialCompany";
import SocialEmployee from "@/components/social/SocialEnployee";
import SocialNewsroom from "@/components/social/SocialNewsroom";
import SocailResponsiblity from "@/components/social/SocialResponsiblity";

export default function SocialResponsible() {
  return (
    <div className="mt-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col gap-[100px]">
        <SocailResponsiblity />
        <SocialCompany />
        <SocialEmployee />
        <SocialNewsroom />
      </div>
    </div>
  );
}
