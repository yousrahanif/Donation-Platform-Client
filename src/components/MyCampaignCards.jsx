// import React from 'react';
// import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
// import { Link, NavLink } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const MyCampaignCards = ({campaign, setCampaigns, index}) => {
//     const {_id,photo,title,type,description,amount,deadline,email,name}=campaign

//     const handleDelete=_id=>{
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
           
//             console.log('delete confirm')
//             fetch(`https://fundtogether-server.vercel.app/mycampaign/${_id}`,{
//                 method:'DELETE'
//             })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log(data)
//                 if(data.deletedCount>0){
//    Swal.fire({
//                 title: "Deleted!",
//                 text: "Your Campaign has been deleted.",
//                 icon: "success"
//               });
//               setCampaigns((prevCampaigns) =>
//                 prevCampaigns.filter((campaign) => campaign._id !== _id)
//             );
//                 }

//             })
//             }
//           });

//     }
//     return (
//         <div >
//             <div className="card bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src={photo}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//      Title: {title}
//       <div className="badge badge-outline bg-blue-100">{type}</div>
//     </h2>
//     <p>Description: {description}</p>
//     <p>By: {name}</p>
//     <p>Due: {deadline}</p>
//     <div className="card-actions justify-end">
  
//     <NavLink to={`/updatecampaign/${_id}`} className="btn">
//   <FaRegEdit />
// </NavLink>
//     <div onClick={()=>handleDelete(_id)} className="btn"><FaRegTrashAlt />
//     </div>
      
//     </div>

//   </div>
  
  
 
// </div>
//         </div>
//     );
// };
// export default MyCampaignCards;

import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaignCards = ({ campaign, setCampaigns }) => {
    const { _id, photo, title, type, description, amount, deadline, email, name } = campaign;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fundtogether-server.vercel.app/mycampaign/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Campaign has been deleted.",
                            icon: "success"
                        });
                        setCampaigns(prevCampaigns =>
                            prevCampaigns.filter((campaign) => campaign._id !== _id)
                        );
                    }
                });
            }
        });
    }

    return (
        <tr>
            <td><img src={photo} alt="Campaign" className="w-20 h-20 object-cover" /></td>
            <td>{title}</td>
            <td>{type}</td>
            <td>{description}</td>
            <td>{name}</td>
            <td>{deadline}</td>
            <td>${amount}</td>
            <td>
                <NavLink to={`/updatecampaign/${_id}`} className="btn btn-sm mr-2">
                    <FaRegEdit />
                </NavLink>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm">
                    <FaRegTrashAlt />
                </button>
            </td>
        </tr>
    );
};

export default MyCampaignCards;
