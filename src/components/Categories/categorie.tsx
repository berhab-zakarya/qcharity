import { useState } from "react"; // You'll need to install bootstrap
import React from "react";

const DonationBanner: React.FC<DonationBannerProps> = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [amount, setAmount] = useState<number | "">("");

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount);
  };

  const handleDonateNow = () => {
    // Implement donation logic
  };

  return (
    <>
      <main
        className="main-banner bg-cover bg-cover-center text-white"
        style={{
          backgroundImage:
            "url(https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Humanitarianassistance-Banner.jpg)",
          backgroundPosition: "75%",
        }}
      ></main>

      <div id="QCdo" className="container mt-n17">
        <div className="container center">
          <div className="col-12 left bg-orange">
            <div className="row justify-content-between">
              <div className="bg-white text-centers col-xxl-2 col-3 text-center">
                <img
                  className="mt-11 img-size-icon"
                  src="https://www.qcharity.org/Exportpath/WebStoryNews/2021/3/Humanitarian-assistance.png"
                  alt="Humanitarian assistance"
                />
              </div>
              <div className="col-xxl-10 gx-4 gx-xl-13 col-9">
                <h1
                  className="display-4 text-uppercase fw-bold p-9 px-0"
                  style={{ borderBottom: "1px solid #000000" }}
                >
                  Social Welfare
                </h1>
              </div>
            </div>
          </div>

          <div className="col-12 left bg-orange">
            <div className="row bg-orange">
              <div className="h1 offset-xxl-2 col-xxl-8 col-md-8 col-sm-8 col-12 f-ptSerif fst-italic p-9 lh-base justify-content-between align-items-end">
                In the world's poorest countries, around 1 in 4 children are
                engaged in child labor.
              </div>
              <div className="col-10 col-md-4 col-xl-2 p-9 pt-0 p-md-0">
                <button
                  type="button"
                  className="btn btn-outline-dark rounded-pill mt-md-13"
                  data-bs-toggle="modal"
                  data-bs-target="#donationModal"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <div className="modal fade" id="donationModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Donate now to provide</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              {/* Donation Type Selection */}
              <div className="row col-12 mt-2 mb-7 justify-content-center gx-0">
                <label
                  className={`col-5 col-md-3 rounded-pill-start rounded-0 btn ${
                    donationType === "one-time"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } text-center`}
                >
                  <input
                    type="radio"
                    hidden
                    checked={donationType === "one-time"}
                    onChange={() => setDonationType("one-time")}
                  />
                  One Time
                </label>
                <label
                  className={`col-5 col-md-3 rounded-pill-end rounded-0 btn ${
                    donationType === "monthly"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } text-center`}
                >
                  <input
                    type="radio"
                    hidden
                    checked={donationType === "monthly"}
                    onChange={() => setDonationType("monthly")}
                  />
                  Monthly
                </label>
              </div>

              {/* Amount Selection */}
              <div className="text-center">
                <p className="fw-medium text-uppercase">Set donation amount</p>
              </div>

              <div className="col-11 col-md-9 offset-md-1">
                <div className="row input-group justify-content-between">
                  {[50, 100, 300, 500, 1000].map((btnAmount) => (
                    <div className="col-1" key={btnAmount}>
                      <button
                        className={`btn ${
                          amount === btnAmount
                            ? "btn-primary"
                            : "btn-outline-primary"
                        } rounded-circle px-3 btnAmounts`}
                        onClick={() => handleAmountSelect(btnAmount)}
                      >
                        {btnAmount}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Amount Input */}
              <div className="col-12 mt-7">
                <input
                  className="col-12 form-control text-center rounded-pill"
                  type="number"
                  placeholder="Another Amount Q.R."
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="modal-footer justify-content-between mt-md-15">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDonateNow}
              >
                Donate now
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container mb-13">
          <div className="row mt-6 justify-content-between">
            <div className="col-xl-3 col-sm-12">
              <img
                alt=""
                className="pb-7"
                src="/content/QCGlobal/images/Challeng-Icon.svg"
              />
              <p>Challenges</p>
            </div>

            <div className="col-sm-12 col-xl-6 mt-1">
              <p>
                Vulnerable groups such as children, women and elderly face a
                higher risk of falling into and remaining in poverty.
              </p>
              <p>
                For widows living in underdeveloped and developing countries,
                the lack of economic opportunities and prospects for livelihood
                often force children out of school and into labor, thus
                perpetuting the cycle of poverty.
              </p>
              <p>
                Regular financial support helps lift these families out of
                poverty and help children and their communities access
                life-changing basics like education, clean water and healthcare.
                Since inception,
              </p>
              <p>
                Qatar charity has made child sponsorship its flagship program to
                fight poverty at its source and to give children and their
                families a safe and enabling environment where they can thrive
                and prosper.
              </p>
            </div>
          </div>
        </div>
        <hr className="pulits-hr my-15" />
      </section>

   

      <section id="QCdo">
        <div className="container">
          <div className="row fw-bold-xs">
            <div className="col-12">
              <div className="row fw-bold-xs">
                <div className="col-12">
                  <p className="display-2 f-ptSerif">
                    Qatar Charity's
                    <span className="text-primary text-uppercase">
                      {" "}
                      approach{" "}
                    </span>
                  </p>

                  <div className="col-xl-8 offset-xl-4 col-md-8 offset-md-4 col-12 mt-md-7 mb-12 mb-md-0">
                    <p className="display-2 f-ptSerif">
                      to the global{" "}
                      <span className="text-yellow-background">
                        social welfare challenges
                      </span>
                    </p>
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
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-left.jpg"
                        alt="Humanitarian assistance left"
                      />
                    </div>
                    <div className="col-xl-3 col-6 mt-n15 mb-8">
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-right.jpg"
                        alt="Humanitarian assistance right"
                      />
                    </div>
                  </div>

                  <div className="row row-cols-2">
                    <div className="col-xl-2 col-4 mt-n10">
                      <img
                        className="col-12 mb-15"
                        src="/content/QCGlobal/images/Arrow.png"
                        alt="Arrow"
                      />
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-8 mt-n3">
                      <img
                        className="col-12"
                        src="/content/QCGlobal/images/Humanitarianassistance-M-bottom.jpg"
                        alt="Humanitarian assistance bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 offset-xl-3 col-xl-7">
              <h1>Our objectives</h1>
              <p>
                {[
                  "Building resilience in vulnerable communities",
                  "Protecting the dignity of underprivileged groups",
                  "Increasing access to equal opportunities of income, health and education",
                  "Providing access to social care and protection",
                  "Eliminating violence and abuse driven by poverty",
                  "Reducing inequality through inclusive empowerment of vulnerable people",
                ].map((objective, index) => (
                  <React.Fragment key={index}>
                    • {objective}
                    <br />
                  </React.Fragment>
                ))}
              </p>

              <h1>Areas of Intervention</h1>
              {[
                "Child sponsorship",
                "Providing small loans.",
                "Supporting small-scaled income generating projects",
                "Cash assistance and livelihood",
                "Providing food, medical, and psychological support",
                "Seasonal aid (Ramadan, Eid...)",
                "Providing financial aid to debtors",
              ].map((area, index) => (
                <p key={index}>• {area}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="WSP">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="display-4 font-weight-medium text-uppercase">
                Social Welfare projects
              </p>
              <span className="text-primary h2">(2014 - 2018)</span>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-xl-3 justify-content-between mt-10">
            {[
              {
                image:
                  "https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-36-PM.png",
                value: "203,000,000 $",
                text: "Expenditure (in USD)",
              },
              {
                image:
                  "https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-41-09-PM.png",
                value: "1,070,000",
                text: "children, women, people with disabilities, elderly and vulnerable communities",
              },
              {
                image:
                  "https://www.qcharity.org/Exportpath/InfoGraph/2021/2/0-Photo2021-02-24_01-40-26-PM.png",
                value: "40",
                text: "through 30 field offices and implementing partners",
              },
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="text-center pt-15">
                  <img className="pb-7" src={item.image} alt="..." />
                  <div className="card-body">
                    <h3 className="card-title display-5 fw-bold f-ptSerif">
                      {item.value}
                    </h3>
                  </div>
                  <p className="card-text mb-9 text-gray">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .spotlight .pulits-hr {
          width: 100%;
        }
        .spotlight .pulits-hr:after {
          left: 100%;
        }
      `}</style>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-5 offset-xl-0">
              <h1 className="display-4">OUR IMPACT</h1>
              <h1 className="h2 text-primary">in 2022</h1>
            </div>

            <div className="col-12 col-lg-7 offset-lg-1 col-xl-6 offset-xl-1 d-flex flex-row">
              <img
                src="/content/QCGlobal/images/our_impact_icon.png"
                alt="Impact icon"
              />

              <div className="flex-col ms-3">
                <p className="display-5">2.1 Million</p>
                <p className="h4">
                  had access to safe drinking water and sanitation services
                </p>
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
              <h1 className="lh-base display-4">{/* Add your title here */}</h1>
              <div className="w-100"></div>
              <img
                src="/content/QCGlobal/icons/Path-16213.svg"
                alt="Decorative path"
                className=""
              />
            </div>
            <p className="col-12 col-lg-6 offset-lg-2 col-xl-5 offset-xl-2 text-primary h2 f-ptSerif fst-italic">
              {/* Add your text content here */}
            </p>

            <div className="text-center mt-10">
              <img
                className="col-12"
                src="/content/QCGlobal/images/spotlight_global_ph.png"
                alt="Global spotlight"
              />
            </div>
          </div>

          <div className="row justify-content-between mt-10">
            <div className="col-12 col-md-6 col-lg-5">
              <p>{/* Add your content here */}</p>
            </div>

            <div className="col-12 col-md-5">
              <p>{/* Add your content here */}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationBanner;
