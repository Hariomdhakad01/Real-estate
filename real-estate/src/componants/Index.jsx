import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to Real Estate Hub</h1>
        <p className="lead">Your one-stop solution for Properties, PGs, Buying & Renting.</p>
      </div>

      <div className="row text-center">
        {/* Properties Page */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Properties</h5>
              <p className="card-text">View all available properties with location & type.</p>
              <a href="/properties" className="btn btn-primary">Go to Properties</a>
            </div>
          </div>
        </div>

        {/* PG Module */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">PG & Hostel</h5>
              <p className="card-text">See vacant rooms, bed availability & generate monthly bill.</p>
              <a href="/pg" className="btn btn-success">Visit PG Module</a>
            </div>
          </div>
        </div>

        {/* Buy/Sell/Rent Form */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Buy / Sell / Rent</h5>
              <p className="card-text">Submit your request to buy, sell or rent properties.</p>
              <a href="/form" className="btn btn-warning">Fill the Form</a>
            </div>
          </div>
        </div>

        {/* Contact Page */}
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Have questions? Reach out to our support team.</p>
              <a href="/contact" className="btn btn-info">Contact Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
