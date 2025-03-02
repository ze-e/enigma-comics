import Image from "next/image";
import Heading from "../Heading/Heading";
import { StaticImageData } from "next/image";
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
      <div className="flex-1 mb-[20px] mt-[20px] min-[1140px]:w-[600px] min-[1140px]:ml-[24px] max-[1140px]:max-w-[300px] max-[1140px]:p-[10px]">
        {name && <Heading>{name}</Heading>}
        {credits && credits.length > 0 && (
          <div>
            {credits.map((credit, index) => (
              <Heading level={2} key={index}>{credit}</Heading>
            ))}
          </div>
        )}
        <br />
        <br />
        {description && <Heading level={3}><strong>{description}</strong></Heading>}
        <br />
        <br />
        <br />
        <br />
        {links && links.length > 0 && (
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-2`}
              >
                <Heading level={3}>
                {link}
                </Heading>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
