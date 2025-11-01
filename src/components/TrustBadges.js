import React from 'react';

const TrustBadges = () => {
    return (
        <section className="trust-badges">
            <div className="container">
                {/* Add slogan here */}
                <div className="slogan-section">
                    <h2 className="slogan-tagline">Apna Desh Apna Ghar</h2>
                    <p className="slogan-meaning">Proudly serving Indian households with quality products</p>
                </div>

                <h3>Trusted & Certified</h3>
                <div className="badges">
                    <div className="badge">
                        <div className="badge-icon">⭐</div>
                        <span>Premium Quality</span>
                    </div>
                    <div className="badge">
                        <div className="badge-icon">🌱</div>
                        <span>Eco Certified</span>
                    </div>
                    <div className="badge">
                        <div className="badge-icon">🏆</div>
                        <span>Award Winning</span>
                    </div>
                    <div className="badge">
                        <div className="badge-icon">💯</div>
                        <span>100% Satisfaction</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;