import CareerCollaboration from "@/components/career/CareerCollaboration";
import CollaborationDirections from "@/components/collaboration/CollaborationDirections";
import CollaborationImages from "@/components/collaboration/CollaborationImage";
import CollaborationPartnerships from "@/components/collaboration/CollaborationPartnership";
import SocialNewsroom from "@/components/social/SocialNewsroom";

export default function Collaboration() {
  return (
    <div className="my-[100px] flex w-full justify-center">
      <div className="flex w-[86%] flex-col">
        <CollaborationImages />
        <CollaborationDirections />
        <CollaborationPartnerships />
        <CareerCollaboration />
        <SocialNewsroom />
      </div>
    </div>
  );
}
