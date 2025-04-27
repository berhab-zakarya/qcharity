import { Toast, ToastContainer } from "react-bootstrap";
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';
import { useState } from "react";

function FoodSecurity() {
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
      image: "/category/food_security cas1.jpg",
      title: "Farming Family in Off-Harvest Crisis",
      description: "A farming family faces food shortages and needs aid and agricultural support.",
      descriptionMax: "A poor family in a remote village struggles with food shortages during the off-harvest season. They need regular food aid, seeds, and agricultural support to improve self-sufficiency."
    },
    {
      image: "/category/food_security cas2.jpg",
      title: "Elderly People Isolated Without Food Resources",
      description: "Elderly couple in poverty needs regular food, prepared meals, and healthcare support.",
      descriptionMax: "An elderly couple in a poor neighborhood suffers from limited diet and health issues, relying on occasional charity. They need regular food deliveries, prepared meals, and healthcare support."
    },
    {
      image: "/category/food_security cas3.jpg",
      title: "Day Laborers Family Impacted by Health Crisis",
      description: "A family of five faces income loss, relying on aid for food, supplies, and income training.",
      descriptionMax: "A family of five faces reduced income due to the health crisis and struggles to meet basic food needs. They rely on community aid and need emergency food, school supplies for the children, and income-generating training."
    },
    {
      image: "/category/food_security cas4.jpg",
      title: "Internally Displaced Persons Camp",
      description: "Provision of food supplies to displaced families.",
      descriptionMax: "A group of families displaced due to conflict lives in a refugee camp where conditions are harsh. The residents of the camp lack access to basic services (schools, hospitals, etc.), and the greatest challenge they face is the lack of food. They rely on temporary food donations to survive."
    },
    {
      image: "/category/food_security cas5.jpg",
      title: "Food-Insecure Students",
      description: "Food aid for university students facing financial difficulties to cover their essential needs.",
      descriptionMax: "Students living in a large city, far from their families, face significant financial difficulties. Between tuition fees, rent, and daily expenses, the available resources do not allow them to eat healthily and maintain a balanced diet. They often consume low-nutrient meals due to a lack of means."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/food_security vac1.jpg",
      title: "Food Parcel Distribution",
      description: "Monthly distribution of 100 food parcels to impoverished families.",
    },
    {
      image: "/voluntary/food_security vac2.jpg",
      title: "Seeds and Tools Donation",
      description: "Farmer donates seeds and tools to 15 rural families.",
    },
    {
      image: "/voluntary/food_security vac3.jpg",
      title: "Ramadan Meal Bags",
      description: "Youth distribute 200+ meal bags to fasting individuals during Ramadan.",
    },
    {
      image: "/voluntary/food_security vac4.jpg",
      title: "Food Parcels for Displaced Families",
      description: "Weekly food parcel donations for displaced families.",
    },
    {
      image: "/voluntary/food_security vac5.jpg",
      title: "Support for Charitable Bakeries",
      description: "Citizen provides flour and yeast to bakeries offering free bread.",
    }
  ];

  // دالة تأكيد التبرع
  const handleDonationConfirm = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
    // إغلاق المودال إذا لزم الأمر
    const modal = window.document.getElementById('donationModal');
    if (modal) {
      (window as any).bootstrap?.Modal.getOrCreateInstance(modal).hide();
    }
  };

  return (
    <>
      <Header />
      <div className="food-security">
        {/* Banner */}
        <main className="main-banner bg-cover bg-cover-center text-white" 
          style={{backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/FoodSecurity-Banner.jpg)", backgroundPosition: "75%"}}>
        </main>
        
        <div id="QCdo" className="container mt-n17">
          <div className="container center">
            <div className="col-12 left bg-orange">
              <div className="row justify-content-between">
                <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                  <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Food-Security.png" alt="Food Security Icon" />
                </div>
                <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                  <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{borderBottom: "1px solid #000000"}}>
                    Food Security
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 left bg-orange">
              <div className="row bg-orange">
                <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                  25.9% of the total population suffers from severe and moderate food insecurity.  
                </div>
                <div className="col-10 col-md-4 col-xl-2 p-9 pt-0 p-md-0">
                  <button type="button" className="btn btn-outline-dark rounded-pill mt-md-13" data-bs-toggle="modal" data-bs-target="#donationModal">
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
        <div className="modal fade" id="donationModal" tabIndex={-1} aria-labelledby="donationModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="donationModalLabel">Donation Details</h5>
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
                <img alt="" className="pb-7" src="../content/QCGlobal/images/Challeng-Icon.svg" />
                <p>Challenges</p>
              </div>

              <div className="col-sm-12 col-xl-6 mt-1">
                <p>Sustainable and resilient food systems are the main foundation for healthier societies.</p>
                <p>Food security is achieved when all individuals in a particular group have access to quality, sustainable food in sufficient quantity to meet their basic needs. Unfortunately, global food security is bending under never-ending demographical, socio-economic, natural and geopolitical pressures such as the world population growth, scarcity of water and land resources and climate change.</p>
                <p>As a consequence, the number of people affected by hunger continues to rise since 2014 while food security amongst most vulnerable population groups is expected to erode further due to the socio-economic and health impacts of the COVID-19 pandemic. Qatar Charity works with partners and communities to address the immediate concerns of food insecurity and to build lasting solutions to provide vulnerable populations with the physical and economic access to adequate, nutritious, safe, and culturally appropriate foods.</p>
              </div>
            </div>
          </div>
          <hr className="pulits-hr my-15" />
          <div className="container"></div>
        </section>

        {/* Qatar Charity's Approach Section */}
        <section id="QCdo">
          <div className="container">
            <div className="row fw-bold-xs">
              <div className="col-12">
                <div className="row fw-bold-xs">
                  <div className="col-12">
                    <p className="display-2 f-ptSerif">Qatar Charity's<span className="text-primary text-uppercase"> approach </span></p>
                    <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                      <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">food challenges</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images and Objectives Section */}
        <section id="pic-clean">
          <div className="primary-circle"></div>
          <div className="container right-gray mt-15 pb-15">
            <div className="row">
              <div className="container right-gray mt-10 pb-15">
                <div className="row">
                  <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                    <div className="row row-cols-2">
                      <div className="col-xl-4 col-6 mt-n18">
                        <img className="col-12" src="../content/QCGlobal/images/FoodSecurity-M-left.jpg" alt="Food Security" />
                      </div>
                      <div className="col-xl-3 col-6 mt-n15 mb-8">
                        <img className="col-12" src="../content/QCGlobal/images/FoodSecurity-M-right.jpg" alt="Food Security" />
                      </div>
                    </div>
                    <div className="row row-cols-2">
                      <div className="col-xl-2 col-4 mt-n10">
                        <img className="col-12 mb-15" src="../content/QCGlobal/images/Arrow.png" alt="Arrow" />
                      </div>
                      <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                        <img className="col-12" src="../content/QCGlobal/images/FoodSecurity-M-bottom.jpg" alt="Food Security" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 offset-xl-3 col-xl-7">
                <h1>Our objectives</h1>
                <p>• Supporting sustainable access to food productions systems.<br />
                • Promoting food security best practices.<br />
                • Reducing food waste.</p>

                <h1>Areas of Intervention</h1>
                <p>• Revolving Loan Funds.</p>
                <p>• Reclamation and rehabilitation of agricultural lands.</p>
                <p>• Supporting livestock growth.</p>
                <p>• Domestic poultry farming projects.</p>
                <p>• Fishery development.</p>
                <p>• Beeking projects for honey production.</p>
                <p>• Rehabilitation of farms.</p>
                <p>• Equipping local farmers with seeds, fertilizers and equipment.</p>
                <p>• Food assistance distribution.</p>
                <p>• Income generating activities of small-scale food production.</p>
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
                <p className="display-4 font-weight-medium text-uppercase"></p>
                <span className="text-primary h2"></span>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="Expenditure" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">48,000,000 $</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
                </div>
              </div>
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="Beneficiaries" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">6,500,000</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
                </div>
              </div>
              <div className="col">
                <div className="text-center pt-15">
                  <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="Field Offices" />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">32</h3>
                  </div>
                  <p className="card-text mb-9 text-gray">through 30 field offices and implementing partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
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

        {/* Spotlight Section */}
        <section>
          <div className="container spotlight position-relative">
            <hr className="pulits-hr mb-17" />
            <div className="row">
              <div className="col-12 col-lg-4 col-xl-5 offset-0">
                <h1 className="lh-base display-4"></h1>
                <div className="w-100"></div>
                <img src="../content/QCGlobal/icons/Path-16213.svg" alt="" className="" />
              </div>
              <p className="col-12 col-lg-6 offset-lg-2 col-xl-5 offset-xl-2 text-primary h2 f-ptSerif fst-italic"></p>
              <div className="text-center mt-10">
                <img className="col-12" src="/content/QCGlobal/images/spotlight_global_ph.png" alt="Spotlight" />
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

        {/* Final CTA Section (hidden) */}
        <section id="QCdo" className="pt-0 d-none">
          <main className="main-banner bg-cover bg-cover-center text-white" style={{backgroundImage: "url('https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/FoodSecurity-Bottom.jpg')", backgroundPosition: "75%"}}>
            <div className="container">
              <div className="col-12 col-md-8 offset-md-2 text-start text-lg-center pt-16">
                <button type="button" className="btn btn-lg btn-primary rounded-pill ml-6" onClick={() => window.location.href='https://www.qcharity.org/ar/qa/donation/generaldonationsearch?typeId=2&mostwaiting=&EnableSadaka=&EnableZakaa=&DonationsTypeId=0'}>
                  Donate Now
                </button>
              </div>
            </div>
          </main>
        </section>

        {/* Final Section */}
        <section>
          <hr className="pulits-hr mb-17" />
          <div className="container">
            <div className="row justify-content-between"></div>
          </div>
        </section>

       
      
      </div>
      <Footer />
    </>
  );
}

export default FoodSecurity;