import MenuItem from "@/app/components/MenuItem/MenuItem";
import Link from "next/link";
import Heading from "../components/Heading/Heading";

export default function Contact() {
    return (
      <>
        <MenuItem>Talk to us!</MenuItem>
        <div className="max-w-[500px] mx-auto text-center">
        <Heading>We&apos;d Love to Hear From You!</Heading>
          <ul>
              <li>
                <Heading level={3}>✉ <a href="mailto:zacharyrexmail@gmail.com">zacharyrexmail@gmail.com</a></Heading>
              </li>
          </ul>
          <br /><br />
        <Heading>Give us some feedback!</Heading>
        <Link href="/feedback">Check out our feedback form!</Link>
      </div>
    </>
    );
  }
  