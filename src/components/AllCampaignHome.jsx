import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaignCards from './AllCampaignCards';

const AllCampaignHome = () => {
    const campaigns = useLoaderData()
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

    return (
        <div>
                 <div>
               <div className='flex justify-center items-center'>
          </div>
              <div className='flex justify-center  mb-4'>
         
       
     
     <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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