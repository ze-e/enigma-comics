import { alegreyaClass, aleoClass, bitterClass } from "../Fonts/Fonts";

export default function Heading({ 
    children, 
    level = 1 
  }: { children: React.ReactNode; level?: number }) {
  
  const Heading:React.FC = () => (
    <h5 className={`
        md:text-3xl text-2xl font-bold ${alegreyaClass}`
      }>
      {children}
    </h5>
  )

  const Subheading1:React.FC = () => (
    <p className={`${bitterClass} min-[1140px]:text-lg text-base`} >
      {children}
    </p>
  )

  const Subheading2:React.FC = () => (
    <p className={`${aleoClass}`}>
      {children}
    </p>
  )
  

  return ( level === 1 ? <Heading/> : level === 2 ? <Subheading1 /> : <Subheading2 /> )
}
