import Image from "next/image";
import EnigmaLogo from "@/app/img/Enigma-Logo.png"
import MainMenu from "../MainMenu/MainMenu";

export default function Header() {
  return (
    <div className="bg-[#281668] h-[60px] w-full p-[10px]">
      <div className="flex justify-between">
        <Image src={EnigmaLogo} alt="enigma-logo" width={40} />
        <MainMenu />
      </div>
    </div>
  );
}
