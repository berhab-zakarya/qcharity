// Import CSS files

import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
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

  // بيانات الحالات الخاصة (Case Special)
  const caseItems = [
    {
      image: "/category/SocialWelfare/wc1.jpg",
      title: "Fatima – Morocco",
      description: "Needs safe shelter after losing her home and loved ones in an earthquake.",
      descriptionMax: "Fatima lost her home and two family members during the recent earthquake. Since then, she has been living under a plastic tarp with her young daughter. The trauma, combined with a lack of food and shelter, has left her emotionally and physically drained. She dreams of a safe place to call home again."
    },
    {
      image: "/category/SocialWelfare/wc2.jpg",
      title: "Kim Family – Indonesia",
      description: "Needs recovery support after a tsunami destroyed their home and livelihood",
      descriptionMax: "The Kim family’s village was destroyed by a tsunami. Their home and fishing boat—their only source of income—were washed away. Now, they are struggling to find food and clean water while living in a crowded emergency shelter. They need long-term recovery support to rebuild their lives."
    },
    {
      image: "/category/SocialWelfare/wv3.jpg",
      title: "Joseph – Haiti",
      description: "Needs shelter, food, and aid after his neighborhood was destroyed.",
      descriptionMax: "Joseph’s entire neighborhood was reduced to rubble. He spends his nights sleeping outdoors and his days searching for food. With no shelter and aftershocks continuing, he urgently needs help with housing, food, and rebuilding efforts."
    },
    {
      image: "/category/SocialWelfare/wc4.jpg",
      title: "Noura – Turkey",
      description: "Needs emotional and financial support to care for her siblings after the quake.",
      descriptionMax: "After losing her parents in the earthquake, 15-year-old Noura has taken on the role of caretaker for her two younger siblings. They are currently in a tent city with minimal resources. Noura needs emotional and financial support to provide stability for her family."
    },
    {
      image: "/category/SocialWelfare/wc5.jpg",
      title: "Elias – Philippines",
      description: "Needs agricultural aid to feed his children after losing everything in a typhoon.",
      descriptionMax: "Elias, a father of four, lost his farmland and livestock when a typhoon ravaged his village. Now without income, food, or shelter, he struggles to feed his children. Aid would help him restart his agricultural activity and regain his family’s livelihood."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/SocialWelfare/wv1.jpg",
      title: "Disaster Relief Kits – Indonesia",
      description: "After a tsunami, disaster relief kits containing food, water, clothing, and hygiene products are distributed to survivors.",
    },
    {
      image: "/voluntary/SocialWelfare/wv2.webp",
      title: "Emergency Shelter Tents – Philippines",
      description: "Emergency shelter tents are provided to families whose homes were destroyed by a typhoon. These tents serve as temporary housing until more permanent solutions can be found.",
    },
    {
      image: "/voluntary/SocialWelfare/wv3.webp",
      title: "Search and Rescue Teams – Turkey",
      description: "Search and rescue teams, equipped with the necessary tools and training, are sent to earthquake-hit areas to find and rescue survivors trapped under debris.",
    },
    {
      image: "/voluntary/SocialWelfare/wv4.jpg",
      title: "Psychosocial Support for Disaster Survivors – Japan",
      description: "After a major earthquake, a psychosocial support program is launched to help survivors deal with grief, trauma, and stress.",
    },
    {
      image: "/voluntary/SocialWelfare/wv5.jpg",
      title: "Reconstruction Materials – Nepal",
      description: "Following the devastating earthquake, reconstruction materials like cement, bricks, and steel are provided to communities to rebuild their homes and infrastructure.",
    }
  ];

  useEffect(() => {
    setDonationType("1");
  }, []);

  const [showToast, setShowToast] = useState(false);

  // تعديل زر التبرع ليظهر التوست عند التأكيد
  const handleDonationConfirm = () => {
    // ...أي منطق إضافي لمعالجة التبرع...
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
  };

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

      {/* Toast يظهر في الأسفل على اليمين */}
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
                onClick={handleDonationConfirm}
                className="btn btn-primary"
                data-bs-dismiss="modal"
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

      <CaseSpecial caseItems={caseItems} />
      <Vacation items={voluntaryItems} />

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
