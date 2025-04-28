import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';

function QatarCharityCleanWater() {
  const [donationType, setDonationType] = useState("1");
  const [paymentDetails, setPaymentDetails] = useState({
    date: '',
    ccpNumber: '',
    ccpCode: '',
    paymentType: '',
    amount: ''
  });
  const [showToast, setShowToast] = useState(false);

  // بيانات الحالات الخاصة (Case Special)
  const caseItems = [
    {
      image: "/category/wc1.jpg",
      title: "Amina – Chad",
      description: "Urgently needs access to clean water to protect her children’s health.",
      descriptionMax: "Amina and her children live in a remote village where the only source of water is a muddy pond shared with animals. Every day, she walks over six kilometers under the scorching sun to collect this unsafe water. As a result, her children suffer from repeated bouts of diarrhea and skin infections, putting their health and education at risk. The family urgently needs access to clean, potable water and hygiene resources."
    },
    {
      image: "/category/wc2.jpg",
      title: "Musa – Somalia",
      description: "Needs proper sanitation at school to stay healthy and continue learning.",
      descriptionMax: "Musa is a bright 12-year-old boy with big dreams. However, his school lacks basic sanitation facilities. Without access to clean water or toilets, Musa often misses class due to illness. The unsanitary conditions also discourage many girls from attending school altogether. A WASH intervention could drastically improve the learning environment and health outcomes for the entire community."
    },
    {
      image: "/category/wc3.jpg",
      title: "The Diko Family – Niger",
      description: "Desperately needs a sustainable source of clean water.",
      descriptionMax: "Living in a desert area, the Diko family struggles daily with water scarcity. Their household uses a single bucket of contaminated water for drinking, cooking, and bathing. They are in desperate need of a sustainable solution, such as a borehole or water filtration system, to ensure safe access to this basic human right."
    },
    {
      image: "/category/wc4.webp",
      title: "Mariam – Yemen",
      description: "Needs hygiene kits and clean water to prevent disease in her children.",
      descriptionMax: "Mariam is a widow raising five young children in a war-torn region. With no clean water or proper sanitation, it is nearly impossible to maintain basic hygiene. Skin rashes and gastrointestinal diseases are common in her home. She hopes for soap, hygiene kits, and clean water to help protect her children from preventable illnesses."
    },
    {
      image: "/category/wc5.jpg",
      title: "Kone Orphanage – Mali",
      description: "Needs a water tank and hygiene training to keep the children safe.",
      descriptionMax: "In a rural town in Mali, the Kone Orphanage houses 22 children. Unfortunately, the facility lacks access to clean water and proper sanitation. The children are forced to use unsafe water from a nearby stream, leading to frequent sickness. A water tank and basic hygiene education could make a life-changing difference."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/wv1.jpg",
      title: "Water Purification Kits – Chad",
      description: "The community in a rural village receives water purification kits, which allow families to treat contaminated water sources and make it safe for drinking, cooking.",
    },
    {
      image: "/voluntary/wv2.jpg",
      title: "Portable Toilets – Somalia",
      description: "In a displaced persons camp, portable toilets are provided for families who lack access to sanitation facilities.",
    },
    {
      image: "/voluntary/wv3.jpg",
      title: "Handwashing Stations – Yemen",
      description: "Mobile handwashing stations equipped with soap and clean water are set up in schools and public areas in conflict-affected zones.",
    },
    {
      image: "/voluntary/wv4.jpg",
      title: "Hygiene Training – Mali",
      description: "A local NGO organizes community workshops on hygiene practices, teaching families about handwashing, safe water storage, and waste disposal.",
    },
    {
      image: "/voluntary/wv5.jpg",
      title: "Water Storage Tanks – Niger",
      description: "A community in a water-scarce region receives large water storage tanks, which enable them to store clean water during the rainy season for use throughout the year.",
    }
  ];

  // دالة تأكيد التبرع
  const handleDonationConfirm = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
    // إغلاق المودال إذا لزم الأمر
    const modal = window.document.getElementById('exampleModal');
    if (modal) {
      (window as any).bootstrap?.Modal.getOrCreateInstance(modal).hide();
    }
  };

  return (
    <>
      <Header />
      <div className="qatar-charity-container">
        {/* Banner Section */}
        <main className="main-banner bg-cover bg-cover-center text-white" 
          style={{
            backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/0-Photo2021-03-01_08-15-01-AM.jpg)", 
            backgroundPosition: "75%"
          }}>
        </main>

        {/* Title Section */}
        <div id="QCdo" className="container mt-n17">
          <div className="container center">
            <div className="col-12 left bg-orange">
              <div className="row justify-content-between">
                <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                  <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/1-Photo2021-03-01_08-15-01-AM.png" alt="Water Icon" />
                </div>
                <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                  <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{ borderBottom: "1px solid #000000" }}>
                    Clean water &amp;<br />
                    sanitation
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12 left bg-orange">
              <div className="row bg-orange">
                <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                  Today, 844 million people – 1 in 9 – lack access to safe water and 2.3 billion people – 1 in 3 – lack access to a toilet.
                </div>
                <div className="col-10 col-md-4 col-xl-2 p-9 pt-0 p-md-0">
                  <button type="button" className="btn btn-outline-dark rounded-pill mt-md-13" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast يظهر في الأسفل يمين الشاشة */}
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

        {/* Donation Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Donation Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Donation Type Selector */}
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
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, date: e.target.value })}
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
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, ccpNumber: e.target.value })}
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
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, ccpCode: e.target.value })}
                      required
                    />
                  </div>

                  {/* Payment Type */}
                  <div className="col-md-6">
                    <label className="form-label">Payment Type</label>
                    <select
                      className="form-select"
                      value={paymentDetails.paymentType}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, paymentType: e.target.value })}
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
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: e.target.value })}
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

        {/* Challenges Section */}
        <section>
          <div className="container mb-13">
            <div className="row mt-6 justify-content-between">
              <div className="col-xl-3 col-sm-12">
                <img alt="Challenge Icon" className="pb-7" src="/content/QCGlobal/images/Challeng-Icon.svg" />
                <p>Challenges</p>
              </div>

              <div className="col-sm-12 col-xl-6 mt-1">
                <p>In July 2010, access to water was recognized as a human right by the United Nations. In July 2010, access to water was recognized as a human right by the United Nations. Today, 844 million people – 1 in 9 – lack access to safe water and 2.3 billion people – 1 in 3 – lack access to a toilet.</p>
                <p>Lack of access to drinking water leads to a vicious circle in which many aspects of a dignified human life are altered.</p>
              </div>
            </div>
          </div>
          <hr className="pulits-hr my-15" />
        </section>

        {/* Approach Section */}
        <section id="QCdo">
          <div className="container">
            <div className="row fw-bold-xs">
              <div className="col-12">
                <div className="row fw-bold-xs">
                  <div className="col-12">
                    <p className="display-2 f-ptSerif">Takaful Charity's<span className="text-primary text-uppercase"> approach </span></p>
                    <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                      <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">water challenges</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pictures Section */}
        <section id="pic-clean">
          <div className="primary-circle"></div>
          <div className="container right-gray mt-15 pb-15">
            <div className="row">
              <div className="container right-gray mt-10 pb-15">
                <div className="row">
                  <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                    <div className="row row-cols-2">
                      <div className="col-xl-4 col-6 mt-n18">
                        <img className="col-12" src="/content/QCGlobal/images/018@2x.png" alt="Water Project" />
                      </div>
                      <div className="col-xl-3 col-6 mt-n15 mb-8">
                        <img className="col-12" src="/content/QCGlobal/images/Editorial use only-shutterstock_628217978.png" alt="Water Project" />
                      </div>
                    </div>
                    <div className="row row-cols-2">
                      <div className="col-xl-2 col-4 mt-n10">
                        <img className="col-12 mb-15" src="/content/QCGlobal/images/Arrow.png" alt="Arrow" />
                      </div>
                      <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                        <img className="col-12" src="/content/QCGlobal/images/A88A1118.png" alt="Water Project" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 offset-xl-3 col-xl-7">
                <h1>Our objectives</h1>
                <p>Takaful Charity's water and sanitation programming strategy aims to:</p>
                <p>
                  • Improve access to clean water and sanitation services<br />
                  • Prevent water-borne diseases<br />
                  • Increase health awareness and personal hygiene<br />
                  • Promote sanitation and hygiene practices in schools<br />
                  • Reduce water scarcity-induced migration movements<br />
                  • Support water use in agriculture to enhance food security<br />
                  • Providing appropriate sanitation services to ensure a safe and clean residential and working environment
                </p>

                <h1>Our efforts</h1>
                <p>Water projects allow the basic needs of families to be met: health, nutrition and education. More importantly, access to viable sanitation makes the economic development of entire villages possible through agricultural activities.</p>
                <p>In 2019, Takaful Charity implemented more than 9,900 water projects, ensuring the local communities are trained in sanitation and hygiene, and establishing local committees to ensure the continuity and sustainability of the projects. These water and sanitation facilities have brought 6 million people closer to a water point in 44 countries.</p>

                <h1>Areas of Intervention</h1>
                <p>• Surface wells.</p>
                <p>• Artesian wells.</p>
                <p>• Water and sanitation facilities</p>
                <p>• Health and hygiene practices promotion</p>
              </div>
            </div>
          </div>
        </section>


       
          <CaseSpecial caseItems={caseItems} />


            <Voluntary items={voluntaryItems} />

        {/* Stats Section */}
        <section id="WSP">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p className="display-4 font-weight-medium text-uppercase">
                  Water and sanitation projects
                </p>
                <span className="text-primary h2">
                  (2014 - 2018)
                </span>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="Money Icon" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">28,000,000 $</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
                </div>
              </div>
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="People Icon" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">2,900,000</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
                </div>
              </div>
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="Globe Icon" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">29</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">through 30 field offices and implementing partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-xl-5 offset-xl-0">
                <h1 className="display-4">
                  OUR IMPACT
                </h1>
                <h1 className="h2 text-primary">
                  in 2022
                </h1>
              </div>

              <div className="col-12 col-lg-7 offset-lg-1 col-xl-6 offset-xl-1 d-flex flex-row">
                <img className="" src="/content/QCGlobal/images/our_impact_icon.png" alt="Impact Icon" />
                <div className="flex-col ms-3">
                  <p className="display-5">2.1 Million</p>
                  <p className="h4">had access to safe drinking water and sanitation services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
      <Footer />
    </>
  );
}

export default QatarCharityCleanWater;