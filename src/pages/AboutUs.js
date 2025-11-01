import React from 'react';
import '../components/AboutUs.css';
import InquiryForms from '../components/InquiryForms';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-title">About T&P and Ghar Detergent Powder</h1>
                    <p className="about-subtitle">
                        Bringing Superior Cleaning Power to Every Home
                    </p>
                </div>
            </section>

            <div className="container">
                {/* Introduction Section */}
                <section className="content-section">
                    <div className="section-content">
                        <div className="text-content">
                            <h2>Our Story</h2>
                            <p>
                                At T&P, we believe that cleanliness is more than just a chore — it's a reflection of care, comfort, and pride in every home. Our brand was founded with a single mission: to bring superior cleaning power into every household while maintaining the values of trust, purity, and performance. With our flagship product, Ghar Detergent Powder, we've created a washing solution that's not only powerful on stains but also gentle on fabrics and skin.
                            </p>
                            <p>
                                We understand that for families, cleanliness is deeply personal. Every outfit tells a story — from school uniforms and office wear to festive attire and everyday clothes — and each one deserves to be cared for with love. That's why T&P has dedicated itself to crafting a detergent that combines science, technology, and care to meet the real needs of modern homes.
                            </p>
                        </div>
                        <div className="highlight-box">
                            <p className="highlight-text">
                                "We understand that for families, cleanliness is deeply personal. Every outfit tells a story — from school uniforms and office wear to festive attire and everyday clothes — and each one deserves to be cared for with love."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="content-section philosophy-section">
                    <h2 className="section-title">
                        <span className="icon">💡</span>
                        Our Philosophy: Say No to Dirt
                    </h2>
                    <div className="section-content">
                        <div className="text-content">
                            <p>
                                At T&P, we view our work as more than just manufacturing detergent; it's about building trust with every wash. Our guiding principle is simple: deliver quality that customers can see, smell, and feel. We don't just aim to clean clothes — we aim to enhance everyday living.
                            </p>
                            <p>
                                Behind Ghar Detergent Powder lies a philosophy of balance. We balance powerful cleaning action with gentle care for fabrics, affordability with premium performance, and innovation with environmental responsibility. We believe that true cleanliness shouldn't come at the cost of the planet or personal well-being — which is why every batch of Ghar Detergent Powder is carefully formulated, tested, and refined to meet the highest standards of quality and safety.
                            </p>
                        </div>
                        <div className="balance-card">
                            <h3>Our Balance</h3>
                            <ul>
                                <li>Power + Gentleness</li>
                                <li>Affordability + Premium Quality</li>
                                <li>Innovation + Responsibility</li>
                                <li>Performance + Care</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Science Section */}
                <section className="content-section science-section">
                    <h2 className="section-title">
                        <span className="icon">🔬</span>
                        The Science of Superior Cleaning
                    </h2>
                    <div className="section-content">
                        <div className="text-content">
                            <p>
                                Every scoop of Ghar Detergent Powder is powered by advanced formulation science. Our team works tirelessly to research and perfect each ingredient to ensure it performs a specific purpose — from breaking down tough stains to keeping colors bright and whites sparkling.
                            </p>
                            <p>
                                The detergent's unique formula is enriched with active cleaning agents, optical brighteners, and fabric protectors that go deep into fibers, lifting away dirt and grime while preserving the original texture and softness of clothes.
                            </p>
                            <p>
                                We have invested in modern production processes and quality control measures to ensure consistency in every pack. The result is a detergent that removes stains effectively, leaves a refreshing fragrance, and maintains the natural feel of fabrics, wash after wash.
                            </p>
                            <p>
                                At T&P, we understand that washing habits vary — some prefer handwashing, others rely on washing machines. That's why Ghar Detergent Powder is designed to perform equally well in both conditions, ensuring convenience and effectiveness for every household.
                            </p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <h3>Advanced Formulation</h3>
                                <p>Scientifically crafted for optimal performance</p>
                            </div>
                            <div className="feature-card">
                                <h3>Deep Cleaning</h3>
                                <p>Penetrates fibers to remove stubborn stains</p>
                            </div>
                            <div className="feature-card">
                                <h3>Fabric Protection</h3>
                                <p>Preserves texture and color integrity</p>
                            </div>
                            <div className="feature-card">
                                <h3>Universal Use</h3>
                                <p>Works great in both machine and hand washing</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality Commitment */}
                <section className="content-section quality-section">
                    <h2 className="section-title">
                        <span className="icon">✅</span>
                        Our Commitment to Quality
                    </h2>
                    <p>
                        Quality is not a target for us; it is a tradition. From the sourcing of raw materials to the final packaging, every step in our production line is driven by quality assurance.
                    </p>
                    <div className="quality-grid">
                        <div className="quality-card">
                            <h3>Expert Team</h3>
                            <p>Experienced professionals continuously testing and refining products</p>
                        </div>
                        <div className="quality-card">
                            <h3>Strict Standards</h3>
                            <p>Adherence to rigorous manufacturing and quality control measures</p>
                        </div>
                        <div className="quality-card">
                            <h3>Customer Focus</h3>
                            <p>Satisfaction at the core of all our operations</p>
                        </div>
                    </div>
                    <p>
                        Our team of experienced professionals and technical experts continually test and refine our products under various conditions. Every packet of Ghar Detergent Powder that reaches the market carries the promise of T&P — a promise of purity, performance, and perfection.
                    </p>
                    <p>
                        We adhere to strict manufacturing standards, ensuring that each batch is consistent in quality, fragrance, and performance. Customer satisfaction is at the core of our operations, and we take pride in the trust our growing community of users places in us.
                    </p>
                </section>

                {/* Sustainability */}
                <section className="content-section sustainability-section">
                    <h2 className="section-title">
                        <span className="icon">🌿</span>
                        Sustainability and Responsibility
                    </h2>
                    <div className="section-content">
                        <div className="text-content">
                            <p>
                                At T&P, we believe that being clean also means being responsible. Our commitment to sustainability is reflected in our continuous efforts to reduce waste, optimize resources, and minimize our environmental footprint.
                            </p>
                            <p>
                                We carefully select ingredients that are biodegradable and eco-friendly, and we strive to make our packaging recyclable and sustainable. We're actively working toward a greener future — one where every wash not only makes your clothes cleaner but also contributes to a cleaner planet.
                            </p>
                            <div className="eco-features">
                                <div className="eco-item">✓ Biodegradable Ingredients</div>
                                <div className="eco-item">✓ Recyclable Packaging</div>
                                <div className="eco-item">✓ Environmental Education</div>
                                <div className="eco-item">✓ Community Initiatives</div>
                            </div>
                        </div>
                        <div className="eco-card">
                            <h3>Green Future Vision</h3>
                            <p>
                                We're actively working toward a greener future — one where every wash not only makes your clothes cleaner but also contributes to a cleaner planet.
                            </p>
                            <p>
                                We also support initiatives that promote hygiene awareness and environmental education. Our aim is to inspire communities to adopt habits that benefit both their homes and the Earth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Innovation */}
                <section className="content-section innovation-section">
                    <h2 className="section-title">
                        <span className="icon">🚀</span>
                        Innovation That Serves You
                    </h2>
                    <p>
                        Innovation is at the heart of T&P's success. We constantly study market trends, consumer feedback, and technological advancements to stay ahead in performance and value. Our research team is focused on developing next-generation cleaning solutions that go beyond stain removal — innovations that bring convenience, savings, and satisfaction to our customers.
                    </p>
                    <div className="innovation-grid">
                        <div className="innovation-card">
                            <h3>Research Driven</h3>
                            <p>Continuous study of market trends and consumer needs</p>
                        </div>
                        <div className="innovation-card">
                            <h3>Next-Gen Solutions</h3>
                            <p>Developing advanced cleaning technologies</p>
                        </div>
                        <div className="innovation-card">
                            <h3>Enhanced Experience</h3>
                            <p>Making washing easier, faster, and more enjoyable</p>
                        </div>
                    </div>
                    <p>
                        We understand that the modern consumer looks for more than just a detergent — they seek a complete washing experience. That's why every improvement we make to Ghar Detergent Powder is driven by a desire to enhance that experience — making washing easier, faster, and more enjoyable.
                    </p>
                    <p>
                        Our focus is on continuous improvement — in formulation, fragrance, packaging, and performance — so that we can always deliver better results to our users.
                    </p>
                </section>

                {/* Customers */}
                <section className="content-section customers-section">
                    <h2 className="section-title">
                        <span className="icon">👥</span>
                        Our Customers, Our Strength
                    </h2>
                    <div className="customer-card">
                        <p>
                            Every satisfied customer is the heart of our success. We are deeply grateful for the families, businesses, and communities that have embraced Ghar Detergent Powder as part of their daily lives.
                        </p>
                        <p>
                            At T&P, we don't just see our customers as consumers — we see them as partners in our journey. Their feedback, trust, and support inspire us to keep raising our standards. We are proud that our product has found its way into countless homes, helping people maintain freshness, cleanliness, and confidence in their clothing.
                        </p>
                        <p>
                            We actively listen to our customers and value their opinions. Whether it's through direct feedback, online reviews, or community interactions, every voice helps us grow stronger and serve better.
                        </p>
                    </div>
                </section>

                {/* Vision & Promise */}
                <section className="content-section vision-promise-section">
                    <div className="two-column">
                        <div className="column">
                            <h2 className="section-title">
                                <span className="icon">👁️</span>
                                Our Vision
                            </h2>
                            <div className="vision-card">
                                <p>
                                    Our vision is to become a leading name in the detergent industry, known for innovation, integrity, and impact. We aim to redefine the standards of cleaning products by offering solutions that combine performance, affordability, and sustainability.
                                </p>
                                <p>
                                    We see a future where Ghar Detergent Powder becomes a trusted household name across the nation — synonymous with quality, freshness, and care. As we continue to grow, we are committed to expanding our range of cleaning products to meet the evolving needs of our customers while staying true to our core values.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <h2 className="section-title">
                                <span className="icon">🤝</span>
                                Our Promise
                            </h2>
                            <div className="promise-card">
                                <p>
                                    At T&P, our promise is simple yet powerful — to deliver the best cleaning experience at the best value. With Ghar Detergent Powder, we pledge to keep your clothes not just clean, but truly cared for.
                                </p>
                                <p>
                                    We promise to continue innovating, improving, and listening to our customers, because we believe that excellence is not a destination but a journey.
                                </p>
                                <p>
                                    Our dedication to quality and our respect for customers form the foundation of everything we do. We take pride in being a part of your daily life — ensuring that every wash brings you freshness, confidence, and satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Family Section */}
                <section className="join-family-section">
                    <div className="family-card">
                        <h2>Join the Ghar Family</h2>
                        <p className="family-subtitle">
                            Clean clothes bring comfort, confidence, and happiness — and at T&P, we're honored to play a part in that.
                        </p>
                        <p>
                            When you choose Ghar Detergent Powder, you're not just choosing a product; you're choosing a brand that understands your needs and shares your values.
                        </p>
                        <div className="cta-section">
                            <p className="cta-text">
                                Together, let's celebrate cleanliness, care, and confidence — the true essence of home.
                            </p>
                        </div>
                        <p className="closing-statement">
                            At T&P, we don't just make detergent — we make every wash a moment of pride.
                        </p>
                    </div>
                </section>
            </div>
            <InquiryForms />
        </div>
    );
};

export default AboutUs;