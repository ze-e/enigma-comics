import { alegreyaClass } from "../Fonts/Fonts";

export default function H5({ children }: { children: React.ReactNode}) {

  return (  <h5 className={`
    text-3xl ${alegreyaClass}`
  }>
    {children}
  </h5>)
}
