import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'

export default function signuppage(){

const{ register, handleSubmit, formState:{errors} } = useForm();

const[userInfo2,setUserInfo2]=useState();
const[pass,setPass]=useState();

const onSubmit2 = (data2) => {
    setuserInfo2(data2)
    console.log(data2)

    if(data2.password2 !== data2.rpassword){
      setPass(<p>password didnot match</p>)
    }
    else{setPass(<p>registration successful</p>)}
    }


console.log("errors object is",errors);

    return(

        <div className="signuppage">
            
            <Navbar/>

            <h1>Please Signup</h1>

          <div className="form-container2">

           <form onSubmit = {handleSubmit(onSubmit2)}>

                {/* for username */}
                <label>
                  <span>Username</span>
                 <input type="text" {...register("username2" , 
                                                 {required: "username is required" })} />
                </label>
                <p>{errors.username2?.message}</p>

                {/* for password */}
                <label>
                <span>Password</span> 
                <input type="password" {...register("password2" , 
                                                     {required:"password is required", 
                                                     minLength: {value:8, message:"please enter more than 8 characters"}})} />
                </label>
                <p>{errors.password2?.message}</p>

                {/* for repeat password */}
                <label>
                  <span>Repeat password</span>
                  <input type="password" {...register("rpassword",
                                                      {required:"password is required"})}/>
                </label>
                <p>{errors.rpassword?.message}</p>
                <p>{pass}</p>

                {/* for name */}
                <label>
                  <span>Name</span>
                  <input type="text" {...register("name2",
                                                  {required:"name is required"})} />
                </label>
                <p>{errors.name2?.message}</p>

                {/* for submit */}
                <div className="submit">
                  <button type="submit">Sign up</button>
                  <Link href="/loginpage">
                   <b className="already"> I already have an account </b>
                  </Link>
                 </div>

             </form>
             
             <pre> {JSON.stringify(userInfo2, undefined, 2)} </pre>

         </div>

        </div>
    )
}