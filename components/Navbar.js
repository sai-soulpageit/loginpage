import Link from "next/link";

export default function Navbar() {
  return (


    <div className="rootdiv">


      <header className="headd">

        <div>
            <img
             src="https://soulpageit.com/wp-content/uploads/2021/02/SoulpageLogo.svg"
             alt=""
               />
               <h3 className="travels">Travels</h3>

        </div>

        <nav>
          <ul className="navigation">
            <li> Home</li>
            <li>Destinations</li>
            <li> Map</li>
            <li> Contact US </li>
          </ul>
        </nav>

        </header>
            <div>
            <Link href='/loginpage'><button className="buttonn">Login</button></Link>
            </div>
      
    </div>
  );
}
