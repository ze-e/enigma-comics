import Link from "next/link";
import { jacquard24Class } from "../Fonts/Fonts";
Link
export default function MenuItem({ children, href }: { children: React.ReactNode, href?: string }) {
    
  const ComponentBody:React.FC = () => (
    <h2 className={`
      text-4xl font-bold text-center mb-4 md:text-[75px] 
      text-stroke antialiased subpixel-antialiased
      ${jacquard24Class}`
    }>
      {children}
    </h2>
  )
  

  return href ? <Link href={href}><ComponentBody /></Link> : <ComponentBody />
}
