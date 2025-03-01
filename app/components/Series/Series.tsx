import Heading from "../Heading/Heading";
import { StaticImageData } from "next/image";
import Carousel from "../Carousel/Carousel";

type SeriesProps = {
  imgs: StaticImageData[];
  name: string;
  tagline?: string;
  credits?: string[];
  description: string;
  links?: string[];
};

export default function Series({ imgs, name, tagline, credits, description, links }: SeriesProps) {
  return (
    <div className="flex flex-row max-[1140px]:flex-col max-[900px] max-[1140px]:max-w-[360px] md:w-[900px] mx-auto p-[10px]">
        <Carousel images={imgs} />
      <div className="flex-1 mb-[20px] mt-[20px] min-[1140px]:w-[600px] min-[1140px]:ml-[24px]">
        {name && <Heading>{name}</Heading>}
        {tagline && <Heading level={3}>{tagline}</Heading>}
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
