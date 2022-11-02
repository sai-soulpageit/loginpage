import { useForm }  from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'


export default function Loginpage () {

    const{ register, handleSubmit, formState:{errors} } = useForm();

    const[userInfo,setUserInfo] = useState();

    const onSubmitt = (data) => {
      setUserInfo(data);
      console.log(data);
    }
    // alert(JSON.stringify(userInfo, undefined, 2))

    console.log("errors object is",errors);

    return (

    <div className="loginpage">
         
         <Navbar/>

      <h1>Please Login</h1>

      <div className="form-container">

        <form onSubmit={handleSubmit(onSubmitt)}>

          {/* for username */}
          <label>
            <span>Username</span>
            <input type="text" { ...register("username", { required: "Username is required" } )} />
            {/* <input type="text" { ...register("username")}/> */}
          </label>
          <p className="errormessage">{errors.username?.message}</p>

          {/* for password */}
          <label>
            <span>Password</span>
            <input type="password" { ...register("password", { required: "Password is required" , minLength : {value:8, message:"password cannot be less than 8 characters"}} )}/>
            {/* <input type="text" { ...register("password")}/> */}
          </label>
          <p className="errormessage">{errors.password?.message}</p>

          {/* for submit button */}
          <div className="submit">
            <button type="submit">Login</button>
            
            <Link href="/signuppage">
            {/* <p>I don't have an account</p> */}
           <b className="dont"> I don't have an account</b>
            </Link>


          </div>

          
        </form>
        
        <pre className="greensucces"> {JSON.stringify(userInfo, undefined, 2)} </pre>
       {/* {alert(JSON.stringify(userInfo, undefined, 2))} */}

      </div>
    </div>

    )
   }  





    //  <div className="loginpage">

    //     <Navbar/>

    //     <div className="formrootdiv">

    //       <form className="formdiv" >

    //         <h1 className="toptext">Login Form</h1>

    //        <label className="toptext">Email</label>  
    //         <input type="email" placeholder="Enter email" name="myemail"/>
            
    //         <br/>

    //         <label className="toptext">Password</label>  
    //         <input type="password" placeholder="Enter password" name="mypassword"/>

    //         <br/>
    //         <button className="buttoninlogin">Submit</button>

    //       </form>
    //     </div>
    //  </div>   
//     )
// }