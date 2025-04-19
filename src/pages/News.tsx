import { useState } from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const QatarCharityNews = () => {
  const [newsPage, setNewsPage] = useState(2);
  const [showMore, setShowMore] = useState(true);
  
  const loadMoreNews = () => {
    // In a real implementation, this would fetch more news
    // For now, we'll just increment the page number as a placeholder
    setNewsPage(newsPage + 1);
    
    // Example: If we've reached a certain page number, hide the "More" button
    if (newsPage >= 5) {
      setShowMore(false);
    }
  };

  return (

    <>
    <Header />

    <section className="pt-13 pt-lg-16 pt-xl-17">
      <div className="container-fluid container-lg">
        <div className="newsinternationalheader">
          <div className="col-12 d-flex align-items-center">
            <h1 className="col-9 display-5 fw-medium pr-9 mb-0 text-uppercase">
              News
            </h1>
          </div>

          <div className="row pt-8 pt-md-10">
            <div className="col-12 col-md-7 col-xl-8 news-sec">
              <div
                className="card-img-top rounded-0"
                style={{
                  background: "url(/images/qcharity/2025-04-17_09-15-38-AM.jpg) top center",
                  backgroundSize: "cover",
                  height: "400px"
                }}
              ></div>
            </div>
            <div className="col-12 col-md-5 col-xl-4">
              <h4 className="col-12 pt-8 pt-md-0 lh-base mb-0 f-ptSerif fst-italic fw-bolder line-clamp line-clamp-3">
                Qatar Charity Delivers Over 5,600 Tons of Aid to Sudan War Victims Over Two Years
              </h4>
              <div className="row mt-7">
                <div className="col-12 line-clamp line-clamp-6 mb-5">
                  As the conflict in Sudan enters its third year on April 15, 2025, Qatar Charity continues to expand its humanitarian response. Over the past two years, the organization has delivered more than 5,600 tons of humanitarian aid, reaching approximately 1.75 million internally displaced people (IDPs) and conflict-affected individuals across safe regions in Sudan.

                  <br /><br />
                  Humanitarian Aid Distribution: Support provided to around 1.7 million displaced and war-affected individuals.
                  <br /><br />
                  Critical Health Interventions: Immediate response initiatives were launched for patients with kidney failure and cancer.
                  <br /><br />
                  Ongoing Food Assistance: Continued distribution of food baskets to hundreds of thousands of displaced individuals, supported by the Qatar Fund for Development (QFFD).
                  <br /><br />
                  Currently, field teams are active in multiple states, distributing 2,500 food baskets and 230 tons of dates, funded by the Qatar Fund for Development, and implemented in partnership with the Qatar Red Crescent in Sudan.
                </div>
                <p className="col-12 align-self-end d-flex align-items-center justify-content-between">
                  <small className="float-start text-end" style={{ color: "#38A4C3" }}>
                    17/04/2025
                  </small>

                  <a
                    href="/en/global/news/detailsinternational/24433-qatar-charity-delivers-over"
                    className="btn btn-primary float-end rounded-circle px-3 py-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="14"
                      viewBox="0 0 32 14"
                    >
                      <g id="Arrow">
                        <path
                          id="Path_16210"
                          d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                          transform="translate(15.504 22.586) rotate(-135)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-md-12">
            <div className="col-12 col-md-4 d-flex">
              <a
                href="/en/global/news/detailsinternational/24431-qatar-charity-brings-clean"
                className="col card rounded-0 border-0 py-7 text-body text-decoration-none mb-4"
                aria-current="true"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-16_08-47-17-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <h6 className="mb-5 pt-7 line-clamp line-clamp-2">
                  Qatar Charity brings clean water to over 10,000 people in Pakistan
                </h6>
                <div className="mb-3 line-clamp line-clamp-3">
                  <small>
                    Qatar Charity (QC) has successfully installed 80 hand pumps in remote areas of Pakistan's Khyber Pakhtunkhwa province, providing clean drinking water to over 10,000 beneficiaries.
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <sub className="mb-1 text-muted"> 16/04/2025</sub>
                  <sub className="link-primary">
                    More details
                    &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="10"
                      viewBox="0 0 32 14"
                    >
                      <g id="Arrow">
                        <path
                          id="Path_16210"
                          d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                          transform="translate(15.504 22.586) rotate(-135)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </sub>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <a
                href="/en/global/news/detailsinternational/24429-qatar-charity-thanks"
                className="col card rounded-0 border-0 py-7 text-body text-decoration-none mb-4"
                aria-current="true"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-15_08-26-49-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <h6 className="mb-5 pt-7 line-clamp line-clamp-2">
                  Qatar Charity thanks supporters of its Ramadan campaign 'Giving Lives On'
                </h6>
                <div className="mb-3 line-clamp line-clamp-3">
                  <small>
                    Doha, Qatar – April 14, 2025

                    With the generous support of philanthropists in Qatar, including individuals and commercial entities, Qatar Charity's (QC) 'Giving Lives On' campaign for the 1446 AH / 2025 Ramadan, successfully reached over 4.5 million people in 40 countries, including Qatar.
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <sub className="mb-1 text-muted"> 15/04/2025</sub>
                  <sub className="link-primary">
                    More details
                    &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="10"
                      viewBox="0 0 32 14"
                    >
                      <g id="Arrow">
                        <path
                          id="Path_16210"
                          d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                          transform="translate(15.504 22.586) rotate(-135)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </sub>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <a
                href="/en/global/news/detailsinternational/24427-qatar-charity%e2%80%99s-cataract"
                className="col card rounded-0 border-0 py-7 text-body text-decoration-none mb-4"
                aria-current="true"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-14_09-06-22-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <h6 className="mb-5 pt-7 line-clamp line-clamp-2">
                  Qatar Charity's cataract surgeries restore sight to 300 patients in Sri Lanka
                </h6>
                <div className="mb-3 line-clamp line-clamp-3">
                  <small>
                    Thanks to the generosity of donors in Qatar, Qatar Charity's (QC) Ibsar (Eyesight) initiative restored sight to more than 300 individuals in Colombo, Sri Lanka. Overseen by Qatar Charity's Sri Lanka Branch, the impactful cataract surgery project brought renewed hope to those suffering from vision loss.
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <sub className="mb-1 text-muted"> 14/04/2025</sub>
                  <sub className="link-primary">
                    More details
                    &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="10"
                      viewBox="0 0 32 14"
                    >
                      <g id="Arrow">
                        <path
                          id="Path_16210"
                          d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                          transform="translate(15.504 22.586) rotate(-135)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </sub>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-md-14 mb-md-14">
        <hr className="pulits-hr" />
      </div>

      <div className="container-fluid container-lg">
        <div className="row row-cols-md-4 mt-10" id="local" data-news-version="1" data-news-page={newsPage}>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24433-qatar-charity-delivers-over"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-17_09-15-39-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity Delivers Over 5,600 Tons of Aid to Sudan
                  </p>
                  <p className="mt-5 xs-font">
                    As the conflict in Sudan enters its third year on April 15, 2025, Qatar Charity
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/17/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24431-qatar-charity-brings-clean"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-16_08-47-17-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity brings clean water to over 10,000 people
                  </p>
                  <p className="mt-5 xs-font">
                    Qatar Charity (QC) has successfully installed 80 hand pumps in remote areas of
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/16/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24429-qatar-charity-thanks"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-15_08-26-49-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity thanks supporters of its Ramadan
                  </p>
                  <p className="mt-5 xs-font">
                    Doha, Qatar – April 14, 2025 With the generous support of
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/15/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24427-qatar-charity%e2%80%99s-cataract"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-14_09-06-22-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity's cataract surgeries restore sight to
                  </p>
                  <p className="mt-5 xs-font">
                    Thanks to the generosity of donors in Qatar, Qatar Charity's (QC) Ibsar
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/14/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24425-qatar-charity-and-djibouti%e2%80%99s"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-13_08-42-27-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity and Djibouti's health ministry
                  </p>
                  <p className="mt-5 xs-font">
                    Qatar Charity (QC) signed a memorandum of understanding (MoU) with
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/13/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24423-qatar-charity-emphasizes"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-04-13_08-33-57-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity emphasizes coordinated action at
                  </p>
                  <p className="mt-5 xs-font">
                    Qatar Charity (QC) hosted a panel session titled "Humanitarian
                  </p>
                  <p className="mt-9 text-muted">
                    <small>4/13/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24391-qatar-charity-extends-eid"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-03-27_02-23-22-PM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity extends Eid al-Fitr greetings
                  </p>
                  <p className="mt-5 xs-font">
                    As the crescent moon signals the end of Ramadan, Qatar Charity extends its
                  </p>
                  <p className="mt-9 text-muted">
                    <small>3/27/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="newsbody">
            <div className="col d-flex align-items-start">
              <a
                className="col card rounded-0 border-0 mb-10 text-decoration-none text-body"
                href="/en/global/news/detailsinternational/24360-qatar-charity-launches-%e2%80%9827th"
              >
                <div
                  className="card-img img-motion rounded-0 bg-cover"
                  style={{
                    backgroundImage: "url(/images/qcharity/2025-03-25_10-56-23-AM.jpg)",
                    height: "200px"
                  }}
                ></div>
                <div className="card-body border-bottom border-dark px-0">
                  <p className="fw-medium card-text mt-1">
                    Qatar Charity launches '27th Night Challenge' to
                  </p>
                  <p className="mt-5 xs-font">
                    As part of its Ramadan campaign 'Giving Lives On', Qatar Charity
                  </p>
                  <p className="mt-9 text-muted">
                    <small>3/25/2025</small>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {showMore && (
          <div id="divLoadMore" className="row mt-7 mb-7 mb-xl-17">
            <div className="col text-center">
              <a
                id="btnloadMore"
                data-size="8"
                className="text-decoration-none pointer rounded-circle fw-normal f-base text-body"
                data-toggle="button"
                onClick={loadMoreNews}
                role="button"
              >
                More
                <br />
                <img src="/images/qcharity/Circle-BTN.svg" className="mt-2" alt="Load more" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>

    <Footer />
    </>
  );
};

export default QatarCharityNews;