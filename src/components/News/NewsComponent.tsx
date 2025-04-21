import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NewsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title, description, date, location: eventLocation } = location.state;

  // Add state for donation
  const [donationType, setDonationType] = useState("1");
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonation = () => {
    alert("Donation process initiated with amount: " + donationAmount);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Left half - Image */}
          <div className="col-6 px-0">
            <div 
              className="h-100"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Right half - Content */}
          <div className="col-6 d-flex align-items-start bg-white px-5">
            <div className="py-5" style={{ maxWidth: '600px' }}>
              {/* Back Button */}
              <button 
                onClick={() => navigate(-1)}
                className="btn btn-link text-decoration-none mb-5 p-0 d-flex align-items-center gap-2 text-secondary"
              >
                <i className="bi bi-arrow-left"></i>
                Back to Events
              </button>

              {/* Meta information */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-medium">
                  {eventLocation}
                </span>
                <span className="text-secondary" style={{ fontSize: '0.95rem' }}>
                  <i className="bi bi-calendar3 me-2"></i>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              {/* Title */}
              <h1 className="display-4 fw-bold lh-sm mb-4" style={{ 
                color: '#1a1a1a',
                fontSize: 'calc(1.8rem + 1.5vw)'
              }}>
                {title}
              </h1>

              {/* Separator */}
              <div className="separator my-4" style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(to right, #3498DB, #2980B9)',
                borderRadius: '4px'
              }}/>

              {/* Description */}
              <div className="content-wrapper mt-5">
                <p className="text-gray-700" style={{ 
                  color: '#4a4a4a',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                  maxWidth: '95%'
                }}>
                  {description}
                </p>
              </div>

              {/* Share button with improved styling */}
              <button 
                className="btn btn-primary rounded-pill mt-5 px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm hover-lift"
                data-bs-toggle="modal"
                data-bs-target="#donationModal"
              >
                <span>Donate</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Donation Modal */}
      <div className="modal fade" id="donationModal" aria-labelledby="donationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="donationModalLabel">
                Donate now to help
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row col-12 mt-2 mb-7 justify-content-center gx-0">
                <label className="col-5 col-md-3 rounded-pill-start rounded-0 btn btn-primary text-center">
                  <input
                    type="radio"
                    name="rdoDonation"
                    value="1"
                    checked={donationType === "1"}
                    onChange={(e) => setDonationType(e.target.value)}
                    hidden
                  />
                  One Time
                </label>
                <label className="col-5 col-md-3 rounded-pill-end rounded-0 btn btn-outline-primary text-center">
                  <input
                    type="radio"
                    name="rdoDonation"
                    value="2"
                    checked={donationType === "2"}
                    onChange={(e) => setDonationType(e.target.value)}
                    hidden
                  />
                  Monthly
                </label>
              </div>

              <div className="text-center">
                <p className="fw-medium text-uppercase">Set donation amount</p>
              </div>

              <div className="col-11 col-md-9 offset-md-1">
                <div className="row input-group justify-content-between">
                  {[50, 100, 300, 500, 1000].map((amount) => (
                    <div className="col-1" key={amount}>
                      <button
                        className="btn btn-outline-primary rounded-circle px-2 btnAmounts"
                        onClick={() => setDonationAmount(amount.toString())}
                        type="button"
                      >
                        {amount}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 mt-7">
                <input
                  className="col-12 form-control text-center rounded-pill"
                  placeholder="Another Amount Q.R."
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer justify-content-between mt-md-15">
              <button
                type="button"
                onClick={handleDonation}
                className="btn btn-primary"
              >
                Donate now
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsComponent;