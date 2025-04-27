import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import CaseSpecial from '../CaseSpecial';
import Voluntary from '../Voluntary';

const EconomicEmpowerment = () => {
  const [donationType, setDonationType] = useState("1");
  const [paymentDetails, setPaymentDetails] = useState({
    date: '',
    ccpNumber: '',
    ccpCode: '',
    paymentType: '',
    amount: ''
  });
  const [showToast, setShowToast] = useState(false);

  // بيانات الحالات الخاصة
  const caseItems = [
    {
      
      image: "/category/economic_empowerment_cas1.jpg",
      title: "A divorced woman from a rural area",
      description: "A divorced woman from a rural area needs support to improve her economic situation.",
      descriptionMax: "A divorced woman from a rural area struggles with limited job opportunities and daily sustenance, needing vocational training and small financial support to start a business and improve her economic situation."
    },
    {
      image: "/category/economic_empowerment_cas2.jpg",
      title: "A young man from a poor family",
      description: "A young man from a poor family needs financial support and training to expand his handicraft business.",
      descriptionMax: "A young man in his twenties, raised in a poor family, couldn't continue his education due to financial issues. Despite excelling in handicrafts, he struggles to get the tools needed to expand his business. He requires financial support and training to develop his skills."
    },
    {
      image: "/category/economic_empowerment_cas3.jpg",
      title: "Farmers in remote areas",
      description: "Farmers in remote areas need funding and training to access modern equipment and increase agricultural productivity.",
      descriptionMax: "Farmers in remote mountainous areas lack the resources and modern technology to increase their agricultural production. Despite their potential to boost productivity, they face financial and technical challenges. They need small funding to purchase modern equipment and training in modern farming techniques."
    },
    {
      image: "/category/economic_empowerment_cas4.jpg",
      title: "An elderly woman lives alone",
      description: "An elderly woman in a small town needs social support and training to earn a sustainable income.",
      descriptionMax: "An elderly woman lives alone in a small town, without a stable income after retiring from her modest job. She faces social and economic marginalization. She needs social support to enhance her ability to earn additional income, such as training in handicrafts or new technologies to achieve a sustainable income."
    },
    {
      image: "/category/economic_empowerment_cas5.jpg",
      title: "Empowering Young Women in Poor Communities Through Entrepreneurship",
      description: "Young women in poor communities need training and resources to start businesses.",
      descriptionMax: "A group of young women living in poor communities lack job opportunities or training. Despite their limited education, they are eager to learn new skills in areas such as graphic design or digital marketing, but face difficulties in accessing the necessary resources. They need training opportunities and guidance to secure independent jobs or start their own businesses."
    }
  ];

  const voluntaryItems = [
    {
      image: "/voluntary/economic_empowerment vac1.jpg",
      title: "Funding for Small Projects",
      description: "Charity gave microloans to rural women to support small businesses and boost independence.",
    },
    {
      image: "/voluntary/economic_empowerment vac2.jpg",
      title: "Support for Vocational Training",
      description: "Non-profit funded training to boost jobs for poor women and youth.",
    },
    {
      image: "/voluntary/economic_empowerment vac3.jpg",
      title: "Funding for Girls' Education",
      description: "Company gave scholarships to empower remote-area girls through education.",
    },
    {
      image: "/voluntary/economic_empowerment vac4.jpg",
      title: "Support for Agricultural Projects",
      description: "Charity gave tools to boost remote farmers' output.",
    },
    {
      image: "/voluntary/economic_empowerment vac5.jpg",
      title: "Support for Young Entrepreneurs",
      description: "Investors helped poor youth launch businesses.",
    },
  ];

  // تعديل زر التبرع ليظهر التوست عند التأكيد
  const handleDonationConfirm = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
    // يمكنك إضافة منطق إغلاق المودال هنا إذا لزم الأمر
    const modal = window.document.getElementById('exampleModal');
    if (modal) {
      (window as any).bootstrap?.Modal.getOrCreateInstance(modal).hide();
    }
  };

  return (
    <>
      <Header />
      <main className="main-banner bg-cover bg-cover-center text-white" style={{ backgroundImage: "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Economic-Banner.jpg)", backgroundPosition: "75%" }}>
      </main>

      {/* Header Section */}
      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img className="mt-11 img-size-icon" src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Economic-Empowerment.png" alt="Economic Empowerment" />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1 className="display-4 text-uppercase fw-bold p-9 px-0" style={{ borderBottom: "1px solid #000000" }}>
                  Economic Empowerment
                </h1>
              </div>
            </div>
          </div>
          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                The OECD defines inclusive growth as economic growth that is distributed fairly across society and creates opportunities for all.
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
              <img alt="" className="pb-7" src="../../../content/QCGlobal/images/Challeng-Icon.svg" />
              <p>Challenges</p>
            </div>

            <div className="col-sm-12 col-xl-6 mt-1">
              <p>Unemployment and underemployment lies at the core of poverty and today, more than 736 million people live below the international poverty line.</p>
              <p>Poverty manifestations include hunger and malnutrition, limited access to education and basic services, social discrimination and exclusion, as well as the lack of participation in decision-making and in the global economic processes.</p>
              <p>The Covid-19 pandemic exacerbated what already was a catastrophic economic outlook for millions and affected 81% of employers pushing millions of workers into unemployment, underemployment and working poverty.</p>
              <p>While vulnerable populations have long been passive recipients of aid, further exacerbating their economic uncertainty, Qatar Charity envisions empowered communities with a self-sustained productive capacity and a sustainable earning power.</p>
            </div>
          </div>
        </div>
        <hr className="pulits-hr my-15" />
        <div className="container"></div>
      </section>

      {/* Approach Section */}
      <section id="QCdo">
        <div className="container">
          <div className="row fw-bold-xs">
            <div className="col-12">
              <div className="row fw-bold-xs">
                <div className="col-12">
                  <p className="display-2 f-ptSerif">Qatar Charity's<span className="text-primary text-uppercase"> approach </span></p>
                  <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                    <p className="display-2 f-ptSerif">to the global <span className="text-yellow-background">poverty challenges</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section id="pic-clean">
        <div className="primary-circle"></div>
        <div className="container right-gray mt-15 pb-15">
          <div className="row">
            <div className="container right-gray mt-10 pb-15">
              <div className="row">
                <div className="col-xl-9 offset-xl-3 col-md-12 col-12">
                  <div className="row row-cols-2">
                    <div className="col-xl-4 col-6 mt-n18">
                      <img className="col-12" src="../../../content/QCGlobal/images/Economic-M-left.jpg" alt="Economic image left" />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img className="col-12" src="../../../content/QCGlobal/images/Economic-M-right.jpg" alt="Economic image right" />
                    </div>
                  </div>
                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img className="col-12 mb-15" src="../../../content/QCGlobal/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img className="col-12" src="../../../content/QCGlobal/images/Economic-M-bottom.jpg" alt="Economic image bottom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>
                • Reducing poverty through access to sustainable income means.<br />
                • Reducing inequalities in employment opportunities.<br />
                • Improving the level of livelihood of those affected by poverty.<br />
                • Providing access to basic.
              </p>

              <h1>Areas of Intervention</h1>
              <p>• Agricultural production projects.</p>
              <p>• Livestock production projects.</p>
              <p>• Financial grants.</p>
              <p>• Home-based employment opportunities for women.</p>
              <p>• Providing means of production (tractors, machines, equipment, water access...).</p>
              <p>• Revolving loans.</p>
              <p>• Small-scale income generating projects.</p>
              <p>• Sewing and embroidery projects.</p>
              <p>• Training and capacity building.</p>
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
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png" alt="..." />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">5,800,000 $</h3>
                </div>
                <p className="card-text mb-9 text-gray">Expenditure (in USD)</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png" alt="..." />
                <div className="card-body">
                  <h3 className="card-title display-5 fw-bold f-ptSerif">31,000</h3>
                </div>
                <p className="card-text mb-9 text-gray">children, women, people with disabilities, elderly and vulnerable communities</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center pt-15">
                <img className="pb-7" src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png" alt="..." />
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
              <img className="" src="/content/QCGlobal/images/our_impact_icon.png" alt="Impact icon" />
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

      {/* Bottom Banner (Hidden) */}
      <section id="QCdo" className="pt-0 d-none">
        <main className="main-banner bg-cover bg-cover-center text-white" style={{ backgroundImage: "url('https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Economic-Bottom.jpg')", backgroundPosition: "75%" }}>
          <div className="container">
            <div className="col-12 col-md-8 offset-md-2 text-start text-lg-center pt-16">
              <button type="button" className="btn btn-lg btn-primary rounded-pill ml-6">
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
      
      <Footer />
    </>
  );
};

export default EconomicEmpowerment;