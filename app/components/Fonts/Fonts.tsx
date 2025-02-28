import { Jacquard_24, Alegreya, Aleo, Bitter } from 'next/font/google'; 

const jacquard24 = Jacquard_24({
  subsets: ['latin'],
  weight: ['400'],
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400','700', '900'],
});

const aleo = Aleo({
  subsets: ['latin'],
  weight: ['400','700', '900'],
});

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400','700', '900'],
});

export const jacquard24Class = jacquard24.className;
export const alegreyaClass = alegreya.className;
export const aleoClass = aleo.className;
export const bitterClass = bitter.className;

export default function Fonts({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
