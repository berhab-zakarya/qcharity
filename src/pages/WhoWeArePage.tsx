import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

import { useEffect } from "react";
const WhoWeAre = () => {
    useEffect(()=>{
        import("../styles/WhoWeAre.css");
        import("../qc.global.css");
    },[])
  return (
    <>
    <Header/>
      {/* Heading */}
      <section className="first-section">
        <div className="container-fluid container-lg position-relative">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 mt-md-8 mt-xl-0 pe-md-0 pe-lg-6">
              <h1 className="display-4 text-primary fw-bold">
                WHO WE ARE
              </h1>
            </div>
            <div className="w-100 d-block d-sm-none"></div>
            <div className="col-12 col-md-6 col-xl-5 col-xxl-4">
              <img className="position-absolute z-index-n1 ps-lg-10 ps-xl-8 ps-xxl-0" src="/content/QCGlobal/images/quotegrey.svg" height="50" />

              <p className="h2 fw-normal text-gray lh-base z-index-1 mt-5 d-block d-md-none">
                All great things start small.
              </p>

              <p className="h2 fw-normal text-gray lh-base z-index-1 mt-5 float-end d-none d-md-block col-xs-12">
                All great things start small.
              </p>
            </div>
            <hr className="mt-5 text-primary" />
          </div>
        </div>

        <div className="container-fluid container-lg">
          <div className="col mt-5">
            <p className="col display-5 d-inline-flex fw-medium text-uppercase">Our story</p>
            <p className="col h6 fw-normal text-gray text-uppercase">
              Doha, Qatar – 1984.
            </p>
          </div>

          <div className="row justify-content-between mt-6">
            <div className="col-md-6 col-sm-12">
              <p>
                <span className="first-letter-xxl">A</span> group of Qatari philanthropists, alarmed by the rising number of children orphaned by wars and conflicts in neighboring countries, came together to form a community initiative called
              </p>
              <p className="h3 fw-normal f-ptSerif">
                "The Committee of Qatar for Orphan Sponsorship".
              </p>
            </div>

            <div className="w-100 d-block d-sm-none"></div>

            <div className="col-md-5 col-sm-12 mt-8 mt-md-0">
              <p>
                Eight years later, an international NGO was set up under the name
                <span className="text-primary">
                  "Qatar Charity"
                </span>
                to scale up the initiative, broaden its range of activities and augment its outreach.
              </p>
            </div>
          </div>

          <div className="position-relative">
            <div className="position-absolute col-2 offset-7 mt-n12 d-none d-md-block">
              <img src="/content/QCGlobal/images/semicircleorange.svg" />
            </div>

            <div className="position-absolute col-2 offset-6 mt-n10 d-block d-md-none">
              <img src="/content/QCGlobal/images/semicircleorange.svg" height="100" />
            </div>

            <div className="text-center mt-10 z-index-1">
              <img className="col-12" src="/content/QCGlobal/images/534.jpg" />
            </div>
          </div>
          <div className="col-4 mt-5" style={{ width: "200px" }}>
         
            <hr />
          </div>

          <div className="col-8 col-sm-8 offset-4 offset-sm-4 col-md-5 offset-md-7 mt-8 mt-md-0">
            <p className="h5 fw-normal">
              Almost four decades later, Qatar Charity has grown to become one of the largest humanitarian and development organizations in the world, providing life-saving assistance to those hit by conflicts, persecution and natural disasters and creating durable solutions for poverty using sustainable development programs in social welfare, water and sanitation, education, nutrition and economic empowerment.
            </p>
          </div>

          <div className="row justify-content-between">
            <div className="col-md-5 col-sm-12 mt-8 mt-md-0">
              <p className="h4 fw-normal lh-lg">
                Today,
                <span className="text-primary">
                  with field offices in 30 countries and implementing partners in 40 others,
                </span>
                we are at the forefront of global response to emergencies, and on the foreground of development solutions that help vulnerable communities become more resilient and ultimately thrive and prosper.
              </p>

              <p className="mt-10">
                Throughout the past five years, Qatar Charity reached
                <span className="text-primary"> 29 million </span> people through large scale humanitarian and development projects with a total cost of 1.2 billion US Dollars.
              </p>
            </div>

            <div className="w-100 d-block d-sm-none"></div>

            <div className="col-md-6 col-lg-5 col-sm-12 mt-15 position-relative d-none d-md-block">
              <div className="position-absolute ms-n12">
                <img src="/content/QCGlobal/images/whoweareorangecircle.svg" />
              </div>

              <div className="">
                <img className="col-md-8 z-index-1 ms-2 col-10 col-sm-5 field-card-image" src="/content/QCGlobal/images/Where-1.jpg" />
                <div className="mt-5 ms-2 text-start ms-15 ms-md-0" style={{ width: "200px" }}>
               
                </div>
              </div>

              <div className="position-absolute mt-n16 ms-15 ms-xl-16 z-index-n1 left-sm-50">
                <img src="/content/QCGlobal/images/whoweareprimarycircle.svg" />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-10 mt-10 d-md-none">
            <img className="col-12" src="/content/QCGlobal/images/wh3.png" />
            <div className="text-start offset-2 ps-3 ps-sm-5" style={{ width: "200px" }}>
           
            </div>
          </div>
        </div>
      </section>

      {/* Our objectives */}
      <section className="mb-md-15 mb-xl-10 pb-xxl-18 pb-md-16">
        <div className="container">
          <h1 className="fw-bold display-4 mb-12">
            OUR PILLARS
          </h1>

          <div className="row">
            {/* left Number */}
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              {/* Object1 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light pe-0 gx-1 gx-xl-3">1</div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1 gx-xl-6">
                  <img className="img-pillars" src="/content/QCGlobal/images/Opject/Group 8087.svg" />
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-6 h4 fw-normal pt-3 pe-0 gx-3">PROTECTING CHILDREN AND FAMILIES</div>
                <div className="bulits-black line-top-border line-right-border col-1 gx-1" style={{ height: "100px" }}>
                </div>
              </div>
              
              {/* Object2 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light pe-0 gx-1 gx-xl-3">2</div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1 gx-xl-6">
                  <img className="img-pillars" src="/content/QCGlobal/images/Opject/Group 8088.svg" />
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-6 h4 fw-normal gx-1 pe-0">SAFEGUARDING REFUGEES AND IDPS</div>
                <div className="bulits-black line-top-border line-right-border col-1 mt-n0" style={{ height: "100px" }}>
                </div>
              </div>
              
              {/* Object3 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light pe-0 gx-1 gx-xl-3">3</div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1 gx-xl-6">
                  <img className="img-pillars" src="/content/QCGlobal/images/Opject/Group 8089.svg" />
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-6 h4 fw-normal gx-1 pe-0">SUSTAINABLE AND INCLUSIVE DEVELOPMENT</div>
                <div className="bulits-black line-top-border line-right-border col-1 mt-n0" style={{ height: "100px" }}>
                </div>
              </div>
              
              {/* Object4 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light pe-0 gx-1 gx-xl-3">4</div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1 gx-xl-6">
                  <img className="img-pillars" src="/content/QCGlobal/images/Opject/Group 8090.svg" />
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-6 h4 fw-normal pe-0 gx-1">PROMOTING COHESIVE SOCIETIES</div>
                <div className="bulits-black line-top-border line-right-border col-1 mt-n0" style={{ height: "110px" }}>
                </div>
              </div>
              
              {/* Object5 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light pe-0 gx-1 gx-xl-3">5</div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1 gx-xl-6">
                  <img className="img-pillars" src="/content/QCGlobal/images/Opject/Group 8093.svg" />
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-6 col-6 h4 fw-normal gx-1 pe-0">LOCAL COMMUNITY DEVELOPMENT</div>
                <div className="bulits-black line-top-border col-1 mt-n0">
                </div>
              </div>
              
              {/* Object6 */}
              <div className="row justify-content-between px-4">
                <div className="col-1 display-3 fw-light"></div>
                <div className="col-xxl-2 col-md-2 col-lg-2 col-sm-3 col-2 gx-1">
                </div>
                <div className="line-right-border line-bottom-border col-6 mt-n11 d-md-none d-xl-none d-sm-block" style={{ height: "100px" }}>
                </div>
              </div>
            </div>

            {/* hidden-on mobile */}
            <div className="text-center col-6 offset-6 line-left-border mt-n1 d-md-none d-xl-none d-sm-block" style={{ height: "20px" }}>
            </div>
            <div className="col-12 text-center d-md-none d-xl-none d-sm-block">
              <img src="/content/QCGlobal/images/Opject/sahm-3.svg" />
            </div>

            {/* Right side */}
            <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-12 ms-xxl-n3 ms-6 ms-sm-0 gx-1">
              <div className="row">
                <div className="col-xxl-2 col-lg-1 line-top-border d-sm-none d-none d-xl-block text-center" style={{ marginTop: "218px" }}>
                </div>

                <div className="row col-12 col-xxl-10 justify-content-between">
                  <div className="h5 fw-normal lh-base col-12 pt-lg-0 pt-10">
                    Components embedded in
                    <span className="text-primary">
                      Qatar Charity's
                    </span> programming
                  </div>
                  <div className="col-1 line-left-border line-top-border line-bottom-border mt-8 d-sm-none d-none d-xl-block" style={{ height: "250px" }}>
                  </div>
                  <div className="col-xxl-10 col-lg-10 col-12 mt-9 p-0 px-1 row gx-1">
                    <div className="col-12 mb-3 px-3">
                      <span className="float-start mx-3">
                        <img src="/content/QCGlobal/images/Opject/Group 8095.svg" />
                      </span>
                      <span className="float-start h5 fw-normal text-primary pt-1">
                        Gender Equality
                      </span>
                    </div>

                    <div className="col-12 mb-3 px-3">
                      <span className="float-start mx-3">
                        <img src="/content/QCGlobal/images/Opject/Group 8096.svg" />
                      </span>
                      <span className="float-start h5 fw-normal text-orange pt-1">
                        Climate change
                      </span>
                    </div>

                    <div className="col-12 mb-3 px-3">
                      <span className="float-start mx-3">
                        <img src="/content/QCGlobal/images/Opject/Group 8098.svg" />
                      </span>
                      <span className="float-start h5 fw-normal text-green-light pt-1">
                        People with disabilities
                      </span>
                    </div>

                    <div className="col-12 mb-3 px-3">
                      <span className="float-start mx-3">
                        <img src="/content/QCGlobal/images/Opject/Group 8097.svg" />
                      </span>
                      <span className="float-start h5 fw-normal text-secondary pt-1">
                        Localization and Capacity-building
                      </span>
                    </div>

                    <div className="col-12 mb-3 px-3">
                      <span className="float-start mx-3">
                        <img src="/content/QCGlobal/images/Opject/Group 8099.svg" />
                      </span>
                      <span className="float-start h5 fw-normal text-skay pt-1">
                        Advocacy
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Desktop */}
      <section className="d-none d-md-block">
        <div className="row justify-content-between">
          <div className="bg-orange vision-card-height">
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-5 col-md-5 col-lg-6 mt-n15 mt-md-n18">
                <img className="col-12 d-none d-lg-block" src="/content/QCGlobal/images/Wher2.jpg" />
                <img className="col-12 d-lg-none" src="/content/QCGlobal/images/Wher3.jpg.jpg" />
                <div className="col-12 col-md-5 mt-5 float-end text-end">
               
                  <hr />
                </div>
              </div>

              <div className="col-6 col-md-6 col-lg-4 mt-n10 mt-md-n15 gx-9 gx-md-0 pe-lg-5 offset-1">
                <div className="d-none d-md-block">
                  <div className="display-4">Our</div>
                  <div className="xl-font fw-bold text-uppercase">Vision</div>
                </div>
                <div className="d-md-none">
                  <div className="display-5">Our</div>
                  <div className="display-2 fw-bold text-uppercase">Vision</div>
                </div>

                <img src="/content/QCGlobal/images/blackswigly.svg" height="20" width="125" />
                <div className="h1 fw-light mt-7 lh-base">We envision a world in which all human beings have the right to live in peace and dignity</div>
              </div>
            </div>
</div>
          </div>
        </div>
      </section>

      {/* Our Vision Mobile */}
      <section className="d-block d-md-none container-fluid">
        <div className="row justify-content-between">
          <div className="bg-orange vision-card-height mb-sm-18" />

          <div className="col-12 col-sm-12 col-md-6 col-lg-5 mt-n10">
            <div className="display-5">Our</div>
            <div className="display-2 fw-bold text-uppercase">Vision</div>
            <img src="/content/QCGlobal/images/blackswigly.svg" height="20" width="125" />
            <div className="h2 fw-light mt-7">We envision a world in which all human beings have the right to live in peace and dignity</div>
          </div>

          <div className="w-100 d-block d-sm-none"></div>

          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-12 text-center mt-12">
                <img className="col-12 vision-mobile-image" src="/content/QCGlobal/images/vision-pic.png" />
                <div className="w-100 d-block d-md-none"></div>
                <div className="col-12 mt-5 col-sm-5 offset-sm-4 text-end">
               
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section>
        <div className="container-lg container-fluid mb-13">
          <div className="row justify-content-between">
            <div className="col-2 col-md-1 col-lg-2 offset-lg-1 vertical-text-mission d-none d-md-block">
              <div className="display-5">Our</div>
              <div className="display-4 fw-bold text-uppercase">Mission</div>
            </div>

            <div className="col-2 offset-2 mt-15 mt-sm-0 d-block d-md-none">
              <div className="display-5">Our</div>
              <div className="display-4 fw-bold text-uppercase">Mission</div>
            </div>

            <div className="col-12 col-lg-8 col-md-9 offset-2 offset-md-0">
              <img className="col-12" src="/content/QCGlobal/images/mission.jpg" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 offset-md-3 offset-lg-4 mt-5 border-start border-dark">
              <p className="h2 text-primary f-ptSerif fst-italic lh-lg">
                We implement development and humanitarian projects, mobilize support and resources, and build effective partnerships to provide a decent life for all by:
              </p>
              <ul>
                <li className="h5 fw-normal mt-5 lh-lg">
                  Providing a decent life for children and their families
                </li>
                <li className="h5 fw-normal mt-5 lh-lg">
                  Alleviating the suffering of those affected by crises
                </li>
                <li className="h5 fw-normal mt-5 lh-lg">
                  Contributing to inclusive and sustainable development
                </li>
                <li className="h5 fw-normal mt-5 lh-lg">
                  Promoting peace and social cohesion
                </li>
                <li className="h5 fw-normal mt-5 lh-lg">
                  Promoting social development and charitable giving in the State of Qatar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
   
      <Footer/>
    </>
  );
};

export default WhoWeAre;