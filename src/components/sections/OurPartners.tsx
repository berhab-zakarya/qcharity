"use client"

import { useState } from "react";

const OurPartners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const partnersList1 = [
    { name: 'idmc', url: 'idmc.jpg' },
    { name: 'unrwa', url: 'unrwa.jpg' },
    { name: 'care', url: 'care.jpg' },
    { name: 'gf', url: 'gf.jpg' },
    { name: 'mercycorps', url: 'mercycorps.jpg' },
    { name: 'nrc', url: 'nrc.jpg' },
    { name: 'start', url: 'start.jpg' },
    { name: 'orbis', url: 'orbis.jpg' },
    { name: 'unicef', url: 'unicef.jpg' },
    { name: 'unhcr', url: 'unhcr.jpg' },
    { name: 'reach', url: 'reach.jpg' },
  ];

  const partnersList2 = [
    { name: 'education', url: 'education.jpg' },
    { name: 'fao', url: 'fao.jpg' },
    { name: 'imc', url: 'imc.jpg' },
    { name: 'ocha', url: 'ocha.jpg' },
    { name: 'pt', url: 'pt.jpg' },
    { name: 'qffd', url: 'aaaqffd.jpg' },
    { name: 'qrc', url: 'qrc.jpg' },
    { name: 'wfp', url: 'wfp.jpg' },
  ];

  const handleSlideChange = (index:any) => {
    setActiveSlide(index);
  };

  return (
    <section className="our-partners d-none d-lg-block">
      <div className="container mt-11">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1 className="display-4 fw-bolder text-uppercase mb-6">
              Our partners
            </h1>
            <p className="d-none d-sm-block">
              We work with UN agencies, international organizations, grass-roots
              organizations, and governments to make a sustainable, long-lasting
              impact
            </p>
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-6 col-md-12 text-primary my-6 mt-lg-12 d-flex">
                  <h1 className="partners-count lh-1 fw-bolder mb-0">70</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.488"
                    height="23.488"
                    viewBox="0 0 23.488 23.488"
                    className="mt-6"
                  >
                    <path
                      d="M42.988,31.466a1.986,1.986,0,0,1-1.994,1.994H33.017v7.534a1.994,1.994,0,1,1-3.989,0V33.46H21.494a1.994,1.994,0,0,1,0-3.989h7.534V21.494a1.994,1.994,0,0,1,3.989,0v7.977h7.977A1.986,1.986,0,0,1,42.988,31.466Z"
                      transform="translate(-19.5 -19.5)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="col-6 col-md-12 small lh-1 partners-count-details">
                  <small>
                    Partners
                    <br />
                    around the globe
                  </small>
                </p>
                <div className="d-none d-md-block col-md-12">
                  <hr className="col-12 col-xl-7" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            {/* Carousel Wrapper */}
            <div id="carousel-with-lb" className="carousel slide carousel-multi-item">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li
                  onClick={() => handleSlideChange(0)}
                  className={`secondary-color ${activeSlide === 0 ? 'active' : ''}`}
                ></li>
                <li
                  onClick={() => handleSlideChange(1)}
                  className={`secondary-color ${activeSlide === 1 ? 'active' : ''}`}
                ></li>
              </ol>
              {/* Slides and lightbox */}
              <div id="sort-this-div" className="carousel-inner mdb-lightbox" role="listbox">
                <div id="mdb-lightbox-ui"></div>
                {/* First slide */}
                <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''} text-center`} style={{ height: '705px' }}>
                  <div className="row row-cols-3 row-cols-md-4">
                    {partnersList1.map((partner, index) => (
                      <figure key={index} className="col mb-10">
                        <a href="javascript:void(0)" data-size="">
                          <img
                            src={`https://www.qcharity.org/Content/QCGlobal/icons/${partner.url}`}
                            alt={partner.name}
                            className="imgGrayscale"
                            width={174}
                            height={100}
                          />
                        </a>
                      </figure>
                    ))}
                  </div>
                </div>
                {/* Second slide */}
                <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''} text-center`} style={{ height: '705px' }}>
                  <div className="row row-cols-3 row-cols-md-4">
                    {partnersList2.map((partner, index) => (
                      <figure key={index} className="col mb-10">
                        <a href="javascript:void(0)" data-size="">
                          <img
                            src={`https://www.qcharity.org/Content/QCGlobal/icons/${partner.url}`}
                            alt={partner.name}
                            className="imgGrayscale"
                            width={174}
                            height={100}
                          />
                        </a>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;