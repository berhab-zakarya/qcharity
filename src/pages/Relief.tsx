import React, { useEffect } from 'react';

const Relief = () => {
  useEffect(() => {
    // Carousel functionality
    const handleCarousel = () => {
      const multiCarousel = document.querySelector('.MultiCarousel');
      if (!multiCarousel) return;
      
      const itemsWidth = multiCarousel.querySelectorAll('.item').length * 300;
      const innerWidth = multiCarousel.querySelector('.MultiCarousel-inner').offsetWidth;
      
      document.querySelector('.leftLst').addEventListener('click', () => {
        const leftPos = document.querySelector('.MultiCarousel-inner').scrollLeft;
        document.querySelector('.MultiCarousel-inner').scrollLeft = leftPos - 300;
      });
      
      document.querySelector('.rightLst').addEventListener('click', () => {
        const leftPos = document.querySelector('.MultiCarousel-inner').scrollLeft;
        document.querySelector('.MultiCarousel-inner').scrollLeft = leftPos + 300;
      });
    };

    // Initialize carousel after component mounts
    setTimeout(handleCarousel, 500);
  }, []);

  return (
    <>
      <main className="urgentRelief main-banner bg-cover bg-cover-center px-xxl-10 px-xl-5 text-white overflow-hidden" style={{backgroundImage: "url('/images/qcharity/2025-03-25_10-56-23-AM.jpg')"}}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 col-lg-10 offset-lg-1 align-self-end text-center mt-12">
              <div className="col-10 offset-1 mb-13">
                <div className="urgentRelief-circle rounded-circle mx-auto d-flex align-items-center justify-content-center text-center mb-0 fw-medium">
                  Urgent
                  <br />
                  Relief
                </div>
              </div>
              <h1 className="display-1 text-uppercase fw-bolder">
                Labbeh Gaza
              </h1>
              <h2 className="mt-4 fw-medium">
                Together, We Restore Hope 
              </h2>
              <a className="btn btn-lg btn-light rounded-pill mt-7 mt-lg-9 mt-xl-10 px-8" href="https://qcharity.org/en/global/campaign?CampaignId=760">
                Donate Now
              </a>
            </div>
            <div className="col-12 align-self-end mb-6">
              <p className="small text-center">
                LNO  : 2024
              </p>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h1 className="display-4 text-uppercase">
                Qatar charity
              </h1>
              <h1 className="display-5 fw-normal">
                responds to global disasters and crises
              </h1>
              <div className="w-100 mt-3"></div>
              <img src="/images/qcharity/icons/Path-16213.svg" alt="" className="" />
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 col-xl-5 offset-xl-2">
              <h4 className="f-ptSerif fst-italic mt-10 mt-lg-0">
                <span className="text-primary">Qatar Charity</span> is often one of the first responders to international emergencies. With a 3-decade-long track record of emergency response and disaster relief in
              </h4>
              <div className="col-12 mt-5">
                <h1 className="display-4 lh-1 text-primary f-spectral fst-italic fw-bold mb-0" style={{fontSize: "60px"}}>
                  70
                </h1>
                <h4 className="fw-normal f-ptSerif fw-normal">
                  countries.
                </h4>
              </div>
              <p className="h5 mt-7">
                our staff are at the forefront of international aid operations, providing shelter, urgent medical assistance, food supplies, livelihoods and comfort to affected populations and don't withdraw until communities are well on their path to recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-10 mt-lg-13 gx-5">
          <div className="row row-cols-1 row-cols-md-3 gy-9 gx-md-9">
            <div className="col">
              <div className="card rounded-0 h-100">
                <div className="d-flex position-relative align-items-baseline">
                  <a href="https://qcharity.org/en/global/campaign?CampaignId=120">
                    <img src="/images/qcharity/empowering-poor-family.webp" className="card-img-top" alt="Empowering poor family" />
                  </a>
                  <small className="position-absolute bottom bg-dark text-white px-2 py-1 opacity-75 align-self-end">
                    LNO  : 2024
                  </small>
                </div>
                <div className="card-body">
                  <p className="card-title fw-bold">Empowering poor family</p>
                  <p className="small mb-6"></p>
                  <p className="card-text f-xs line-clamp line-clamp-3">
                    Help a struggling family by supporting a low-cost, income-generating project that will transform their lives for the better. Your kindness can turn hardship into hope!
                  </p>
                </div>
                <div className="card-footer bg-lighter py-5">
                  <a className="btn btn-primary rounded-pill float-start align-items-center" href="https://qcharity.org/en/global/campaign?CampaignId=120">
                    Campaign Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 h-100">
                <div className="d-flex position-relative align-items-baseline">
                  <a href="https://qcharity.org/en/global/campaign?CampaignId=757">
                    <img src="/images/qcharity/embrace-blessings.webp" className="card-img-top" alt="Embrace the Blessings of Giving" />
                  </a>
                  <small className="position-absolute bottom bg-dark text-white px-2 py-1 opacity-75 align-self-end">
                    LNO  : 2025
                  </small>
                </div>
                <div className="card-body">
                  <p className="card-title fw-bold">Embrace the Blessings of Giving</p>
                  <p className="small mb-6">
                    A Chance to Multiply Your Rewards  
                  </p>
                  <p className="card-text f-xs line-clamp line-clamp-3">
                    Those who contribute to these Ramadan charitable projects are blessed with great fortune! This is your golden opportunity to multiply your rewards during these blessed days. Step forward and take the lead in doing good before the season ends.
                  </p>
                </div>
                <div className="card-footer bg-lighter py-5">
                  <a className="btn btn-primary rounded-pill float-start align-items-center" href="https://qcharity.org/en/global/campaign?CampaignId=757">
                    Campaign Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-0 h-100">
                <div className="d-flex position-relative align-items-baseline">
                  <a href="https://qcharity.org/en/global/campaign?CampaignId=729">
                    <img src="/images/qcharity/furqan.jpg" className="card-img-top" alt="Furqan" />
                  </a>
                  <small className="position-absolute bottom bg-dark text-white px-2 py-1 opacity-75 align-self-end">
                    LNO  : 2024
                  </small>
                </div>
                <div className="card-body">
                  <p className="card-title fw-bold">Furqan</p>
                  <p className="small mb-6">
                    Illuminating Hearts Through Education
                  </p>
                  <p className="card-text f-xs line-clamp line-clamp-3">
                    As part of "Rofaqa" initiative to support orphans worldwide, we present "Furqan," an educational and cultural program to instill Islamic values in the hearts of those we sponsor.
                  </p>
                </div>
                <div className="card-footer bg-lighter py-5">
                  <a className="btn btn-primary rounded-pill float-start align-items-center" href="https://qcharity.org/en/global/campaign?CampaignId=729">
                    Campaign Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relief-disc-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 offset-md-2 order-2 rounded-circle text-center relief-disc-img">
            </div>
            <div className="col-12 col-md-5 order-0 f-ptSerif fst-italic">
              <h2 className="fw-normal text-primary lh-base">
                When disaster strikes, a race against time begins to save lives and restore a sense of normality.
              </h2>
              <h5 className="fw-normal mt-6">
                In developed countries where disaster preparedness levels are outstanding, natural disasters and man-made disruptions still manage to cause an enormous strain on governments and lead to mass casualty.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-sec">
        <div className="container pt-10">
          <div className="row">
            <div className="col-12 col-lg-4 pe-0 px-xl-0 position-relative header-circle-border d-flex">
              <div className="header-circle-text pt-0 pt-lg-10 pb-0">
                <h1 className="display-4 fw-bolder mb-0">
                  OUR IMPACT
                </h1>
                <h1 className="display-5 mb-0">
                  <span className="w-100 d-none d-lg-block"></span>
                  <span className="h2 fw-normal d-block d-lg-none">In 2019</span>
                </h1>
                <h2 className="fw-normal d-none d-lg-block">In 2020</h2>
              </div>
            </div>
            <div className="col-12 col-lg-7 offset-lg-1 mt-7 mt-lg-0">
              <ul className="statistics-list list-unstyled mt-7 mt-md-0">
                <li className="mb-9 mb-md-10 mb-xl-11">
                  <p className="d-flex justify-content-between align-items-baseline">
                    <span className="title fw-bold d-flex align-items-baseline">
                      <img src="/images/qcharity/countries-icon.png" width="36" height="44" className="me-4 me-md-5 me-xl-6" />
                      Countries
                    </span>
                    <span className="count fw-bolder">
                      70
                    </span>
                  </p>
                  <div className="li-circle position-relative">
                    <hr className="" />
                  </div>
                  <p className="col-12 small">
                    through 30 field offices and implementing partners
                  </p>
                </li>
                <li className="mb-9 mb-md-10 mb-xl-11">
                  <p className="d-flex justify-content-between align-items-baseline">
                    <span className="title fw-bold d-flex align-items-baseline">
                      <img src="/images/qcharity/beneficiaries-icon.png" width="36" height="44" className="me-4 me-md-5 me-xl-6" />
                      Beneficiaries
                    </span>
                    <span className="count fw-bolder">
                      14,000,000
                    </span>
                  </p>
                  <div className="li-circle position-relative">
                    <hr className="" />
                  </div>
                  <p className="col-12 small">
                    children, women, people with disabilities, elderly and vulnerable communities
                  </p>
                </li>
                <li className="mb-9 mb-md-10 mb-xl-11">
                  <p className="d-flex justify-content-between align-items-baseline">
                    <span className="title fw-bold d-flex align-items-baseline">
                      <img src="/images/qcharity/total-spent-icon.png" width="36" height="44" className="me-4 me-md-5 me-xl-6" />
                      Total spent
                    </span>
                    <span className="count fw-bolder">
                      400 Million $
                    </span>
                  </p>
                  <div className="li-circle position-relative">
                    <hr className="" />
                  </div>
                  <p className="col-12 small">
                    spent on humanitarian and development projects
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="QC_gray-bg-light-extra">
        <div className="container">
          <hr className="col-xs-12" />
        </div>
      </section>

      <section className="QC_padding-section QC_gray-bg-light-extra">
        <div id="headingMarquee">
          <h1 className="mb-11 mb-md-14 mb-xl-15 display-6 fw-normal" id="marqueeDiv1">
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
          </h1>

          <h1 className="mb-11 mb-md-14 mb-xl-15 display-6 fw-normal" id="marqueeDiv2">
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
            <span className="px-7">
              Qatar Charity <span className="display-5 fw-bold text-uppercase">Videos</span>
            </span>
          </h1>
        </div>
        
        <div className="container d-none d-md-block">
          <div className="row">
            <button className="btn btn-outline-dark leftLst px-2 py-4 mt-15">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14">
                <path id="Path_16210" data-name="Path 16210" d="M3.414,2H9a1.278,1.278,0,0,0,.223-.025,1.04,1.04,0,0,0,.7-1.358A1.018,1.018,0,0,0,9.112.006.832.832,0,0,0,9,0H.944A.821.821,0,0,0,.833.014,1.023,1.023,0,0,0,.006.888,1.037,1.037,0,0,0,0,1V9a1.036,1.036,0,0,0,1.383.924,1.023,1.023,0,0,0,.611-.812A1.051,1.051,0,0,0,2,9V3.414L20.294,21.708a1.939,1.939,0,0,0,.175.139,1.028,1.028,0,0,0,1.476-.516,1.011,1.011,0,0,0-.1-.862,1.964,1.964,0,0,0-.14-.176L3.414,2Z" transform="translate(0.948 7.038) rotate(-45)" fill="currentColor" />
              </svg>
            </button>

            <a className="btn btn-outline-dark rightLst px-2 py-5 mt-15 me-xxl-14 me-xl-10 me-lg-11 me-md-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14">
                <path id="Path_16210" data-name="Path 16210"
                      d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                      transform="translate(15.504 22.586) rotate(-135)" fill="currentColor" />
              </svg>
            </a>

            <div className="MultiCarousel col-md-8 offset-md-2 col-xl-10 offset-xl-1" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
              <div className="MultiCarousel-inner">
                <div className="item mx-xl-9 mx-md-5">
                  <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=YVluh2vitC4"
                     style={{height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-1.jpg')"}}>
                    <svg className="position-absolute top-50 start-50 translate-middle"
                         xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                      <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                    </svg>
                  </a>
                  <hr className="w-25 bg-primary" />
                </div>
                <div className="item mx-xl-9 mx-md-5">
                  <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=Ylinqr63dWs"
                     style={{height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-2.jpg')"}}>
                    <svg className="position-absolute top-50 start-50 translate-middle"
                         xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                      <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                    </svg>
                  </a>
                  <hr className="w-25 bg-primary" />
                </div>
                <div className="item mx-xl-9 mx-md-5">
                  <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=kFjAOQe1s6c"
                     style={{height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-3.jpg')"}}>
                    <svg className="position-absolute top-50 start-50 translate-middle"
                         xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                      <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                    </svg>
                  </a>
                  <hr className="w-25 bg-primary" />
                </div>
                <div className="item mx-xl-9 mx-md-5">
                  <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=BH17fskHdm0"
                     style={{height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-4.jpg')"}}>
                    <svg className="position-absolute top-50 start-50 translate-middle"
                         xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                      <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                    </svg>
                  </a>
                  <hr className="w-25 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-block d-md-none">
          <div id="msd" className="" style={{visibility: "inherit !important", overflow: "hidden"}}>
            <div data-pr="c" id="hdtb-sc" className="text-center">
              <div id="hdtb-msb" className="">
                <div className="px-3 float-start mb-12">
                  <div className="rounded">
                    <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=YVluh2vitC4"
                       style={{width: "296px", height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-1.jpg')"}}>
                      <svg className="position-absolute top-50 start-50 translate-middle"
                           xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                        <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                      </svg>
                    </a>
                    <hr className="w-25 bg-primary" />
                  </div>
                </div>
                <div className="px-3 float-start mb-12">
                  <div className="rounded">
                    <a className="card rounded-0 border-0 mb-7 text-decoration-none text-body" href="https://www.youtube.com/watch?v=Ylinqr63dWs"
                       style={{width: "296px", height: "432px", backgroundPosition: "top center", backgroundSize: "cover", backgroundImage: "url('/images/qcharity/video-thumbnail-2.jpg')"}}>
                      <svg className="position-absolute top-50 start-50 translate-middle"
                           xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 46.59 32.965">
                        <path d="M1.027,31.381A5.908,5.908,0,0,0,5.08,35.488c4.786,1.3,31.611,1.307,36.468,0A5.929,5.929,0,0,0,45.6,31.381a67.407,67.407,0,0,0-.058-23.172l.058.38a5.908,5.908,0,0,0-4.052-4.107C36.826,3.2,9.931,3.152,5.08,4.483A5.933,5.933,0,0,0,1.027,8.59,62.794,62.794,0,0,0,1.027,31.381Zm17.626-4.312V12.921l12.155,7.085Z" transform="translate(0.015 -3.503)" fill="#fff" />
                      </svg>
                    </a>
                    <hr className="w-25 bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     </>
  );
}
export default Relief;
      