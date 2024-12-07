import React from 'react';
import sad from '../assets/sad.jpg'
import happy from '../assets/happy.jpg'


const Difference = () => {
    return (
        <div className='w-6/12 mx-auto'>
      <h1 className="text-3xl font-semibold text-center p-2 ">See the Difference You Create! 
        <span className='text-red-500'> Just Drag</span>
      </h1>
      <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src={happy} />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy"
      src={sad} />
  </div>
  <div className="diff-resizer"></div>
</div>
        </div>
    );
};

export default Difference;