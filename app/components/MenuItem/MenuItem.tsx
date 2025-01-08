import { jacquard24Class } from "../Fonts/Fonts";

export default function MenuItem({ children }: { children: React.ReactNode }) {
    
  return ( 
    <h2 className={`text-4xl font-bold text-center mb-4 md:text-[75px] ${jacquard24Class} text-stroke antialiased subpixel-antialiased`}>
        {children}
    </h2>
    )
}
