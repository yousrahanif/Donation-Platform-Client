import React from 'react';
import Slider from './Slider';
import Stat from './Stat';
import Difference from './Difference';
import AllCampaign from './AllCampaign';
import Testimonials from './Testimonials';
import AllCampaignHome from './AllCampaignHome';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Slider></Slider>
            {/* <AllCampaign></AllCampaign> */}
            <AllCampaignHome></AllCampaignHome>
            <Stat></Stat>
            <Difference></Difference>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;