import React from 'react';

const MyDonationCards = ({campaign}) => {
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
    <p>By: {name}</p>
    <p>Due: {deadline}</p>
   
      
    </div>

  </div>
 
</div>
      
    );
};

export default MyDonationCards;