import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { AuthContext } from "../providers/Authprovider";

const Register = () => {
  const navigate= useNavigate()
const[showPassword, setShowPassword]=useState(false)

const handleShowPassword =()=>{
  setShowPassword(!showPassword)

}
    const {createUser}=useContext(AuthContext)
    const validatePassword = (password) => {
      const lengthRequirement = (password.length >= 6);
      const uppercaseRequirement = /[A-Z]/.test(password);
      const lowercaseRequirement = /[a-z]/.test(password);
  
      return lengthRequirement && uppercaseRequirement && lowercaseRequirement;
    };
    const handleRegister=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const name=e.target.name.value

        const password=e.target.password.value
        const photo=e.target.photo.value
        // console.log(email,password, name,photo)

if (!validatePassword(password)) {
  Swal.fire({
    icon: "error",
    title: "Invalid Password",
    text: "Password must be at least 6 characters long, include an uppercase letter, and include a lowercase letter.",
  });
  return;
}


createUser(email,password)
.then(result=>{

    // console.log(result.user)
    const profile={
      displayName: name, 
      photoURL: photo
    }

    updateProfile(auth.currentUser,profile)
    .then(()=>{
     
      e.target.reset();
    
      navigate("/");
      Swal.fire({
        title: "Good job!",
        text: "Register successful!",
        icon: "success",
      });
    
    
    })
    .catch((error) => {
      console.error("Profile Update Error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Profile Update Failed",
        text: error.message || "Unable to update the profile.",
      });
    });

  


})






    }
   
    return (
        <div className="hero bg-base-400 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register Now!</h1>
           
          </div>
          <div className="card bg-base-400 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
             
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword? "text": 'password'} name="password" placeholder="password" className="input input-bordered" required />
              <button onClick={handleShowPassword} className="btn btn-xs absolute right-2 top-12">
                {
                  showPassword?<FaEyeSlash /> :<FaEye></FaEye>
                }
              </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an Account? Please <Link className="text-blue-600" to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;