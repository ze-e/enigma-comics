import Image from "next/image";
import Background from "@/app/components/Background/Background";
import MenuItem from "@/app/components/MenuItem/MenuItem";
import Lettering from "@/app//img/lettering.png";
import MainImage from "@/app/components/MainImage/MainImage";

export default function Home() {
  return (
    <div className="relative w-full min-h-[200px]">
      <Background />
      <div className="relative z-10">
        <div className="block md:hidden flex justify-center p-[10px] md:p-[32px]">
          <MainImage />
        </div>
        <div className="mx-auto flex justify-center items-center pt-[4px] pb-[32px]  md:pt-[56px] md:pb-[56px]">
          <Image 
            src={Lettering} 
            alt="enigma-comics" 
            className="w-[200px] md:w-[400px]" 
          />
        </div>

        <div className="w-full md:w-[684px] mx-auto flex flex-col md:flex-row justify-between">
          <MenuItem href="/placeholder">
            Buy Comics
          </MenuItem>
          <MenuItem href="/placeholder">
            Our Series
          </MenuItem>
        </div>

        <div className="hidden md:flex justify-center p-[32px]">
          <div className="flex justify-center p-[32px]">
            <MainImage />
          </div>
        </div>

        <div className="w-full md:w-[684px] mx-auto flex flex-col md:flex-row justify-between">
          <MenuItem href="/placeholder">
            Our Artists
          </MenuItem>
          <MenuItem href="/placeholder">
            Contact Us
          </MenuItem>
        </div>
        <div className="h-[32px]"></div>      
      </div>
    </div>
  );
}
