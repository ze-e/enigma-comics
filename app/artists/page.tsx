import Artist from "../components/Artist/Artist";
import SpecialThanks from "../components/SpecialThanks/SpecialThanks";
import MenuItem from "@/app/components/MenuItem/MenuItem";
import RexLogo from "@/app/img/artists/rex_logo.jpg";
import ArnoldLogo from "@/app/img/artists/arnold_logo.jpg";

export default function Artists() {
    return (<>
      <MenuItem>Our Artists</MenuItem>
        <Artist 
          img={RexLogo} 
          name="Zachary Rex" 
          credits={["The Music Box - Producer", "The Music Box - Writer"]} 
          description="
            Zachary Rex is a writer based in Boise, Idaho. 
            He writes all kinds of stories, from sci-fi and adventure to satire. 
            He has been working on various creative projects since 4th grade. 
            He never knows what to write in these.
          "
          links={["https://zacharyrex.substack.com"]}
        />
        <Artist 
          img={ArnoldLogo} 
          name="Arnold Fuscia" 
          credits={["The Music Box - Producer", "The Music Box - Writer"]} 
          description="
            Arnold Fuscia is a self-taught artist based in Atlanta, Georgia, with a deep passion for human anatomy. 
            His artistic journey began in the 90s, where he first immersed himself in the comic book world. 
            Over the years, Arnold has had his work published by several independent creators, continually refining his craft with each project. 
            Driven by a love for art, he feels blessed to have an audience that appreciates his work, and he remains committed to evolving as an artist with every new piece he creates.
          "
          links={["https://blueprintsandstrategies.com"]}
        />
        <br/><br/>
      <MenuItem>Our Friends</MenuItem>
      <div className="flex flex-row max-[1140px]:flex-col max-[1140px]:w-[300px] w-[700px] mx-auto items-center justify-center">
        <SpecialThanks 
          name="Wallace Comics" 
          description="
            Our comic making friends!
          "
        />
        <SpecialThanks 
          name="Spirit Media" 
          description="
            Our comic printing friends!
          "
          links={["https://spiritmedias.net"]}
        />
      </div>
    </>);
  }
  