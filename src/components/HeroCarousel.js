import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroCarousel.css';

const HeroCarousel = () => {
    const carouselItems = [
        {
            image: "images/Image1.jpeg",
            title: 'Advanced Stain Removal',
            description: 'Powerful formula that removes even the toughest stains',
            slogan: 'Apna Desh Apna Ghar',
            ctaText: 'Shop Now',
            // overlayColor: 'rgba(26, 58, 106, 0.7)'
        },
        {
            image: "images/Image2.jpeg",
            title: 'Gentle on Fabrics',
            description: 'Tough on stains, gentle on your favorite clothes',
            slogan: 'Apna Desh Apna Ghar',
            ctaText: 'Learn More',
            // overlayColor: 'rgba(255, 107, 53, 0.7)'
        },
        {
            image: "images/Image3.jpeg",
            title: 'Eco-Friendly Formula',
            description: 'Biodegradable ingredients for a cleaner planet',
            slogan: 'Apna Desh Apna Ghar',
            ctaText: 'Discover',
            // overlayColor: 'rgba(42, 90, 160, 0.7)'
        },
        {
            image: "images/Image4.jpeg",
            title: 'Freshness That Lasts',
            description: 'Long-lasting fragrance for clothes that smell amazing',
            slogan: 'Apna Desh Apna Ghar',
            ctaText: 'Buy Now',
            // overlayColor: 'rgba(26, 58, 106, 0.7)'
        }
    ];


    return (
        <div className="hero-carousel">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={800}
                showArrows={true}
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false} // Add this to prevent height issues
            >
                {carouselItems.map((item, index) => (
                    <div key={index}>
                        {/* Use the default carousel image structure */}
                        <div className="carousel-image-container">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="carousel-image"
                            />
                            {/* Overlay */}
                            <div
                                className="carousel-overlay"
                                style={{ backgroundColor: item.overlayColor }}
                            ></div>

                            {/* Floating Content */}
                            <div className="carousel-content">
                                <div className="carousel-text">
                                    <div className="carousel-slogan">
                                        {item.slogan}
                                    </div>
                                    <h1 className="carousel-title">{item.title}</h1>
                                    <p className="carousel-description">{item.description}</p>
                                    <button className="carousel-cta">
                                        {item.ctaText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};



export default HeroCarousel;