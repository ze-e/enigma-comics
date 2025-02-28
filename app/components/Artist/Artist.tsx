import Image from "next/image";
import H5 from "../H5/H5";
import { StaticImageData } from "next/image";
import { aleoClass, bitterClass } from "../Fonts/Fonts";
type ArtistProps = {
  img?: StaticImageData;
  name: string;
  credits?: string[];
  description: string;
  links?: string[];
};

export default function Artist({ img, name, credits, description, links }: ArtistProps) {
  return (
    <div className="flex flex-row max-[1140px]:flex-col max-[900px] max-[1140px]:max-w-[360px] md:w-[900px] mx-auto">
      {img && (
        <div className="relative h-[300px] min-[1140px]:w-[360px] min-[1140px]:h-[360px] mb-[14px] mt-[14px]">
          <Image src={img} alt="Artist" fill className="object-contain" />
        </div>
      )}
      <div className="flex-1 mb-[20px] mt-[20px] min-[1140px]:w-[600px] min-[1140px]:ml-[24px]">
        {name && <H5>{name}</H5>}
        {credits && credits.length > 0 && (
          <div>
            {credits.map((credit, index) => (
              <p className={`${bitterClass} min-[1140px]:text-lg text-base`} key={index}>{credit}</p>
            ))}
          </div>
        )}
        {description && <p className={`${aleoClass} font-bold	`}>{description}</p>}
        {links && links.length > 0 && (
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-2 ${aleoClass}`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
