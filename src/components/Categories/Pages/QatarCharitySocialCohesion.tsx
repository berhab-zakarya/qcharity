import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';

const TakafulCharitySocialCohesion = () => {
  const [donationType, setDonationType] = useState("1");
  const [paymentDetails, setPaymentDetails] = useState({
    date: '',
    ccpNumber: '',
    ccpCode: '',
    paymentType: '',
    amount: ''
  });
  const [showToast, setShowToast] = useState(false);

  const caseItems = [
    {
      image: "/category/social_engagement_cas1.jpg",
      title: "Orphan Without Support After the Death of His Parents",
      description: "An orphaned child facing psychological distress and neglect due to his grandmother's poverty.",
      descriptionMax: "A 10-year-old child lost both of his parents in a tragic accident. He is currently living with his elderly grandmother, who has no resources to meet his needs. This situation puts him at great risk of school abandonment and social drift."
    },
    {
      image: "/category/social_engagement_cas2.jpg",
      title: "A Family Living in Unhygienic Housing",
      description: "A family of six lives in a collapsing tin shack without electricity or clean water, enduring harsh weather year-round.",
      descriptionMax: "A family consisting of a father, mother, and four children lives in a tin shack that is at risk of collapsing. The house has no electricity or potable water, and the family members endure extreme weather conditions, both in winter and summer."
    },
    {
      image: "/category/social_engagement_cas3.jpg",
      title: "Divorced Mother Living Under Threat",
      description: "A divorced mother, fleeing abuse, lives in temporary housing with her children, without income and facing social stigma.",
      descriptionMax: "A divorced mother, who was a victim of domestic violence, lives in temporary housing with her children after fleeing her marital home. She has no income and suffers from social marginalization and stigma."
    },
    {
      image: "/category/social_engagement_cas4.jpg",
      title: "Elderly Person Living in Total Isolation",
      description: "An elderly, chronically ill man lives alone with no family and is unable to care for himself.",
      descriptionMax: "An elderly man in his sixties lives alone, suffering from chronic illnesses, with no family support or resources to cover healthcare costs. He needs continuous medical care, social support, or assistance with daily tasks."
    },
    {
      image: "/category/social_engagement_cas5.jpg",
      title: "University Student Struggling with Poverty and Isolation",
      description: "A gifted student from a remote area endures extreme poverty and hunger in the city without any family support.",
      descriptionMax: "A brilliant young man from a mountainous region suffers from the high cost of living and rent in the city, receiving no support from his poor family, and living with only one meal per day."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/social_engagement vac1.jpg",
      title: "Wheelchair Distribution",
      description: "A humanitarian campaign provided wheelchairs to people with disabilities in isolated villages.",
    },
    {
      image: "/voluntary/social_engagement vac2.jpg",
      title: "Winter Clothes Distribution",
      description: "Young people collected donations to buy and distribute warm clothes to children in disadvantaged neighborhoods.",
    },
    {
      image: "/voluntary/social_engagement vac3.jpg",
      title: "Orphan Sponsorship",
      description: "A benefactor covers the monthly expenses for three orphans in a popular neighborhood.",
    },
    {
      image: "/voluntary/social_engagement vac4.jpg",
      title: "Scholarships for Students",
      description: "A businessman funded a full school year for 10 bright students from remote areas.",
    },
    {
      image: "/voluntary/social_engagement vac5.jpg",
      title: "Toy Distribution for Orphans",
      description: "Young people organized a campaign to buy toys and distribute them in an orphanage during Eid.",
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
      <Header/>
      <main className="main-banner bg-cover bg-cover-center text-white" style={{ backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Socialcohesion-Bnner.jpg)", backgroundPosition: "75%" }}>
      </main>
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Social-cohesion.png" alt="Social cohesion icon" />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{ borderBottom: "1px solid #000000" }}>
                  Social Cohesion
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                Social cohesion lies at the heart of social development.
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

      <section>
        <div className="container mb-13">
          <div className="row mt-6 justify-content-between">
            <div className="col-xl-3 col-sm-12">
              <img alt="" className="pb-7" src="../../../content/QCGlobal/images/Challeng-Icon.svg" />
              <p>Challenges</p>
            </div>

            <div className="col-sm-12 col-xl-6 mt-1">
              <p>Social cohesion lies at the heart of social development where strong, cohesive societies are built around universal values, reconciliation and tolerance. Unfortunately, in societies where the "social bond" that cements individuals together is eroded, intolerance, inequalities, racism and extremism thrive and ultimately lead to conflicts, violence and crime.</p>
              <p>At Takaful Charity, we believe in the importance of economic, societal and educational means that provide a space for bringing divided groups together and addressing priority community needs, particularly in post-conflict settings in the context of peace-building.</p>
            </div>
          </div>
        </div>
        <hr className="pulits-hr my-15" />
        <div className="container">
        </div>
      </section>

      <section id="QCdo">
        <div className="container">
          <div className="row fw-bold-xs">
            <div className="col-12">
              <p className="display-2 f-ptSerif">Takaful Charity's <span className="text-primary text-uppercase">approach</span></p>
              <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">social cohesion challenges</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pic-clean">
        <div className="primary-circle">
        </div>
        <div className="container right-gray mt-15 pb-15">
          <div className="row">
            <div className="container right-gray mt-10 pb-15">
              <div className="row">
                <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                  <div className="row row-cols-2">
                    <div className="col-xl-4 col-6 mt-n18">
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialcohesion-M-left.jpg" alt="Social cohesion" />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialcohesion-M-right.jpg" alt="Social cohesion" />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img className="col-12 mb-15" src="../../../content/QCGlobal/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialcohesion-M-bottom.jpg" alt="Social cohesion" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>• Improving access to safe and peaceful environments through administrative support and administrative reconstruction.<br />
                • Supporting post-conflict reconstruction as a tool to support peacebuilding efforts.<br />
                • Reducing crime and violent extremism.</p>

              <h1>Areas of Intervention</h1>
              <p>• Rehabilitation and building of infrastructure and social housing.</p>
              <p>• Economic empowerment through income generating projects to promote voluntary return of refugees and IDPs.</p>
              <p>• Sports-based initiatives as a mean to promote co-existence and social cohesion.</p>
              <p>• Capacity building on different professional levels to support rehabilitation efforts.</p>
              <p>• Promoting strong institutions through the support of public judicial and security systems.</p>
              <p>• Communities.</p>
            </div>
          </div>
        </div>
      </section>


      <CaseSpecial caseItems={caseItems} />

      <Voluntary items={voluntaryItems} />
      <section id="WSP">
        <div className="container">
          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
          </div>
        </div>
      </section>

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
              <img className="" src="/content/QCGlobal/images/our_impact_icon.png" alt="Impact icon" />
              <div className="flex-col ms-3">
                <p className="display-5">2.1 Million</p>
                <p className="h4">had access to safe drinking water and sanitation services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .spotlight .pulits-hr {
              width: 100%;
          }
          .spotlight .pulits-hr:after {
              left: 100%;
          }
        `}
      </style>

      <section>
        <div className="container spotlight position-relative">
          <hr className="pulits-hr mb-17" />

          <div className="row">
            <div className="col-12 col-lg-4 col-xl-5 offset-0">
              <h1 className="lh-base display-4">
              </h1>
              <div className="w-100"></div>
              <img src="../../../content/QCGlobal/icons/Path-16213.svg" alt="" className="" />
            </div>
            <p className="col-12 col-lg-6 offset-lg-2 col-xl-5 offset-xl-2 text-primary h2 f-ptSerif fst-italic">
            </p>

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

      <section id="QCdo" className="pt-0 d-none">
        <main className="main-banner bg-cover bg-cover-center text-white" style={{ backgroundImage: "url('https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Socialcohesion-Bottom.jpg')", backgroundPosition: "75%" }}>
          <div className="container">
            <div className="col-12 col-md-8 offset-md-2 text-start text-lg-center pt-16">
              <button 
                type="button" 
                className="btn btn-lg btn-primary rounded-pill ml-6" 
                onClick={() => window.location.href = 'https://www.qcharity.org/ar/dz/donation/generaldonationsearch?typeId=2&mostwaiting=&EnableSadaka=&EnableZakaa=&DonationsTypeId=0'}
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
          <div className="row justify-content-between">
          </div>
        </div>
      </section>

    

      <Footer/>
    </>
  );
};

export default TakafulCharitySocialCohesion;