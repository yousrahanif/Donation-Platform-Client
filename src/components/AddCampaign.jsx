import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import Swal from 'sweetalert2';

const AddCampaign = () => {
    const {user} = useContext(AuthContext)
    const handleAddCampaign=event=>{
        event.preventDefault()
        const form=event.target
        const photo=form.photo.value
        const title=form.title.value
        const type=form.type.value
        const description=form.description.value
        const amount=form.amount.value
        const deadline=form.deadline.value
        const email = user.email;
        const name = user.displayName;

       const newCampaign={photo,title,type,description,amount,deadline,email,name}
      //  console.log(newCampaign)

       fetch('https://fundtogether-server.vercel.app/campaigns',{
        method:'POST', 
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newCampaign)
       })
       .then(res=>res.json())
       .then(data=>{
        // console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Success!",
                text: "Campaign Added",
                icon: "success"
              });
              form.reset();

        }
       })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Add Campaign!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleAddCampaign}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required  />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Title</span>
          </label>
          <input type="text" name="title" placeholder="campaign title" className="input input-bordered" required  />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Campaign Type</span>
          </label>
          <select name="type" className="select select-bordered w-full max-w-xs">
  <option disabled selected>Choose One</option>
  <option>Medical Expenses</option>
  <option>Food Expenses</option>
  <option>Emergency Expenses</option>
  <option>Education Expenses</option>




</select>       
 </div>

 <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Minimum Donation Amount</span>
          </label>
          <input type="number" name="amount" placeholder="minimum donation amount" className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full max-w-xs" />
          </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder={user.email} name="email" className="input input-bordered" readOnly  />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder={user.displayName} name="name" className="input input-bordered" readOnly  />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddCampaign;