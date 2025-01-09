import Image from "next/image";
import MenuItem from "@/app/components/MenuItem/MenuItem";

export default function Buy() {
    return (<>
      <MenuItem>Where to buy</MenuItem>
      <h4>Series: The Music Box</h4>
        <h5>Available for purchase:</h5>
        <h6>Online</h6>
        <ul>
            <li>WebToons</li>
        </ul>
        <h6>Physical Copy</h6>
        <ul>
            <li>123 Main Street, Boise, ID</li>
        </ul>
    </>);
  }
  