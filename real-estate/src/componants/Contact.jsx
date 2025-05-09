import React from 'react';
import ContactForm from './Form';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Contact Us</h1>
        <p className="text-muted">We’d love to hear from you! Fill out the form below to get in touch.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Our Office</h4>
          <p><strong>Address:</strong> 123 Real Estate Street, Bhopal, MP</p>
          <p><strong>Email:</strong> support@realestate.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14563.00134880129!2d77.40808785!3d23.2599336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4262beae2bb3%3A0x3641f0ed03de2c92!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1671298162444!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> <br /> <hr />

        <div className="col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
