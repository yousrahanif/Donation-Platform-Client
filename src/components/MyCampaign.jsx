// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../providers/Authprovider';
// import MyCampaignCards from './MyCampaignCards';

// const MyCampaign = () => {
//     const {user, loading} = useContext(AuthContext)
//     const [campaigns, setCampaigns] = useState([]);


//     useEffect(() => {
//         if (user && user.email) {
         
//             fetch(`https://fundtogether-server.vercel.app/mycampaign?email=${user.email}`)
//             .then((response) => response.json())
//             .then((data) => setCampaigns(data))
//             .catch((error) => console.error('Error fetching campaigns:', error));
//         }
//       }, [user]); 
//       if (loading) {
//         return <div>
//             <span className="loading loading-bars loading-lg"></span>

//         </div>
//       }
    
//       if (!user) {
//         return <div>
//             <div role="alert" className="alert alert-warning">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6 shrink-0 stroke-current"
//     fill="none"
//     viewBox="0 0 24 24">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//   </svg>
//   <span>Warning: Invalid email address!</span>
// </div>
//         </div>
//       }
    
//     return (
//         <div className=''>

// <h1 className="text-3xl font-bold text-center p-4">My Campaign!</h1>

//       <div className='flex justify-center mb-4'>
//       {campaigns.length === 0 ? (
//          <div role="alert" className="alert alert-warning">
//          <svg
//            xmlns="http://www.w3.org/2000/svg"
//            className="h-6 w-6 shrink-0 stroke-current"
//            fill="none"
//            viewBox="0 0 24 24">
//            <path
//              strokeLinecap="round"
//              strokeLinejoin="round"
//              strokeWidth="2"
//              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//          </svg>
//          <span>Warning: You Have Not Added Any Campaign Assocaited With Your Email!</span>
//        </div>
//         ) : (
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
//          {
//              campaigns.map((campaign)=><MyCampaignCards
//                 key={campaign._id}
//                 campaign={campaign}
//                 setCampaigns={setCampaigns}
//                 ></MyCampaignCards>)
//          }
//           </div>
//         )}
//       </div>
//       </div>
//     );
// };

// export default MyCampaign;
//

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/Authprovider';
import MyCampaignCards from './MyCampaignCards';

const MyCampaign = () => {
    const { user, loading } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://fundtogether-server.vercel.app/mycampaign?email=${user.email}`)
                .then((response) => response.json())
                .then((data) => setCampaigns(data))
                .catch((error) => console.error('Error fetching campaigns:', error));
        }
    }, [user]);

    if (loading) {
        return (
            <div>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <div role="alert" className="alert alert-warning">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Warning: Invalid email address!</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4">My Campaign!</h1>
            <div className='flex justify-center mb-4'>
                {campaigns.length === 0 ? (
                    <div role="alert" className="alert alert-warning">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Warning: You Have Not Added Any Campaign Associated With Your Email!</span>
                    </div>
                ) : (
                    <div className='overflow-x-auto'>
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>By</th>
                                    <th>Due</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((campaign) => (
                                    <MyCampaignCards
                                        key={campaign._id}
                                        campaign={campaign}
                                        setCampaigns={setCampaigns}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCampaign;
