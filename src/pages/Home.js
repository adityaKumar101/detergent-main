import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import SloganBanner from '../components/SloganBanner'; // Add this import
import Features from '../components/Features';
import HowToUse from '../components/HowToUse';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';
import InquiryForms from '../components/InquiryForms';

const Home = () => {
    return (
        <div id="home">
            {/* <SloganBanner /> */}
            <HeroCarousel />
            <Features />
            <TrustBadges />
            <HowToUse />
            <Testimonials />
            <Footer />
            <InquiryForms />
        </div>
    );
};

export default Home;