
const WhatDrivesUs = () => {
  return (
    <section id="secWhatDrivesUs" className="what-drives-us">
      <div className="container">
        <div className="row gx-6 gx-xl-9 justify-content-between">
          <div className="col-10 col-sm-8 gx-0 gx-sm-9 ms-n9 ms-sm-0 col-md-6">
            <div className="img-effect position-relative text-primary">
              <img
                src="/what-drives-us.svg"
                className="img-fluid"
                alt=""
                width={500} // Adjust width and height according to the image size
                height={500}
              />
              <svg
                className="img-effect-circles position-absolute"
                viewBox="0 0 10 10"
                height="15rem"
                style={{ transform: 'rotate(0.4turn)' }}
              >
                <path
                  className="track"
                  fill="none"
                  strokeWidth=".09"
                  d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
                />
                <circle className="marker" r="1" fill="currentColor"></circle>
              </svg>
            </div>
          </div>
          <div className="col-1 col-sm-4 col-md-6 gx-9 z-index-1">
            <div className="col d-flex f-ptSerif text-start right-0 mt-0 mt-md-12 mt-lg-n5 ms-n15 ms-sm-n12 ms-md-0 ms-lg-n15">
              <div className="">
                <h1 className="display-5 fw-bolder">what</h1>
                <h1 className="display-1 fw-bolder ml12Letter">drives</h1>
                <h1 className="display-3 fw-bolder">us</h1>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <div className="col">
                <h1 className="mb-4 text-uppercase showOnScroll">Our Mission</h1>
                <h4 className="fw-normal lh-base showOnScroll">
                  We implement humanitarian and development programs, mobilize
                  support and resources, and build effective partnerships to
                  provide a decent life for all.
                </h4>
              </div>
              <h1 className="display-6">&nbsp;</h1>
              <div className="col">
                <h1 className="gy-1 text-uppercase showOnScroll">Our Vision</h1>
                <h4 className="fw-normal lh-base showOnScroll">
                  We envision a world in which all human beings have the right
                  to live in peace and dignity
                </h4>
              </div>
              <div className="col">
                <a href="/who-we-are" className="btn btn-outline-primary rounded-pill btn-sm my-3 flex justify-center">
                <div className='flex'>
                Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="28.327" height="12.393" viewBox="0 0 28.327 12.393" className="ms-3">
                    <path
                      d="M3.022,17.694H7.967a1.131,1.131,0,0,1,.2.022.92.92,0,0,1,.621,1.2.9.9,0,0,1-.719.541.737.737,0,0,1-.1.005H.836a.726.726,0,0,1-.1-.012.905.905,0,0,1-.732-.774.918.918,0,0,1-.005-.1V11.5a.917.917,0,0,1,1.224-.818.905.905,0,0,1,.541.719.93.93,0,0,1,.005.1v4.945L17.964.248a1.717,1.717,0,0,1,.155-.123.91.91,0,0,1,1.307.457.9.9,0,0,1-.086.763,1.739,1.739,0,0,1-.124.156L3.022,17.694Z"
                      transform="translate(14.167 19.963) rotate(-135)"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col d-block d-lg-none mt-8">
            <div className="col">
              <h1 className="mb-4 text-uppercase">Our Mission</h1>
              <h4 className="fw-normal lh-base">
                We assist and support vulnerable communities in achieving
                progress and prosperity by:
              </h4>
            </div>
            <h5 className="">&nbsp;</h5>
            <div className="col">
              <h1 className="gy-1 text-uppercase">Our Vision</h1>
              <h4 className="fw-normal lh-base">
                We envision a world in which all human beings have the right to
                live in peace and dignity
              </h4>
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-primary rounded-pill btn-sm my-3" data-toggle="button" >
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="28.327" height="12.393" viewBox="0 0 28.327 12.393" className="ms-3">
                  <path
                    d="M3.022,17.694H7.967a1.131,1.131,0,0,1,.2.022.92.92,0,0,1,.621,1.2.9.9,0,0,1-.719.541.737.737,0,0,1-.1.005H.836a.726.726,0,0,1-.1-.012.905.905,0,0,1-.732-.774.918.918,0,0,1-.005-.1V11.5a.917.917,0,0,1,1.224-.818.905.905,0,0,1,.541.719.93.93,0,0,1,.005.1v4.945L17.964.248a1.717,1.717,0,0,1,.155-.123.91.91,0,0,1,1.307.457.9.9,0,0,1-.086.763,1.739,1.739,0,0,1-.124.156L3.022,17.694Z"
                    transform="translate(14.167 19.963) rotate(-135)"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
