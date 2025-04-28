import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';

const SocialHousing = () => {
  const [donationType, setDonationType] = useState('1');
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
      image: "/category/L1.jpg",
      title: "Haddad Family – Lebanon",
      description: "Needs a safe home after losing theirs in the Beirut explosion.",
      descriptionMax: "After the Beirut port explosion, the Haddad family's apartment was destroyed. They have been living in a makeshift shelter ever since, exposed to cold and rain. With winter approaching, they are desperate for safe, permanent housing and support to rebuild their lives."
    },
    {
      image: "/category/L2.jpeg",
      title: "Fatou – Senegal",
      description: "Needs stable housing to raise her children after eviction.",
      descriptionMax: "Fatou is a single mother of three who was recently evicted after losing her job. With no family to rely on, she now lives in a temporary shack near the city. Her children are unable to attend school regularly, and they live in fear of being forced back onto the streets."
    },
    {
      image: "/category/L3.jpg",
      title: "Ahmed & Nadia – Tunisia",
      description: "Need home repairs to live safely and with dignity.",
      descriptionMax: "This elderly couple has lived in their home for over 40 years, but now the roof is caving in and the walls are cracked. With a fixed income barely covering food, they cannot afford repairs. They need support to restore their dignity and security through housing rehabilitation."
    },
    {
      image: "/category/L4.webp",
      title: "Rahim Family – Pakistan",
      description: "Urgently need long-term housing after flood displacement.",
      descriptionMax: "After being displaced by severe flooding, the Rahim family now resides in a temporary refugee camp. They lost everything, including their home and means of income. They are in urgent need of long-term housing solutions to begin rebuilding their life with dignity."
    },
    {
      image: "/category/L5.avif",
      title: "Zara – Morocco",
      description: "Needs affordable housing to support herself and her disabled brother.",
      descriptionMax: "Zara, a dedicated teacher, lost her home in a fire and now shares a garage with her disabled brother. She continues teaching but struggles to maintain a stable life. Support for affordable housing would allow her to live safely and continue helping her community."
    }
  ];

  // بيانات التطوع (Voluntary)
  const voluntaryItems = [
    {
      image: "/voluntary/sv1.jpg",
      title: "Temporary Shelters – Lebanon",
      description: "After the Beirut explosion, families who lost their homes receive temporary shelters made of durable materials.",
    },
    {
      image: "/voluntary/sv2.jpg",
      title: "Roof Repair Kits – Tunisia",
      description: "Roof repair kits, including tarps, nails, and waterproofing materials, are distributed to families in rural areas whose homes have been damaged by severe weather.",
    },
    {
      image: "/voluntary/sv3.png",
      title: "Home Renovation Program – Haiti",
      description: "A program offers financial and material support for the renovation of homes damaged by natural disasters. Volunteers work alongside homeowners to rebuild structures.",
    },
    {
      image: "/voluntary/sv4.jpg",
      title: "Affordable Housing Construction – India",
      description: "An NGO partners with local authorities to build affordable homes for families living in slums. These homes are constructed using sustainable materials and are equipped with basic amenities.",
    },
    {
      image: "/voluntary/sv5.jpg",
      title: "Legal Aid for Evicted Families – Ecuador",
      description: "In a rural area, a legal aid service helps families who have been evicted from their land or homes. The service provides free legal counseling.",
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
      <main className="main-banner bg-cover bg-cover-center text-white" style={{backgroundImage: 'url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Socialhousing-Banner.jpg)', backgroundPosition: '75%'}}>
      </main>
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Social-housing.png" alt="Social Housing Icon" />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{borderBottom: '1px solid #000000'}}>
                  Social Housing
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                As many as 1.6 billion people lack adequate housing.
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
              <p>International human rights law recognizes everyone's right to an adequate standard of living, including adequate housing.</p>
              <p>Unfortunately, more than 1.5 billion people still lack access to a place where they can live in security, peace and dignity and millions more lose their homes every year due to poverty and marginalization.</p>
              <p>At Qatar Charity, we believe that housing is a foundation from which other legal entitlements can be achieved, and that the lack thereof impedes the ability of vulnerable groups to access health, education and employment opportunities, further deepening inequalities and exclusion of vulnerable groups.</p>
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
                <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">Social Housing challenges</span></p>
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
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialhousing-M-left.jpg" alt="Housing Left" />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialhousing-M-right.jpg" alt="Housing Right" />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img className="col-12 mb-15" src="../../../content/QCGlobal/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img className="col-12" src="../../../content/QCGlobal/images/Socialhousing-M-bottom.jpg" alt="Housing Bottom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>• Ensuring that the targeted vulnerable groups have access to adequate and safe housing and basic services with a particular focus on those living in rural and underdeveloped areas.</p>
              <h1>Areas of Intervention</h1>
              <p>• Building housing units for vulnerable families.</p>
              <p>• Maintenance and renovation of housing units.</p>
              <p>• Building and expanding sanitation facilities and infrastructure.</p>
              <p>• Providing clean and sustainable energy sources for households.</p>
              <p>• innovative, adaptable and sustainable solutions in construction and building.</p>
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
              <p className="display-4 font-weight-medium text-uppercase"></p>
              <span className="text-primary h2"></span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="..." />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">30,000,000 $</h3>
                </div>
                <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="..." />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">260,000</h3>
                </div>
                <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="..." />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">30</h3>
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
              <img className="" src="/content/QCGlobal/images/our_impact_icon.png" alt="Impact Icon" />
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

      <section id="QCdo" className="pt-0 d-none">
        <main className="main-banner bg-cover bg-cover-center text-white" style={{backgroundImage: "url('https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Socialhousing-Bottom.jpg')", backgroundPosition: "75%"}}>
          <div className="container">
            <div className="col-12 col-md-8 offset-md-2 text-start text-lg-center pt-16">
              <button type="button" className="btn btn-lg btn-primary rounded-pill ml-6" onClick={() => window.location.href='https://www.qcharity.org/ar/qa/donation/generaldonationsearch?typeId=2&mostwaiting=&EnableSadaka=&EnableZakaa=&DonationsTypeId=0'}>
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

export default SocialHousing;