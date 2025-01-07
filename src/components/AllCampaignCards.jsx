import React from 'react';
import { NavLink } from 'react-router-dom';

const AllCampaignCards = ({campaign}) => {

    const {_id,photo,title,type,description,amount,deadline,email,name}=campaign

    return (
        <div >
            <div className="card bg-base-100  shadow-xl w-80 h-96">
  <figure className="h-40 w-full overflow-hidden"  >
    <img
      src={photo}
      alt="Shoes" 
      className="w-full h-full object-cover"

      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Title: {title}
      {/* <div className="font-thin">Type: {type}</div> */}
    </h2>
    <p>Description: {description}</p>
    <p>Minimum Amount: ${amount}</p>
    <p>Due: {deadline}</p>
    <p>By: {name}</p>

    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Due: {deadline}</div>
      <div className="badge badge-outline">By: {name}</div>
    </div> */}
    <NavLink to={`/allcampaigns/${_id}`} className="btn bg-blue-100">See More</NavLink>

  </div>
 
</div>



        </div>
    );
};

export default AllCampaignCards;