import { Toast, ToastContainer } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CaseSpecialPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title, description } = location.state;
  
  // Update state for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    date: '',
    ccpNumber: '',
    ccpCode: '',
    paymentType: '',
    amount: ''
  });

  // Add donation type state
  const [donationType, setDonationType] = useState("1"); // "1" for one-time, "2" for monthly
  const [showToast, setShowToast] = useState(false);

  const handleDonation = () => {
    // ...any logic you want...
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
    // Close modal if needed (Bootstrap 5)
    const modal = window.document.getElementById('donationModal');
    if (modal) {
      (window as any).bootstrap?.Modal.getOrCreateInstance(modal).hide();
    }
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
                Back
              </button>

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

              {/* Donate Button */}
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

      {/* Update Modal Content */}
      <div className="modal fade" id="donationModal" aria-labelledby="donationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="donationModalLabel">
                Payment Details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                {/* Donation Type Selection */}
                <div className="col-12 mb-3">
                  <div className="row col-12 justify-content-center gx-0">
                    <label className={`col-5 col-md-3 rounded-pill-start rounded-0 btn ${donationType === "1" ? 'btn-primary' : 'btn-outline-primary'} text-center`}>
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
                    <label className={`col-5 col-md-3 rounded-pill-end rounded-0 btn ${donationType === "2" ? 'btn-primary' : 'btn-outline-primary'} text-center`}>
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
                </div>

                {/* Date */}
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={paymentDetails.date}
                    onChange={(e) => setPaymentDetails({...paymentDetails, date: e.target.value})}
                    required
                  />
                </div>

                {/* CCP Number */}
                <div className="col-md-6">
                  <label className="form-label">CCP Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter CCP Number"
                    value={paymentDetails.ccpNumber}
                    onChange={(e) => setPaymentDetails({...paymentDetails, ccpNumber: e.target.value})}
                    required
                  />
                </div>

                {/* CCP Code */}
                <div className="col-md-6">
                  <label className="form-label">CCP Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter CCP Code"
                    value={paymentDetails.ccpCode}
                    onChange={(e) => setPaymentDetails({...paymentDetails, ccpCode: e.target.value})}
                    required
                  />
                </div>

                {/* Payment Type */}
                <div className="col-md-6">
                  <label className="form-label">Payment Type</label>
                  <select 
                    className="form-select"
                    value={paymentDetails.paymentType}
                    onChange={(e) => setPaymentDetails({...paymentDetails, paymentType: e.target.value})}
                    required
                  >
                    <option value="">Select payment type</option>
                    <option value="ccp">CCP</option>
                    <option value="card">Credit Card</option>
                    <option value="transfer">Bank Transfer</option>
                  </select>
                </div>

                {/* Amount */}
                <div className="col-12">
                  <label className="form-label">Amount</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      value={paymentDetails.amount}
                      onChange={(e) => setPaymentDetails({...paymentDetails, amount: e.target.value})}
                      required
                    />
                    <span className="input-group-text">Q.R.</span>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-content-between mt-md-15">
              <button
                type="button"
                onClick={handleDonation}
                className="btn btn-primary"
              >
                Confirm Payment
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast for donation confirmation */}
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success" delay={7000} autohide>
          <Toast.Header>
            <strong className="me-auto">Donation Sent</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Your donation request has been sent.<br />
            Thank you for your generosity!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default CaseSpecialPage;