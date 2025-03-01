import MenuItem from "@/app/components/MenuItem/MenuItem";
import Series from "@/app/components/Series/Series";
import img1 from "@/app/img/series/music-box/1.png";
import img2 from "@/app/img/series/music-box/2.png";
import img3 from "@/app/img/series/music-box/3.png";
import img4 from "@/app/img/series/music-box/4.png";
import img5 from "@/app/img/series/music-box/5.png";
import img6 from "@/app/img/series/music-box/6.png";
import img7 from "@/app/img/series/music-box/7.png";
import img8 from "@/app/img/series/music-box/8.png";
import img9 from "@/app/img/series/music-box/9.png";
import img10 from "@/app/img/series/music-box/10.png";

const img_data = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export default function SeriesPage() {
    return (<>
      <MenuItem>Our Series</MenuItem>
      <Series imgs={img_data} 
        name="The Music Box"
        credits={['Writer/Producer - Zachary Rex', 'Artist/Lettering/Cover - Arnold Fuscia' ]} 
        description={`
            In the quiet halls of Sunny Peaks High, shy artist Noah and bubbly Emily form an unlikely bond, discovering that their shared love for creativity is a gateway to something extraordinary. 
            Through the mysterious visions of an enchanted music box, they glimpse a future shaped by their passion and partnership. 
            But in the shadows of the present, personal insecurities and social challenges threaten to tear them apart. Can they find harmony before the music fades?
          `}
        links={["https://tinyurl.com/the-music-box-comic"]}
      />
    </>);
  }
  