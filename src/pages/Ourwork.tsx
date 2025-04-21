// Import CSS files

import { useEffect, useState } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import CaseSpecial from "../components/Categories/CaseSpecial";
import Vacation from "../components/Categories/Voluntary";

const SocialWelfare = () => {
  useEffect(() => {
    import("../qc.global.css"); 
  }, []);
  const [donationType, setDonationType] = useState("1"); 
 
  const [paymentDetails, setPaymentDetails] = useState({
    date: '',
    ccpNumber: '',
    ccpCode: '',
    paymentType: '',
    amount: ''
  });



  useEffect(() => {
    
    setDonationType("1");
  }, []);

  return (
    <>
      <Header />
      <main
        className="main-banner bg-cover bg-cover-center text-white"
        style={{
          backgroundImage: "url(/images/Humanitarianassistance-Banner.jpg)",
          backgroundPosition: "75%",
        }}
      ></main>
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img
                  className="mt-11 img-size-icon"
                  src="/images/Humanitarian-assistance.png"
                  alt="Humanitarian assistance"
                />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1
                  className="display-4 text-uppercase fw-bold p-9 px-0"
                  style={{ borderBottom: "1px solid #000000" }}
                >
                  Social Welfare
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                In the world&#39;s poorest countries, around 1 in 4 children are
                engaged in child labor.
              </div>
              <div className="col-10 col-md-4 col-xl-2 p-9 pt-0 p-md-0">
                <button
                  type="button"
                  className="btn btn-outline-dark rounded-pill mt-md-13"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className="our-work-toast position-fixed top-0 end-0 p-0 p-md-3 pt-14 pt-md-15"
        style={{ zIndex: 5 }}
      >
        <div
          id="toastNotice"
          className="toast p-5 pt-0 pe-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header pb-0">
            <div className="col">
              <button
                type="button"
                className="btn-close float-end"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="toast-body pt-0">
            <p id="lblAddToCartMsg" className="col-11"></p>
            <p
              className="text-uppercase text-primary fw-medium text-decoration-underline mt-6"
              role="button"
              onClick={() =>
                (window.location.href = "/en/global/donation/checkout")
              }
            >
              VIEW YOUR CART
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Donation Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Add Donation Type Selector */}
              <div className="col-12 mb-4">
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

              <form className="row g-3">
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
                onClick={() => {
                  console.log('Payment details:', paymentDetails);
                  // Add your donation processing logic here
                }}
                className="btn btn-primary"
              >
                Confirm Donation
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

      <section>
        <div className="container mb-13">
          <div className="row mt-6 justify-content-between">
            <div className="col-xl-3 col-sm-12">
              <img alt="" className="pb-7" src="/Challeng-Icon.svg" />
              <p>Challenges</p>
            </div>

            <div className="col-sm-12 col-xl-6 mt-1">
              <p>
                Vulnerable groups such as children, women and elderly face a
                higher risk of falling into and remaining in poverty.
              </p>
              <p>
                For widows living in underdeveloped and developing countries,
                the lack of economic opportunities and prospects for livelihood
                often force children out of school and into labor, thus
                perpetuting the cycle of poverty.
              </p>
              <p>
                Regular financial support helps lift these families out of
                poverty and help children and their communities access
                life-changing basics like education, clean water and healthcare.
                Since inception,
              </p>
              <p>
                Qatar charity has made child sponsorship its flagship program to
                fight poverty at its source and to give children and their
                families a safe and enabling environment where they can thrive
                and prosper.
              </p>
            </div>
          </div>
        </div>
        <hr className="pulits-hr my-15" />
        <div className="container"></div>
      </section>

      <section id="QCdo">
        <div className="container">
          <div className="row fw-bold-xs">
            <div className="col-12">
              <div className="row fw-bold-xs">
                <div className="col-12">
                  <p className="display-2 f-ptSerif">
                    Qatar Charity&#39;s
                    <span className="text-primary text-uppercase">
                      {" "}
                      approach{" "}
                    </span>
                  </p>
                  <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                    <p className="display-2 f-ptSerif">
                      to the global{" "}
                      <span className="text-yellow-background">
                        social welfare challenges
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pic-clean">
        <div className="primary-circle"></div>
        <div className="container right-gray mt-15 pb-15">
          <div className="row">
            <div className="container right-gray mt-10 pb-15">
              <div className="row">
                <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                  <div className="row row-cols-2">
                    <div className="col-xl-4 col-6 mt-n18">
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-left.jpg"
                        alt="Humanitarian assistance"
                      />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-right.jpg"
                        alt="Humanitarian assistance"
                      />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img
                        className="col-12 mb-15"
                        src="/images/Arrow.png"
                        alt="Arrow"
                      />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-bottom.jpg"
                        alt="Humanitarian assistance"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>
                &bull; Building resilience in vulnerable communities
                <br />
                &bull; Protecting the dignity of underprivileged groups
                <br />
                &bull; Increasing access to equal opportunities of income,
                health and education
                <br />
                &bull; Providing access to social care and protection
                <br />
                &bull; Eliminating violence and abuse driven by poverty
                <br />
                &bull; Reducing inequality trough inclusive empowerment of
                vulnerable people.
              </p>

              <h1>Areas of Intervention</h1>
              <p>&bull; Child sponsorship</p>
              <p>&bull; Providing small loans.</p>
              <p>&bull; Supporting small-scaled income generating projects</p>
              <p>&bull; Cash assistance and livelihood</p>
              <p>&bull; Providing food, medical, and psychological support</p>
              <p>&bull; Seasonal aid (Ramadan, Eid...)</p>
              <p>&bull; Providing financial aid to debtors</p>
            </div>
          </div>
        </div>
      </section>

     <CaseSpecial/>





     <Vacation />

      <section id="WSP">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="display-4 font-weight-medium text-uppercase">
                Social Welfare projects
              </p>
              <span className="text-primary h2">(2014 - 2018)</span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
            <div className="col">
              <div className="text-center pt-15">
                <img
                  className="pb-7"
                  src="/images/0-Photo2021-02-24_01-41-36-PM.png"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">
                    203,000,000 $
                  </h3>
                </div>
                <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img
                  className="pb-7"
                  src="/images/0-Photo2021-02-24_01-41-09-PM.png"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">
                    1,070,000
                  </h3>
                </div>
                <p className="card-text mb-9 text-gray">
                  {" "}
                  children, women, people with disabilities, elderly and
                  vulnerable communities
                </p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img
                  className="pb-7"
                  src="/images/0-Photo2021-02-24_01-40-26-PM.png"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">40</h3>
                </div>
                <p className="card-text mb-9 text-gray">
                  {" "}
                  through 30 field offices and implementing partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-5 offset-xl-0">
              <h1 className="display-4">OUR IMPACT</h1>
              <h1 className="h2 text-primary">in 2022</h1>
            </div>

            <div className="col-12 col-lg-7 offset-lg-1 col-xl-6 offset-xl-1 d-flex flex-row">
              <img
                className=""
                src="/images/our_impact_icon.png"
                alt="Impact icon"
              />
              <div className="flex-col ms-3">
                <p className="display-5">2.1 Million</p>
                <p className="h4">
                  had access to safe drinking water and sanitation services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container spotlight position-relative">
          <hr className="pulits-hr mb-17" />
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-5 offset-0">
              <h1 className="lh-base display-4"></h1>
              <div className="w-100"></div>
              <img src="/assets/icons/Path-16213.svg" alt="" className="" />
            </div>
            <p className="col-12 col-lg-6 offset-lg-2 col-xl-5 offset-xl-2 text-primary h2 f-ptSerif fst-italic"></p>
            <div className="text-center mt-10">
              <img
                className="col-12"
                src="/images/spotlight_global_ph.png"
                alt="Spotlight"
              />
            </div>
          </div>
          <div className="row justify-content-between mt-10">
            <div className="col-12 col-md-6 col-lg-5">
              <p></p>
            </div>
            <div className="col-12 col-md-5">
              <p></p>
            </div>
          </div>
        </div>
      </section>

      <section id="QCdo" className="pt-0 d-none">
        <main
          className="main-banner bg-cover bg-cover-center text-white"
          style={{
            backgroundImage: "url('/images/Humanitarianassistance-Bottom.jpg')",
            backgroundPosition: "75%",
          }}
        >
          <div className="container">
            <div className="col-12 col-md-8 offset-md-2 text-start text-lg-center pt-16">
              <button
                type="button"
                className="btn btn-lg btn-primary rounded-pill ml-6"
                onClick={() => (location.href = "")}
              >
                Donate Now
              </button>
            </div>
          </div>
        </main>
      </section>

      <section>
        <hr className="pulits-hr mb-17" />
        <div className="container">
          <div className="row justify-content-between"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SocialWelfare;
