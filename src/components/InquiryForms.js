import React, { useState } from 'react';


// Global functions to open modals
window.openActiveDistributorForm = () => {
    const modal = document.getElementById('activeDistributorModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

window.openBecomeDistributorForm = () => {
    const modal = document.getElementById('becomeDistributorModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

// Function to close modals
const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

const InquiryForms = () => {
    return (
        <div className="inquiry-forms-wrapper">
            <ActiveDistributorModal />
            <BecomeDistributorModal />
        </div>
    );
};

// Active Distributor Inquiry Form
const ActiveDistributorModal = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        currentBusiness: '',
        inquiry: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your inquiry has been submitted. We will contact you soon.');
        closeModal('activeDistributorModal');
        // Reset form
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            currentBusiness: '',
            inquiry: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="activeDistributorModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal('activeDistributorModal')}>&times;</span>
                <h2>Active Distributor Inquiry</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Company Name *</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact Person *</label>
                        <input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Current Business</label>
                        <textarea
                            name="currentBusiness"
                            value={formData.currentBusiness}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Describe your current distribution business..."
                        />
                    </div>

                    <div className="form-group">
                        <label>Inquiry Details *</label>
                        <textarea
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            rows="4"
                            required
                            placeholder="Please describe your inquiry in detail..."
                        />
                    </div>

                    <button type="submit" className="submit-btn">Submit Inquiry</button>
                </form>
            </div>
        </div>
    );
};

// Become a Distributor Form
const BecomeDistributorModal = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        investmentCapacity: '',
        experience: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest in becoming a distributor! We will contact you soon.');
        closeModal('becomeDistributorModal');
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            investmentCapacity: '',
            experience: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="becomeDistributorModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal('becomeDistributorModal')}>&times;</span>
                <h2>Become a Distributor</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>City *</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>State *</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Investment Capacity *</label>
                            <select name="investmentCapacity" value={formData.investmentCapacity} onChange={handleChange} required>
                                <option value="">Select Range</option>
                                <option value="1-5L">₹1-5 Lakhs</option>
                                <option value="5-10L">₹5-10 Lakhs</option>
                                <option value="10-25L">₹10-25 Lakhs</option>
                                <option value="25L+">₹25 Lakhs+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Previous Experience</label>
                            <select name="experience" value={formData.experience} onChange={handleChange}>
                                <option value="">Select Experience</option>
                                <option value="none">No Experience</option>
                                <option value="1-3">1-3 Years</option>
                                <option value="3-5">3-5 Years</option>
                                <option value="5+">5+ Years</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Additional Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Any additional information you'd like to share..."
                        />
                    </div>

                    <button type="submit" className="submit-btn">Apply Now</button>
                </form>
            </div>
        </div>
    );
};

export default InquiryForms;