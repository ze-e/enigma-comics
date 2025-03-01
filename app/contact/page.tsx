import MenuItem from "@/app/components/MenuItem/MenuItem";
import Link from "next/link";
import Heading from "../components/Heading/Heading";

export default function Contact() {
    return (<>
      <MenuItem>Talk to us!</MenuItem>
      <Heading>We'd Love to Hear From You!</Heading>
        <ul>
            <li>
              <Heading level={3}>✉ <a href="mailto:zacharyrexmail@gmail.com">zacharyrexmail@gmail.com</a></Heading>
            </li>
        </ul>
      <Heading level={2}>Give us some feedback!</Heading>
      <Link href="/feedback">Feedback</Link>
    </>);
  }
  