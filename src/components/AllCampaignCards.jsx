import React from 'react';
import { NavLink } from 'react-router-dom';

const AllCampaignCards = ({campaign}) => {

    const {_id,photo,title,type,description,amount,deadline,email,name}=campaign

    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Title: {title}
      <div className="badge badge-outline bg-blue-100">{type}</div>
    </h2>
    <p>Description: {description}</p>
    <p>Minimum Amount: ${amount}</p>

    <div className="card-actions justify-end">
      <div className="badge badge-outline">Due: {deadline}</div>
      <div className="badge badge-outline">By: {name}</div>
    </div>
    <NavLink to={`/allcampaigns/${_id}`} className="btn bg-blue-100">See More</NavLink>

  </div>
 
</div>



        </div>
    );
};

export default AllCampaignCards;