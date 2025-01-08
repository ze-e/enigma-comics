import Image from "next/image";
import Background from "./components/Background/Background";
import MenuItem from "./components/MenuItem/MenuItem";
import MainImg from "./img/full.png";
import Lettering from "./img/lettering.png";
import MainImage from "./components/MainImage/MainImage";

export default function Home() {
  return (
      <div className="relative w-full min-h-[200px]">
        <Background />
        <div className="relative z-10">
        <div className="mx-auto flex justify-center items-center pt-[56px] pb-[56px]">
          <Image src={Lettering} alt="enigma-comics" width={600} />
        </div>
          <div className="w-[684px] mx-auto flex justify-between">
            <MenuItem>
              Buy Comics
            </MenuItem>
            <MenuItem>
              Our Series
            </MenuItem>
          </div>
          <div className="flex justify-center p-[32px]">
            <MainImage />
            {/* <Image src={MainImg} alt="enigma-logo" width={300} /> */}
          </div>
          <div className="w-[684px] mx-auto flex justify-between">
            <MenuItem>
              Our Artists
            </MenuItem>
            <MenuItem>
              Contact Us
            </MenuItem>
          </div>
        </div>
      </div>
  );
}
