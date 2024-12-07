import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';
import Swal from 'sweetalert2';

const DetailsPage = () => {
    const camp = useLoaderData();
    const {user} = useContext(AuthContext)


    const {_id,photo,title,type,description,amount,deadline,email,name} = camp;
    const [hasDonated, setHasDonated] = useState(false);

    const deadlineDate= new Date(deadline)
  const currentDate= new Date()
  const isDeadLineOver = currentDate > deadlineDate

  useEffect(() => {
    fetch(`https://fundtogether-server.vercel.app/donation-status?_id=${_id}&email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.hasDonated) {
                setHasDonated(true);
            }
        });
}, [_id, user.email]);
    const handleDonate=()=>{
      const donationData={
        _id, title, photo, deadline, amount, type, email: user.email,
        name:user.displayName

      }
      

     fetch('https://fundtogether-server.vercel.app/donate',{
      method:'POST', 
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(donationData)
     })
     .then(res=>res.json())
     .then(data=>{
      // console.log(data)
      if(data.insertedId){
          Swal.fire({
              title: "Thank You!",
              text: "Donation Added",
              icon: "success"
            });
            setHasDonated(true);

      }
     })
  }
    return (
        <div>
      <div className="p-4">
      <div className="card bg-base-100 w-full shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Title: {title}</h2>
          <p>Description: {description}</p>
          <p>Type: <span className="font-bold">{type}</span></p>
          <p>Due Date: <span className="text-blue-600">{deadline}</span></p>
          <p>Amount: <span className="text-blue-600">${amount}</span></p>
          <p>By: <span className="text-blue-600">{name}</span></p>

          <p>Email: <span className="text-green-600">{email}</span></p>
        
        {
          isDeadLineOver ? (
            <div>
            <p className="text-red-600 font-bold">The campaign has ended. You can no longer donate.</p>
            <button className="btn bg-gray-400" disabled>
                Campaign Ended
            </button>
        </div>

          ): (
            hasDonated ? (
              <button className="btn bg-gray-400" disabled>
                Already Donated
              </button>
            ) : (
              <NavLink onClick={handleDonate} className="btn bg-blue-100">
                Donate Now
              </NavLink>
            )
        )}
        
        

        </div>
      </div>
    </div>


  
        </div>
    );
};

export default DetailsPage;