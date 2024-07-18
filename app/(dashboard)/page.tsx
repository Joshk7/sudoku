import { cn } from "@/lib/utils";
import Image from "next/image";
import { roboto_mono } from "../font";

const DashboardPage = () => {
  return (
    <div className={cn("flex flex-col p-6 items-center justify-center", roboto_mono.className)}>
        DashBoard Page!
    </div>
  );
};

export default DashboardPage;
