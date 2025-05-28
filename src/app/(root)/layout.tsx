import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex-1 bg-[#F7F1E8]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
