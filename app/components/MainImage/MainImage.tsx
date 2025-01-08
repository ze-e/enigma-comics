import Image from "next/image";
import BottomLeft from "@/app/img/MainImage/BottomLeft.png"
import BottomRight from "@/app/img/MainImage/BottomRight.png"
import Center from "@/app/img/MainImage/Center.png"
import MidLeft from "@/app/img/MainImage/MidLeft.png"
import MidRight from "@/app/img/MainImage/MidRight.png"
import TopRight from "@/app/img/MainImage/TopRight.png"
import UpLeft from "@/app/img/MainImage/UpLeft.png"

export default function MainImage() {
  return (
    <div className={`relative w-[300px] h-[300px] mx-auto`}>
      {/* Layered images */}
      <Image
        src={BottomLeft}
        alt="BottomLeft Tentacle"
        className="absolute inset-0 rotate-slow"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={BottomRight}
        alt="BottomRight Tentacle"
        className="absolute inset-0 rotate-slow"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={MidLeft}
        alt="MidLeft Tentacle"
        className="absolute inset-0 rotate-slowRev"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={MidRight}
        alt="MidRight Tentacle"
        className="absolute inset-0 rotate-slow"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={TopRight}
        alt="TopRight Tentacle"
        className="absolute inset-0 rotate-slowRev"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={UpLeft}
        alt="UpLeft Tentacle"
        className="absolute inset-0 rotate-slow"
        layout="fill"
        objectFit="contain"
        priority
      />
    <Image
        src={Center}
        alt="Enigma Logo"
        className="absolute inset-0"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
}
