import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from 'next/link'

export default function Signuppage(){

const{ register, handleSubmit, formState:{errors} } = useForm();

const[userInfo2,setUserInfo2]=useState();
const[pass,setPass]=useState();

const onSubmit2 = (data2) => {
    setUserInfo2(data2)
    console.log(data2)

    if(data2.password2 !== data2.rpassword){
      setPass(<p>Password didnot matched</p>)
    }
    else{setPass(<p className="blue">registration successful</p>)}
    }
  // {alert(JSON.stringify(userInfo2, undefined, 2))}


console.log("errors object is",errors);

    return(
<div className="vvv">
        <div className="signuppage">
            
            <Navbar/>

            <h1>Please Signup</h1>

          <div className="form-container2">

           <form onSubmit = {handleSubmit(onSubmit2)}>

                {/* for username */}
                <label>
                  <span>Username</span>
                 <input type="text" {...register("username2" , 
                                                 {required: "Username is required" })} />
                </label>
                <p className="errormessage">{errors.username2?.message}</p>

                {/* for email */}
                <label>
                  <span>Email</span>
                  <input type="email" {...register("email",
                                                  {required:"Email is required",
                                                })} />
                                                 {/* pattern:{value: , message:"this is not a valid email"} */}
                </label>
                <p className="errormessage">{errors.email?.message}</p>

                {/* for password */}
                <label>
                <span>Password</span> 
                <input type="password" {...register("password2" , 
                                                     {required:"Password is required", 
                                                     minLength: {value:8, message:"please enter more than 8 characters"}})} />
                </label>
                <p className="errormessage">{errors.password2?.message}</p>

                {/* for repeat password */}
                <label>
                  <span>Confirm password</span>
                  <input type="password" {...register("rpassword",
                                                      {required:"Password is required"})}/>
                </label>
                <p className="errormessage">{errors.rpassword?.message}</p>
                <p className="errormessage">{pass}</p>


                

                {/* for submit */}
                <div className="submit">
                  <button type="submit">Sign up</button>
                  <Link href="/loginpage">
                   <b className="already"> I already have an account </b>
                  </Link>
                </div>

             </form>
             
             <pre className="blue"> {JSON.stringify(userInfo2, undefined, 2)} </pre>
             {/* alert(JSON.stringify(userInfo2, undefined, 2)) */}

         </div>

        </div>
        </div>
    )
}














































// import Navbar from "../components/Navbar";
// import Link from 'next/link'

// export default function signuppage(){
//     return(

//         <div className="signuppage">
            
//             <Navbar/>

//             <h1>Please Signup</h1>

//           <div className="form-container2">

//            <form>

//                 {/* for username */}
//                 <label>
//                   <span>Username</span>
//                  <input type="text" name="username" required />
//                 </label>

//                 {/* for password */}
//                 <label>
//                 <span>Password</span>
//                 <input type="password" name="password" required />
//                 </label>

//                 {/* for repeat password */}
//                 <label>
//                   <span>Repeat password</span>
//                   <input type="password" name="rpassword" required />
//                 </label>

//                 {/* for name */}
//                 <label>
//                   <span>Name</span>
//                   <input type="text" name="name" required />
//                 </label>

//                 {/* for submit */}
//                 <div className="submit">
//                   <button type="submit">Sign up</button>
//                   <Link href="/loginpage">
//                    <b className="already"> I already have an account </b>
//                   </Link>
//                  </div>

//              </form>

//          </div>

//         </div>
//     )
// }