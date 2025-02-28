import { alegreyaClass } from "../Fonts/Fonts";

export default function H5({ children }: { children: React.ReactNode}) {

  return (  <h5 className={`
    md:text-3xl text-2xl font-bold ${alegreyaClass}`
  }>
    {children}
  </h5>)
}
