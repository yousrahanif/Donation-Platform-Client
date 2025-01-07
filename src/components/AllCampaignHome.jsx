import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaignCards from './AllCampaignCards';

const AllCampaignHome = () => {
    const campaigns = useLoaderData()
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

    return (
        <div>
            <h2 className='text-center font-bold text-3xl'>Running Campaign</h2>
            <div>
               <div className='flex justify-center items-center'>
          </div>
              <div className='flex justify-center  mb-4'>
         
       
     
     <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
 {
sortedCampaigns.map(campaign=><AllCampaignCards
 key={campaign._id}
campaign={campaign}
></AllCampaignCards>)
 }
 </div>
 </div>
        </div>
            
        </div>
    );
};

export default AllCampaignHome;