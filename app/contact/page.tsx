import MenuItem from "@/app/components/MenuItem/MenuItem";
import Link from "next/link";

export default function Contact() {
    return (<>
      <MenuItem>Talk to us!</MenuItem>
      <h4>We'd Love to Hear From You!</h4>
        <ul>
            <li>
              <div>✉ <a href="mailto:zacharyrexmail@gmail.com">zacharyrexmail@gmail.com</a></div>
            </li>
        </ul>
      <h4>Give us some feedback!</h4>
      <Link href="/feedback">Feedback</Link>
    </>);
  }
  