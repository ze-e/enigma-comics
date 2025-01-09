import Image from "next/image";
import MenuItem from "@/app/components/MenuItem/MenuItem";

export default function Artists() {
    return (<>
      <MenuItem>Our Artists</MenuItem>
      <h4>Series: The Music Box</h4>
      <div className="flex">
        <Image src="" alt="Preview image"/>
        <div>
          <h5>Writer - <a href="substack/zachary-rex">Zachary Rex</a></h5>
          <h5>Artist - <a href=""></a></h5>
        </div>
      </div>
    </>);
  }
  