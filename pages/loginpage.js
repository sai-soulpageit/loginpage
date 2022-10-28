import Navbar from "../components/Navbar";

export default function loginpage () {
    return (
     <div className="loginpage">

        <Navbar/>

        <div className="formrootdiv">

          <form className="formdiv" >

            <h1 className="toptext">Login Form</h1>

           <label className="toptext">Email</label>  
            <input type="email" placeholder="Enter email" name="myemail"/>
            
            <br/>

            <label className="toptext">Password</label>  
            <input type="password" placeholder="Enter password" name="mypassword"/>

            <br/>
            <button className="buttoninlogin">Submit</button>

          </form>
        </div>
     </div>   
    )
}