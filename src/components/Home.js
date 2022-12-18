import React from 'react';
import AboutUs from './Home/AboutUs';
import Banner from './Home/Banner';
import Cards from './Home/Cards';
import Feature from './Home/Feature';


const Home = () => {
        
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <AboutUs></AboutUs>
            <Feature></Feature>
        </div>
    );
};

export default Home;