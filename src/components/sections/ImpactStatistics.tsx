"use client"

const ImpactStatistics = () => {
  return (
    <div>
     
      <section className="statistics-sec d-none d-lg-block">
        <div className="container pt-10">
          <div className="row">
            <div className="col-12 col-lg-4 pe-0 px-xl-0 position-relative header-circle-border d-flex">
              <div className="header-circle-text pt-0 pt-lg-10 pb-0">
                <h1 className="display-4 fw-bolder mb-0">OUR IMPACT</h1>
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
                      <img 
                        src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png"
                        width="36" 
                        height="44" 
                        className="me-4 me-md-5 me-xl-6" 
                        alt="Countries icon"
                      />
                      Countries
                    </span>
                    <span className="count fw-bolder"> 70 </span>
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
                      <img 
                        src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png"
                        width="36" 
                        height="44" 
                        className="me-4 me-md-5 me-xl-6" 
                        alt="Beneficiaries icon"
                      />
                      Beneficiaries
                    </span>
                    <span className="count fw-bolder"> 14,000,000 </span>
                  </p>
                  <div className="li-circle position-relative">
                    <hr className="" />
                  </div>
                  <p className="col-12 small">
                    children, women, people with disabilities, elderly and
                    vulnerable communities
                  </p>
                </li>
                <li className="mb-9 mb-md-10 mb-xl-11">
                  <p className="d-flex justify-content-between align-items-baseline">
                    <span className="title fw-bold d-flex align-items-baseline">
                      <img 
                        src="https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png"
                        width="36" 
                        height="44" 
                        className="me-4 me-md-5 me-xl-6" 
                        alt="Total spent icon"
                      />
                      Total spent
                    </span>
                    <span className="count fw-bolder"> 400 Million $ </span>
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
      
   
    </div>
  );
};

export default ImpactStatistics;