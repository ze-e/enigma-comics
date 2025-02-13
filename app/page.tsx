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
        <div className="mx-auto flex justify-center items-center pt-[56px] pb-[56px]">
          <Image src={Lettering} alt="enigma-comics" width={600} />
        </div>
          <div className="w-[684px] mx-auto flex justify-between">
            <MenuItem href="/placeholder">
              Buy Comics
            </MenuItem>
            <MenuItem href="/placeholder">
              Our Series
            </MenuItem>
          </div>
          <div className="flex justify-center p-[32px]">
            <MainImage />
          </div>
          <div className="w-[684px] mx-auto flex justify-between">
            <MenuItem href="/placeholder">
              Our Artists
            </MenuItem>
            <MenuItem href="/placeholder">
              Contact Us
            </MenuItem>
          </div>
        </div>
      </div>
  );
}
