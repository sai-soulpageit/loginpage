import { useForm } from "react-hook-form";
import { useState} from 'react';
import Navbar from "../components/Navbar";
import Link from 'next/link'

export default function Loginpagecomments () {
   
    // 1) properties - to manage and to handle the form
    //     & bind the input text with the register.
    const{ register, handleSubmit, formState:{errors} } = useForm();
    
   
    // 5) to show typed infromation - using useState hook
    const[userinfo, setUserInfo] = useState();

    // 4) onSubmit function
    const onSubmit1 = (data) => {
        // 5) when we submit it , we setUserInfo to the data
        setUserInfo(data);
        console.log(data);
    }

    // or

    // const onSubmit1 = (data1) => {
    //   setUserInfo(data1);
    //   console.log(userInfo);
    // }
     

    // 8) display the error object in console , using error property (contains type, message, ref)
        console.log("errors object is",errors);

    return (

      <div className="loginpage">
         
      <Navbar/>

         

      <h1>Please Login</h1>

      <div className="form-container">
         
        {/* 3) onSubmit event , passing a function onSubmit1 or onSubmit in handleSubmit property */}
        <form onSubmit = {handleSubmit(onSubmit1)}>

          {/* for username */}
          <label>
            <span>Username</span>
            {/* 2) bind the input text with register, once it get binded then we should be able to get whatever the value we type in this input field to the value as a key for the username  */}
            {/* 7) validations (inside required) - message - username is required */}
            <input type="text" {...register ("username" , {required: "username is required"} )}/> 
            {/* 2 - <input type="text" name="username" ref={register}/> */}
            {/* 2 - <input type="text" { ...register("username")}/> */}
            {/* 7 - <input type="text" {...register("username" , {required: "username is required"} )}/>  */}
          </label>
          {/* 9) display the error message, using error property which is inside the error object*/}
          {/*    if errors.username exists then only we will check the message */}
             <p>{errors.username?.message}</p>

          {/* for password */}
          <label>
            <span>Password</span>
            {/* 2) bind the input text with register, once it get binded then we should be able to get whatever the value we type in this input field to the value as a key for the username  */}
            {/* 7) validation - message - password is required field & minlength if required*/}
            <input type="password" {...register ("password", {required:"password is required"} )}/>
          </label>
          <p>{errors.password?.message}</p>


          {/* for submit button */}

          <div className="submit">
            <button type="submit">Login</button>

            <Link href="/signuppage">
           <b className="dont">{` I don't have an account`}</b>
            </Link>


          </div>


        </form>
        
        {/* 6) to display/stringify the typed information */}
        <pre> {JSON.stringify(userInfo, undefined, 2)} </pre>
        
        
      </div>

      </div>

      )
    }
