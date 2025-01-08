import Image from "next/image";
import EnigmaLogo from "../../img/Enigma-Logo.png"
export default function Header() {
  return (
    <div className="bg-[#281668] h-[60px] w-full p-[10px]">
      <Image src={EnigmaLogo} alt="enigma-logo" width={40}/>
    </div>
  );
}
