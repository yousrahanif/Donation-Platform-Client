// import React, { useState } from 'react';
// import { NavLink, useLoaderData } from 'react-router-dom';
// import AllCampaignCards from './AllCampaignCards';

// const AllCampaign = () => {
//     const campaigns = useLoaderData()
//     const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
// const handleSort = ()=>{
//     const sorted = [...campaigns].sort((a, b) => a.amount - b.amount);
// setSortedCampaigns(sorted)
// }
//     return (
// //         <div>
// //               <div className='flex justify-center items-center'>
// //              <button className='btn m-4' onClick={handleSort}>Sort</button>
// //          </div>
// //               <div className='flex justify-center  mb-4'>
         
       
     
// //      <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
// // {
// // sortedCampaigns.map(campaign=><AllCampaignCards
// // key={campaign._id}
// // campaign={campaign}
// // ></AllCampaignCards>)
// // }

// // </div>
// //  </div>
// //         </div>
        
// <div className='mx-auto w-11/12'>
//             {/* Sort Button */}
//             <h1 className="text-3xl font-bold text-center p-4">All Campaigns!</h1>

//             <div className="flex justify-center items-center">
//                 <button className="btn m-4 bg-blue-100" onClick={handleSort}>Sort by Amount</button>
//             </div>

//             {/* Campaign Table */}
//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Title</th>
//                             <th>Type</th>
//                             <th>Description</th>
//                             <th>Minimum Amount</th>
//                             <th>Due Date</th>
//                             <th>By</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {sortedCampaigns.map((campaign) => (
//                             <tr key={campaign._id}>
//                                 <td>
//                                     <label>
//                                         <input type="checkbox" className="checkbox" />
//                                     </label>
//                                 </td>
//                                 <td>{campaign.title}</td>
//                                 <td>
//                                     <div className="badge ">{campaign.type}</div>
//                                 </td>
//                                 <td>{campaign.description}</td>
//                                 <td>${campaign.amount}</td>
//                                 <td>{campaign.deadline}</td>
//                                 <td>{campaign.name}</td>
//                                 <td>
//                                     <NavLink to={`/allcampaigns/${campaign._id}`} className="btn bg-blue-100 btn-md">See More</NavLink>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                     {/* <tfoot>
//                         <tr>
//                             <th></th>
//                             <th>Title</th>
//                             <th>Type</th>
//                             <th>Description</th>
//                             <th>Minimum Amount</th>
//                             <th>Due Date</th>
//                             <th>By</th>
//                             <th>Actions</th>
//                         </tr>
//                     </tfoot> */}
//                 </table>
//             </div>
//         </div>
      
        
//     );
// };

// export default AllCampaign;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCampaignCards from './AllCampaignCards';

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);

    const handleSortAscending = () => {
        const sorted = [...campaigns].sort((a, b) => a.amount - b.amount);
        setSortedCampaigns(sorted);
    };

    const handleSortDescending = () => {
        const sorted = [...campaigns].sort((a, b) => b.amount - a.amount);
        setSortedCampaigns(sorted);
    };

    return (
        <div className="mx-auto w-11/12">
            {/* Page Header */}
            <h1 className="text-3xl font-bold text-center p-4">All Campaigns!</h1>

            {/* Sort Buttons */}
            <div className="flex justify-center items-center space-x-4">
                <button 
                    className="btn m-4 bg-blue-100" 
                    onClick={handleSortAscending}>
                    Sort Ascending
                </button>
                <button 
                    className="btn m-4 bg-blue-100" 
                    onClick={handleSortDescending}>
                    Sort Descending
                </button>
            </div>

            {/* Campaign Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedCampaigns.map((campaign) => (
                    <AllCampaignCards key={campaign._id} campaign={campaign} />
                ))}
            </div>
        </div>
    );
};

export default AllCampaign;

