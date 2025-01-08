import { Jacquard_24 } from 'next/font/google';

const jacquard24 = Jacquard_24({
  subsets: ['latin'],
  weight: ['400'],
});

export const jacquard24Class = jacquard24.className;

export default function Fonts({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
