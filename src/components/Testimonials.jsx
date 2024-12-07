import React from 'react';

const Testimonials = () => {
    return (
        //
        <div className='mx-auto w-11/12 flex flex-col justify-center items-center m-4'>
            <h2 className='text-center font-bold text-3xl'>Our Testimonials</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <p>FundTogether made it easy to find investors for my startup. The process was simple, and the support was exceptional!</p>
    <h2 className="text-center font-bold italic"> - Emily Cooper</h2>
    <div className='text-center'>
   <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
     />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
</div>
   </div>
  
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">

    <p>Thanks to FundTogether, I was able to raise the funds I needed to take my business to the next level. Highly recommended!"</p>
    <h2 className="text-center font-bold italic" >— Michael Anderson</h2>
    <div className='text-center'>
   <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
     />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <p>A fantastic platform! The crowdfunding experience was smooth, and I met amazing investors who believe in my vision.</p>
    <h2 className="text-center font-bold italic">— David Patel</h2>
   <div className='text-center'>
   <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
     />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
</div>
   </div>
   
   
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Testimonials;