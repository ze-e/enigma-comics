import MenuItem from "@/app/components/MenuItem/MenuItem";

export default function Buy() {
    return (<>
      <MenuItem>Where to buy</MenuItem>
      <h4>Series: The Music Box</h4>
        <h5>Available for purchase:</h5>
        <h6>Online</h6>
        <ul>
            <li>
              <div>Webtoons</div>
              <div><a href="#">Website</a></div></li>
        </ul>
        <h6>Physical Copy</h6>
        <ul>
            <li>
              <div>Joe&apos;s Emporium collectibles store</div>
              <div>615 Main St, Caldwell, ID 83605</div>
              <div><a href="#">Website</a></div>
              </li>
        </ul>
    </>);
  }
  