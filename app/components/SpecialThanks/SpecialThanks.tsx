import Heading from "../Heading/Heading";
import { aleoClass } from "../Fonts/Fonts";
type ArtistProps = {
  name: string;
  description: string;
  links?: string[];
};

export default function SpecialThanks({ name, description, links }: ArtistProps) {
  return (
    <div className="flex flex-col w-[300px] p-[24px] text-center">
        {name && <Heading>{name}</Heading>}
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
  );
}
