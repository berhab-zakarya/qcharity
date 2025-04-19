"use client"
import { useState } from 'react';


export default function CurrentAppeals() {
  const [activeSlide, setActiveSlide] = useState(0);

  const campaigns = [
    {
      id: 120,
      title: "Empowering poor family",
      subtitle: "",
      lno: "2024",
      details: "Help a struggling family by supporting a low-cost, income-generating project that will transform their lives for the better. Your kindness can turn hardship into hope!",
      image: "https://qcwebcdnprod.azureedge.net/qcwebcdnprod/WebStoryCampaign/2024/4/0-Photo2024-04-01_09-06-35-PM.webp"
    },
    {
      id: 757,
      title: "Embrace the Blessings of Giving",
      subtitle: "A Chance to Multiply Your Rewards",
      lno: "2025",
      details: "Those who contribute to these Ramadan charitable projects are blessed with great fortune! This is your golden opportunity to multiply your rewards during these blessed days. Step forward and take the lead in doing good before the season ends. Support these limited-time Ramadan projects and leave a lasting impact on the lives of thousands in need. Do not miss out on the blessings of giving, and be among those whose generosity inspires future generations.",
      image: "https://qcwebcdnprod.azureedge.net/qcwebcdnprod/WebStoryCampaign/2025/3/0-Photo2025-03-13_12-06-21-PM.webp"
    },
    {
      id: 760,
      title: "Labbeh Gaza",
      subtitle: "Together, We Restore Hope",
      lno: "2024",
      details: "With every donation and every outstretched hand, we can offer a safe refuge, bringing light where there was darkness, and joy where there was sorrow. Together, we will write a new chapter of hope, where suffering no longer has a place for our brothers and sisters in Gaza.",
      image: "https://qcwebcdnprod.azureedge.net/qcwebcdnprod/WebStoryCampaign/2025/3/0-Photo2025-03-19_12-05-14-PM.webp"
    },
    {
      id: 729,
      title: "Furqan",
      subtitle: "Illuminating Hearts Through Education",
      lno: "2024",
      details: "As part of &ldquo;Rofaqa&rdquo; initiative to support orphans worldwide, we present &ldquo;Furqan,&rdquo; an educational and cultural program to instill Islamic values in the hearts of those we sponsor. Through &ldquo;Furqan&rdquo; program, we provide over 800 orphans in 7 countries with opportunities to learn and develop their cognitive abilities, providing them with renewed hope and a brighter future for themselves and their families and enabling them to become next-generation",
      image: "https://www.qcharity.org/Exportpath/WebStoryCampaign/2024/10/0-Photo2024-10-24_01-53-24-PM.jpg"
    }
  ];

  const otherAppeals = [
    {
      id: 757,
      title: "Embrace the Blessings of Giving",
      subtitle: "A Chance to Multiply Your Rewards",
      image: "https://qcwebcdnprod.azureedge.net/qcwebcdnprod/WebStoryCampaign/2025/3/1-Photo2025-03-12_04-24-32-PM.webp"
    },
    {
      id: 760,
      title: "Labbeh Gaza",
      subtitle: "Together, We Restore Hope",
      image: "https://qcwebcdnprod.azureedge.net/qcwebcdnprod/WebStoryCampaign/2025/3/1-Photo2025-03-19_12-05-15-PM.webp"
    },
    {
      id: 729,
      title: "Furqan",
      subtitle: "Illuminating Hearts Through Education",
      image: "https://www.qcharity.org/Exportpath/WebStoryCampaign/2024/10/1-Photo2024-10-24_01-53-25-PM.jpg"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-2 fw-bolder position-relative float-start pe-9">
              CURRENT APPEALS
            </h1>
            <br />
            <img 
              src="/content/QCGlobal/icons/Path-16213.svg" 
              alt="" 
              width={30} 
              height={30}
              className="float-start" 
            />
          </div>
          <div className="col-12">
            <div className="d-none d-lg-grid gap-2 col-5 offset-7 col-lg-3 offset-lg-9">
              <a href="/en/global/relief" className="btn btn-outline-primary rounded-pill">
                All Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="container d-block d-lg-none mt-10">
        <div className="row">
          <div className="col-12">
            <div className="card bg-lighter rounded-0 h-100">
              <a href={`/en/global/campaign?CampaignId=${campaigns[0].id}`}>
                <img 
                  src={campaigns[0].image}
                  alt={campaigns[0].title}
                  width={500}
                  height={300}
                  className="card-img-top"
                />
              </a>
              <div className="card-body py-7">
                <h3 className="card-title mb-3">{campaigns[0].title}</h3>
                <p className="small mb-3">{campaigns[0].subtitle}</p>
                <p className="card-text f-xs">LNO : {campaigns[0].lno}</p>
                <hr className="my-6" />
                <a
                  href={`/en/global/campaign?CampaignId=${campaigns[0].id}`} 
                  className="f-xs link-primary mb-0 stretched-link"
                >
                  More Details &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 32 14">
                    <defs>
                      <clipPath id="clip-path">
                        <rect id="Rectangle_4832" data-name="Rectangle 4832" width="32" height="14" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                      </clipPath>
                    </defs>
                    <g id="Arrow" clipPath="url(#clip-path)">
                      <path id="Path_16210" data-name="Path 16210" d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z" transform="translate(15.504 22.586) rotate(-135)" fill="currentColor" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-12">
            <h1 className="display-2 mt-9 mb-6 fw-bolder text-uppercase">
              Other Appeals
            </h1>
            
            {otherAppeals.map((appeal, index) => (
              <div key={index}>
                <div className="card border-0">
                  <div className="row g-0">
                    <a 
                      href={`/en/global/campaign?CampaignId=${appeal.id}`}
                      className="col-4 col-sm-3 col-md-2 overflow-hidden stretched-link" 
                      style={{ height: "65px" }}
                    >
                      <img 
                        className="col-12"
                        src={appeal.image}
                        alt={appeal.title}
                        width={100}
                        height={65}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </a>
                    <div className="col-8">
                      <div className="card-body py-0">
                        <h5 className="card-title">{appeal.title}</h5>
                        <p className="card-text small line-clamp line-clamp-2">
                          {appeal.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < otherAppeals.length - 1 && <hr className="hr-light my-6" />}
              </div>
            ))}
            
            <div className="d-grid gap-2 col-5 mx-auto">
              <a className="btn btn-outline-primary rounded-pill" href="/en/global/relief">
                All Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop View */}
      <div 
        id="donateCarousel"
        className="d-none d-lg-block carousel carousel-dark slide carousel-fade container-fluid gx-0 mt-10 bg-lighter current-appeals"
      >
        <div className="carousel-inner h-100" role="listbox">
          {campaigns.map((campaign, index) => (
            <div 
              key={index} 
              className={`carousel-item h-100 ${index === activeSlide ? 'active' : ''}`}
            >
              <div className="d-none d-sm-block h-100">
                <div className="col-6 col-xxl-4 px-0 position-relative pt-13 pt-xl-11 px-xl-10 float-start">
                  <p className="mb-10">{index + 1}/{campaigns.length}</p>
                  {/* Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="41" viewBox="0 0 27 41"
                    className="position-absolute" style={{ top: "60px", right: "-27px" }}>
                    <path d="M20.5,0,41,27H0Z" transform="translate(27) rotate(90)" fill="#f9f9f9" />
                  </svg>
                  {/* Arrow */}
                  <div className="row row-cols-1">
                    <div className="col mb-1 mb-xl-0">
                      <h2 className="mb-4">{campaign.title}</h2>
                      <h4 className="fw-normal">{campaign.subtitle}</h4>
                      <sub className="fw-normal">LNO : {campaign.lno}</sub>
                      <h4 className="mt-10 fw-bold">Campaign Details</h4>
                      <h6 className="lh-lg fw-normal">
                        {campaign.details}
                      </h6>
                    </div>
                    <div className="align-self-end">
                      <div className="col">
                        <hr className="my-1 my-xl-2" />
                      </div>
                      <div className="col my-7 my-xl-9 justify-content-end">
                        <a 
                          href={`/en/global/campaign?CampaignId=${campaign.id}`}
                          className="float-end text-reset text-decoration-none small mb-0 stretched-link"
                        >
                          More Details &nbsp;
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 32 14">
                            <defs>
                              <clipPath id="clip-path-desktop">
                                <rect id="Rectangle_4832" data-name="Rectangle 4832" width="32" height="14" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                              </clipPath>
                            </defs>
                            <g id="Arrow" clipPath="url(#clip-path-desktop)">
                              <path id="Path_16210" data-name="Path 16210" d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z" transform="translate(15.504 22.586) rotate(-135)" fill="currentColor" />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a 
                    className="btn btn-outline-primary rounded-pill" 
                    href={`/en/global/campaign?CampaignId=${campaign.id}`}
                  >
                    Donate Now
                  </a>
                </div>
                <a 
                  href={`/en/global/campaign?CampaignId=${campaign.id}`}
                  className="col-6 col-xxl-8 bg-cover bg-cover-end px-0 h-100 float-end"
                  style={{
                    backgroundImage: `url('${campaign.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
            <g fill="none" stroke="#121212" strokeWidth="2">
              <circle cx="28" cy="28" r="28" stroke="none" />
              <circle cx="28" cy="28" r="27" fill="none" />
            </g>
            <path d="M12,6,6,0,0,6" transform="translate(24.03 34.075) rotate(-90)" fill="none" stroke="#121212"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" strokeWidth="2" />
          </svg>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
            <g transform="translate(-1126 -73)">
              <g transform="translate(1182 129) rotate(180)" fill="none" stroke="#121212" strokeWidth="2">
                <circle cx="28" cy="28" r="28" stroke="none" />
                <circle cx="28" cy="28" r="27" fill="none" />
              </g>
              <path d="M20.5,11.5l-6,6-6-6" transform="translate(1140.47 115.575) rotate(-90)" fill="none"
                  stroke="#121212" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" strokeWidth="2" />
            </g>
          </svg>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}