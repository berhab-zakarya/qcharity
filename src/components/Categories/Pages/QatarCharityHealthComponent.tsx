import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../sections/Footer';
import Header from '../../sections/Header';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';


const QatarCharityHealthComponent = () => {
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
      image: "/category/health/ch1.avif",
      title: "Omar – Gaza",
      description: "Needs life-saving heart surgery he cannot afford",
      descriptionMax: "Omar was born with a congenital heart defect that requires urgent surgery. Living in a conflict zone, his family cannot afford the travel or hospital costs. Each day without treatment brings more risk to his young life. With help, he could receive the lifesaving operation he needs."
    },
    {
      image: "/category/health/ch2.png",
      title: "Salma – Syria",
      description: "Urgently needs consistent access to insulin for diabetes treatment.",
      descriptionMax: "Salma is a 45-year-old mother displaced by war. She has suffered from diabetes for years but lost access to her medication when her town was destroyed. Without insulin, her health is rapidly deteriorating. She is in urgent need of medical support and consistent access to treatment."
    },
    {
      image: "/category/health/ch3.png",
      title: "Yassine – Algeria",
      description: "Requires spinal surgery to walk again and avoid financial ruin",
      descriptionMax: "Yassine, a hardworking taxi driver, was severely injured in a traffic accident. With no social coverage or savings, he cannot afford the spinal surgery that could help him walk again. His family now faces financial ruin, and Yassine’s only hope lies in receiving charitable medical assistance."
    },
    {
      image: "/category/health/ch4.jpg",
      title: "Lina – Afghanistan",
      description: "Needs medical care and nutrition to recover from malnutrition",
      descriptionMax: "Six-year-old Lina suffers from chronic malnutrition and respiratory problems. Her displaced family lives in a makeshift shelter with no heating or access to nutritious food. She needs pediatric care, medication, and proper nutrition to regain her health and enjoy a normal childhood."
    },
    {
      image: "/category/health/cs5.jpg",
      title: "Doumbia Twins – Ivory Coast",
      description: "Need neonatal equipment to survive after premature birth.",
      descriptionMax: "Born prematurely in a rural clinic, the Doumbia twins require constant neonatal care. Sadly, the local facility lacks incubators and oxygen. Their mother, already overwhelmed, cannot afford private care. Support is urgently needed to provide them with the essential medical equipment to survive."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/vh1.jpg",
      title: "Mobile Health Clinics – Gaza",
      description: "A mobile health clinic visits remote and underserved areas, providing essential medical services such as vaccinations, maternal care.",
    },
    {
      image: "/voluntary/vh2.jpg",
      title: "Medical Supplies – Syria",
      description: "Donations of essential medical supplies, including antibiotics, pain relievers, and bandages, are distributed to hospitals and clinics in war-torn areas.",
    },
    {
      image: "/voluntary/vh3.jpg",
      title: "Mental Health Support – Afghanistan",
      description: "An NGO offers psychological support and counseling services to displaced families suffering from trauma.",
    },
    {
      image: "/voluntary/vh4.jpg",
      title: "Emergency Vaccination Campaign – South Sudan",
      description: "In response to a disease outbreak, a vaccination campaign is organized to protect children from diseases such as measles and polio.",
    },
    {
      image: "/voluntary/vh5.jpg",
      title: "Medical Training for Community Health Workers - Congo",
      description: "A program is established to train local community health workers on essential healthcare skills, such as administering first aid, conducting health screenings.",
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
      <main className="main-banner bg-cover bg-cover-center text-white" style={{backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Health-Banner.jpg)", backgroundPosition: "75%"}}>
      </main>
      
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/1-Photo2021-03-01_08-14-15-AM.png" alt="Healthcare icon" />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{borderBottom: "1px solid #000000"}}>
                  Health and Nutrition
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                More than 1 billion people do not have access to quality health services.
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

      {/* Modal */}
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
              <p>Every day, 15,000 children under the age of 5 die from preventable and treatable diseases. Child mortality is only one of the many challenges faced by fragile communities in public health; Today, healthcare is all too often inaccessible because of poverty, marginalization, lack of primary healthcare facilities in addition to the frequent spread of infectious, endemic, and chronic diseases in underdeveloped regions.</p>
              <p>Qatar Charity works with local communities and international partners to tackle the root causes of poor health, and to bring basic health services closer to those who need them most.</p>
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
                  <p className="display-2 f-ptSerif">Takaful Charity's<span className="text-primary text-uppercase"> approach </span></p>
                  <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                    <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">health challenges</span></p>
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
                      <img className="col-12" src="../../../content/QCGlobal/images/M-left.jpg" alt="Health initiatives" />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img className="col-12" src="../../../content/QCGlobal/images/M-right.jpg" alt="Health initiatives" />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img className="col-12 mb-15" src="../../../content/QCGlobal/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img className="col-12" src="../../../content/QCGlobal/images/M-bottom.jpg" alt="Health initiatives" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>
                • Contributing to raising the coverage rate of primary health care services.<br />
                • Contributing to reducing the global maternal mortality rate.<br />
                • Reducing premature deaths from non-communicable diseases, especially cardiovascular disease, diabetes, and respiratory diseases.<br />
                • Contributing to reducing avoidable cases of vision impairment.<br />
                • Contributing to reducing the mortality rate among children under five years of age caused by acute and chronic malnutrition.<br />
                • Reducing the morbidity and mortality rate resulting from neglected tropical diseases and other endemic diseases, especially malaria and dengue fever.<br />
                • Improving the standards and quality of healthcare services<br />
                • Strengthening and expanding the medical capacity in underdeveloped and rural regions
              </p>

              <h1>Areas of Intervention</h1>
              <p>• Building health facilities according to the needs and health maps in the target countries</p>
              <p>• Establishing emergency obstetric services centers, especially in African and Asian countries.</p>
              <p>• Implementation of medical campaigns targeting non-communicable diseases, especially cardiovascular diseases</p>
              <p>• Implementation of medical and surgical camps dedicated to eye diseases.</p>
              <p>• Implementing nutrition programs and activities</p>
              <p>• Implementation of mobile medical clinics</p>
              <p>• Improving hygiene and sanitation facilities and providing medical supplies, medicines and vaccines</p>
            </div>
          </div>
        </div>
      </section>


         
           <CaseSpecial caseItems={caseItems} />


         <Voluntary items={voluntaryItems} />

      <section id="WSP">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="display-4 font-weight-medium text-uppercase">
                Health Nutrition projects
              </p>
              <span className="text-primary h2">
                (2014 - 2018)
              </span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="Statistics" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">40,000,000 $</h3>
                </div>
                <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="Statistics" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">290,000</h3>
                </div>
                <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="Statistics" />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">26</h3>
                </div>
                <p className="card-text mb-9 text-gray">through 30 field offices and implementing partners</p>
              </div>
            </div>
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
              <img className="" src="/content/QCGlobal/images/our_impact_icon.png" alt="Impact" />
              <div className="flex-col ms-3">
                <p className="display-5">2.1 Million</p>
                <p className="h4">had access to safe drinking water and sanitation services</p>
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

      

 

      <Footer/>
    </>
  );
};

export default QatarCharityHealthComponent;