import Image from "next/image";
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
    <div className="flex flex-col md:flex-row p-1 m-1">
      {img && (
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[300px] md:w-[360px] md:h-[360px]">
            <Image src={img} alt="Artist" fill className="object-contain" />
          </div>
        </div>
      )}
      <div className="flex-1">
        {name && <h5>{name}</h5>}
        {credits && credits.length > 0 && (
          <div>
            {credits.map((credit, index) => (
              <p key={index}>{credit}</p>
            ))}
          </div>
        )}
        {description && <p>{description}</p>}
        {links && links.length > 0 && (
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
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
