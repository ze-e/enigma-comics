import Link from "next/link";
import { jacquard24Class } from "../Fonts/Fonts";

export default function MenuItem({ children, href, outbound }: { children: React.ReactNode, href?: string, outbound?: boolean }) {
    
  const ComponentBody:React.FC = () => (
    <h2 className={`
      font-bold text-center mb-4 text-[75px] 
      text-stroke antialiased subpixel-antialiased
      ${jacquard24Class}`
    }>
      {children}
    </h2>
  )
  

  return href ? outbound ? <Link href={href} target="_blank" rel="noopener noreferrer"><ComponentBody /></Link> : <Link href={href}><ComponentBody /></Link> : <ComponentBody />
}
