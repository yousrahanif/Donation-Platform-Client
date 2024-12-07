


import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { AuthContext } from '../providers/Authprovider';
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)
    
    
  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      // console.log('user sign out successfully')
    })
    .catch(error=>{
      // console.log("Error", error.message)
    })
  }
    const navLinks =<>


<NavLink to="/" className="mr-2">Home</NavLink>
<NavLink to="/allcampaigns" className="mr-2">All Campaign</NavLink>
<NavLink to="/addCampaign" className="mr-2">Add Campaign</NavLink>

<NavLink to="/mycampaign"  className="mr-2">My Campaign</NavLink>
<NavLink to="/mydonation" className="mr-2">My Donations</NavLink>
{user ? (
              <div className=''>
                                <NavLink onClick={handleSignOut} >Sign Out</NavLink>

                {/* <div className="w-10  mr-2">
                  <img alt="User Avatar" src={user?.photoURL ||"https://i.ibb.co/kSMdsjQ/website.jpg"} className='w-12 h-12 rounded-full mt-2'/>
                </div> */}


<div className="relative mr-4">
            <img
            id='photoUrlId'
              src={user.photoURL || "https://i.ibb.co/kSMdsjQ/website.jpg"}
              alt="User Avatar"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
            <Tooltip anchorId="photoUrlId" place="top">
            {user?.displayName || 'Anonymous'}</Tooltip>

          </div>


              </div>
            ) : (
              <div>
                <NavLink to="/login">
                  Login
                </NavLink>
              </div>
            )}


   
  
    </>

    return (
        <div className='mx-auto w-11/12'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>

      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            navLinks
        }

      </ul>
    </div>

<Link to="/">
<img  src={logo} className='w-12 h-12 rounded-full mt-2' alt="" />  
</Link>
</div>
{/* <NavLink className="text-red-500">FundTogether</NavLink> */}

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
            navLinks
        }
    </ul>
  </div>


</div>
        </div>
    );
};

export default Navbar;