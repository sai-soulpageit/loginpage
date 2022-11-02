import Link from "next/link";
import Image from "next/image";
// import Content from "./content";

export default function Navbar() {
  return (
<>

    <div className="rootdiv">


      <header className="headd">

        <div>
            <Image
             src="https://soulpageit.com/wp-content/uploads/2021/02/SoulpageLogo.svg"
             alt="image"
               />
               <h3 className="travels">Travels</h3>

        </div>

        <nav>
          <ul className="navigation">
            {/* <li> Home</li> */}
            <li>Destinations</li>
            <li> Map</li>
            <li> ContactUs </li>
          </ul>
        </nav>

        </header>


        <div className="sidebuttons">

            <div>
              <Link href='/home'>
              <button className="buttonn">Home</button>
              </Link>
            </div>


            <div>
             <Link href='/signuppage'>
               <button className="buttonn">Signup</button>
              </Link>
            </div>


            <div>
              <Link href='/loginpage'>
              <button className="buttonn">Login</button>
              </Link>
            </div>


         </div>
          
      
    </div>


    {/* <Content/> */}
{/* <div className="textunder">
“The journey of a thousand miles begins with a single step.”
</div>   

<div className="textunder">Please Login</div> */}

</>
  );
}
