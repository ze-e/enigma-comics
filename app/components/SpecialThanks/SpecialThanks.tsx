import H5 from "../H5/H5";
import { aleoClass } from "../Fonts/Fonts";
type ArtistProps = {
  name: string;
  description: string;
  links?: string[];
};

export default function SpecialThanks({ name, description, links }: ArtistProps) {
  return (
    <div className="flex flex-col w-[300px] p-[24px] text-center">
        {name && <H5>{name}</H5>}
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
