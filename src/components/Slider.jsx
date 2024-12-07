import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter';



const Slider = () => {
  const [theme, setTheme] = useState('light');
const handleToggleTheme=()=>{
  setTheme(theme === 'light' ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light')
}
    return (
        <div>
            <h1 className='text-center text-blue-400 font-bold text-3xl'>
        <Typewriter
          words={['FundTogether: Live Together']}  
          loop={Infinity}  
          cursor
          cursorStyle="|"  
          typeSpeed={100}  
          deleteSpeed={50}  
          delaySpeed={1000}  
        />
      </h1>
     
<Marquee className='m-4'>
🌟 Welcome to FundTogether: Empowering Ideas, Connecting Communities! Start your campaign today and make your vision a reality. 🌟
</Marquee>
<div className='text-center m-4'> 
<input onClick={handleToggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />

</div>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative  w-full">
    {/* <img
      src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="w-full" /> 
      */}
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Medical Expenses</h1>
      <p className="mb-5">
      FundTogether helps people cover hospital bills, treatments, and medications, providing financial relief during health challenges and ensuring access to care.
      </p>
      <button className="btn bg-blue-100">Explore Projects</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    {/* <img
      src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="w-full" /> */}
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Food Expenses</h1>
      <p className="mb-5">
      FundTogether can provide support for individuals or families struggling to afford basic necessities like groceries or meals during tough times.      </p>
      <button className="btn bg-blue-100">Explore Projects</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    {/* <img
      src="https://images.unsplash.com/photo-1599700403969-f77b3aa74837?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="w-full" /> */}
       <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1599700403969-f77b3aa74837?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Emergency Expenses      </h1>
      <p className="mb-5">
     FundTogether helps people quickly raise funds for unexpected costs like repairs, relocations, or critical bills.    </p>
      <button className="btn bg-blue-100">Explore Projects</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    {/* <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="w-full" /> */}
       <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Education Expenses
      </h1>
      <p className="mb-5">
      FundTogether empowers students to pursue their dreams by raising money for tuition, books, or other educational needs.      </p>
      <button className="btn bg-blue-100">Explore Projects</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;