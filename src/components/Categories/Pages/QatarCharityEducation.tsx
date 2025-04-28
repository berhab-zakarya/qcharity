import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';

const QatarCharityEducation = () => {
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
      image: "/category/education_cas1.jpg",
      title: "Orphaned Child's Education Struggle",
      description: "An orphaned child living with his grandmother lacks resources to continue his education.",
      descriptionMax: "An orphaned child, having lost both his mother and father, lives with his elderly grandmother. He shows a strong desire to learn and succeed in school, but he is unable to afford school supplies and proper clothing."
    },
    {
      image: "/category/education_cas2.jpg",
      title: "Girl with Disability Needs Educational Support",
      description: "A 10-year-old girl with paralysis needs support and transport for her education.",
      descriptionMax: "A 10-year-old girl with partial paralysis struggles with mobility and school access but has excellent intellectual abilities. She needs daily support and adapted transportation to continue her education."
    },
    {
      image: "/category/education_cas3.jpg",
      title: "An Unemployed Father with Three School-Aged Children",
      description: "An unemployed father struggles to support his children's education.",
      descriptionMax: "A father, unemployed due to health issues, struggles to support his three children in school. They lack transportation, schoolbooks, and tutoring. Urgent Needs: Monthly financial aid for rent, utilities, and medication. Coverage for school transportation and textbooks. Regular food assistance."
    },
    {
      image: "/category/education_cas4.jpg",
      title: "Final-Year Student Facing Risk of Dropping Out",
      description: "Rim, a dedicated medical student, faces eviction and dropping out due to financial struggles.",
      descriptionMax: "Rim, a top medical student, faces financial hardship, unable to afford housing, textbooks, and transportation. She risks eviction and dropping out, despite her dedication to becoming a pediatrician."
    },
    {
      image: "/category/education_cas5.jpg",
      title: "Child in Remote Area with No School Nearby",
      description: "Youssef, 11, walks 10 km daily to school and needs transportation and winter clothing.",
      descriptionMax: "Youssef, an 11-year-old in a remote village, walks 10 km daily to school, facing harsh weather and exhaustion. He needs transportation, winter clothing, and access to a nearby school or boarding facility."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/education_vac1.png",
      title: "Donation of School Bags",
      description: "50 school bags with supplies were donated to rural primary school students.",
    },
    {
      image: "/voluntary/education-vac2.jpg",
      title: "New Desks and Chairs",
      description: "Donor provided desks and chairs to overcrowded classrooms for better learning.",
    },
    {
      image: "/voluntary/education-vac3.jpg",
      title: "Free Tutoring for High School Students",
      description: "Retired teachers organized “Hope Classes” on weekends for high school students.",
    },
    {
      image: "/voluntary/education-vac4.jpg",
      title: "Support for Remote Middle School Students",
      description: "Association covered accommodation and meals for 5 girls studying 30 km away.",
    },
    {
      image: "/voluntary/education-vac5.jpg",
      title: "Digital Tablets for Remote Learning",
      description: "Donor provided 10 tablets with internet access to students for online learning.",
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
    <Header/>
    <div className="qatar-charity-container">
      {/* Main Banner */}
      <main className="main-banner bg-cover bg-cover-center text-white" 
            style={{backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Education-Banner.jpg)", 
                   backgroundPosition: "75%"}}>
      </main>
      
      {/* Header Section */}
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/1-Photo2021-03-01_08-14-34-AM.png" alt="Education icon" />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{borderBottom: "1px solid #000000"}}>
                  Education
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                Globally, about 258 million children and youth of school age are out of school.
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

      {/* Challenges Section */}
      <section>
        <div className="container mb-13">
          <div className="row mt-6 justify-content-between">
            <div className="col-xl-3 col-sm-12">
              <img alt="Challenges icon" className="pb-7" src="/images/Challeng-Icon.svg" />
              <p>Challenges</p>
            </div>

            <div className="col-sm-12 col-xl-6 mt-1">
              <p>Quality education is one of the key principles underpinning the 2030 agenda. Sadly, nearly 300 million children around the world are deprived of this fundamental right.</p>
              <p>The education challenge is becoming increasingly multifaceted, with many political and socio-economic factors contributing to its complexity: conflict is a major barrier with about 40% of out-of-school children living in conflict-affected countries; lack of education facilities, unqualified teachers, gender inequality, child labor and an unsafe learning environment all add to the misfortune of an entire generation, exposing hundreds of thousands of young girls and boys to all risks of abuse and harm. At Qatar Charity, we make education a priority to break the ongoing cycle of poverty.</p>
              <p>Our programs and projects provide empowering learning environments for children and young adults and increase their chance of a better future.</p>
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
                    <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">education challenges</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Objectives Section */}
      <section id="pic-clean">
        <div className="primary-circle"></div>
        <div className="container right-gray mt-15 pb-15">
          <div className="row">
            <div className="container right-gray mt-10 pb-15">
              <div className="row">
                <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                  <div className="row row-cols-2">
                    <div className="col-xl-4 col-6 mt-n18">
                      <img className="col-12" src="/images/Education-M-left.jpg" alt="Education image" />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img className="col-12" src="/images/Education-M-right.jpg" alt="Education image" />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img className="col-12 mb-15" src="/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img className="col-12" src="/images/Education-M-bottom.jpg" alt="Education image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>• Ensuring that girls and boys complete equitable and quality education<br />
              • Reducing illiteracy rate in fragile communities<br />
              • Building local capacity in educational programs<br />
              • Promoting social cohesion<br />
              • Eliminating gender disparities in education and ensuring equal access to education<br />
              • Developing capacity-building frameworks for teachers and trainers</p>

              <h1>Areas of Intervention</h1>
              <p>• Building, furnishing, equipping, and maintaining primary and secondary schools.</p>
              <p>• Delivering teacher training programmes.</p>
              <p>• Establishing vocational training centers.</p>
              <p>• Providing housing for students in remote areas.</p>
              <p>• Providing livelihoods for families as incentives to keep children in schools and out of labor.</p>
              <p>• Providing scholarships and sponsorships.</p>
              <p>• Providing schools with water and sanitation services.</p>
            </div>
          </div>
        </div>
      </section>


      <CaseSpecial caseItems={caseItems} />

       
<Voluntary items={voluntaryItems} />

      {/* Education Projects Statistics Section */}
      <section id="WSP">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="display-4 font-weight-medium text-uppercase">
                Education projects
              </p>
              <span className="text-primary h2">
                (2014 - 2018)
              </span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="Expenditure" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">46,000,000 $</h3>
                </div>
                <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="Beneficiaries" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">480,000</h3>
                </div>
                <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="Countries" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">35</h3>
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
              <img className="" src="/images/our_impact_icon.png" alt="Impact icon" />
              <div className="flex-col ms-3">
                <p className="display-5">2.1 Million</p>
                <p className="h4">had access to safe drinking water and sanitation services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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


      <section>
        <div className="container spotlight position-relative">
          <hr className="pulits-hr mb-17" />
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-5 offset-0">
              <h1 className="lh-base display-4"></h1>
              <div className="w-100"></div>
              <img src="../../../content/QCGlobal/icons/Path-16213.svg" alt="" className="" />
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

      {/* Footer Section with Hr */}
      <section>
        <hr className="pulits-hr mb-17" />
      </section>
    </div>
    <Footer/>
    </>
    
  );
};

export default QatarCharityEducation;