import React from 'react';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h1 id="srv-h1">Our Real Estate Services</h1>
      <p id="srv-para">Providing top-notch services for buying, selling, and renting properties, along with property management solutions.</p>
      <div className="services-grid">
        <div className="srv-box">
          <h1>Property Listing</h1>
          <p><span>Wide Range of Properties:</span> We offer a diverse selection of properties for buying, selling, and renting, catering to all your needs.</p>
        </div>
        <div className="srv-box">
          <h1>Buy & Sell Services</h1>
          <p><span>Expert Assistance:</span> Our team of professionals is here to guide you through every step of the process, ensuring a smooth transaction.</p>
        </div>
        <div className="srv-box">
          <h1>Renting Services</h1>
          <p><span>Flexible Leasing Options:</span> Whether you're looking for short-term or long-term rental, we have flexible leasing options that suit your needs.</p>
        </div>
        <div className="srv-box">
          <h1>Property Management</h1>
          <p><span>Comprehensive Care:</span> From maintenance to tenant management, we provide full property management services to protect your investment.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
