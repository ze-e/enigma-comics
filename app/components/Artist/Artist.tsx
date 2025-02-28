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
    <div className="flex flex-row max-[1140px]:flex-col max-[1140px]: p-1 m-1 max-[1140px]:mx-auto max-[1140px]:max-w-[360px]">
      {img && (
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[300px] md:w-[360px] md:h-[360px] mb-[14px] mt-[14px]">
            <Image src={img} alt="Artist" fill className="object-contain" />
          </div>
        </div>
      )}
      <div className="flex-1 mb-[20px] mt-[20px]">
        {name && <H5>{name}</H5>}
        {credits && credits.length > 0 && (
          <div>
            {credits.map((credit, index) => (
              <p className={`${bitterClass} text-lg`} key={index}>{credit}</p>
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
