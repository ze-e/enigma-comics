import Image from "next/image";
import MenuItem from "@/app/components/MenuItem/MenuItem";

export default function Artists() {
    return (<>
      <MenuItem>Our Artists</MenuItem>
      <h4>Series: The Music Box</h4>
      <div className="flex">
        <Image src="" alt="Preview image"/>
        <div>
          <h5>Writer, Producer - <a href="substack/zachary-rex">Zachary Rex</a></h5>
          <h5>Artist, Layout Artist, Lettering - <a href="https://www.blueprintsandstrategies.com/comics1"></a>Arnold Fuscia</h5>
          <h5>Colorist <a href=""></a></h5>
          <h5>Special Thanks - <a href=""></a>Wallace Comics</h5>
        </div>
      </div>
    </>);
  }
  