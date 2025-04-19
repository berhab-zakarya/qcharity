
const NewsSection = () => {
  return (
    <section className="news-sec">
      <div className="container pt-10">
        <div className="row gx-6 gx-xl-9 mb-10">
          <div className="col-12 col-md-8 col-xl-9 d-flex align-items-center">
            <h1 className="display-5 fw-medium pr-9 mb-0 text-uppercase">
              News &amp; Last updates
            </h1>
          </div>
          <div className="col-12 col-md-3 col-xl-2 offset-md-1 mt-3 mt-md-0">
            <a href="/en/global/news/newsinternational" className="btn btn-outline-primary rounded-pill float-md-end">
              All News
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            <a href="/en/global/news/detailsinternational/24433-qatar-charity-delivers-over" className="text-decoration-none text-body">
              <div
                className="card-img-top rounded-0"
                style={{
                  background: 'url(https://www.qcharity.org/Exportpath/WebStoryNews/2025/4/0-Photo2025-04-17_09-15-38-AM.jpg) top center',
                }}
              ></div>
              <div className="row px-0 pt-7">
                <h4 className="col-12 col-md-7 mb-0 f-ptSerif fst-italic fw-bolder">
                  Qatar Charity Delivers Over 5,600 Tons of Aid to Sudan War Victims Over Two Years
                </h4>
                <small className="d-none d-md-block col-md-5 text-end" style={{ color: '#38a4c3' }}>
                  17/04/2025
                </small>
              </div>
            </a>

            <div className="row mt-7">
              <div className="col-12 col-md-7">
                As the conflict in Sudan enters its third year on April 15, 2025, Qatar Charity continues to expand its humanitarian response. Over the past two years, the organization has delivered more than 5,600 tons of humanitarian aid, reaching approximately 1.75 million internally displaced people (IDPs) and conflict-affected individuals across safe regions in Sudan. Humanitarian Aid Distribution:...
              </div>
              <p className="col-12 col-md-5 align-self-end d-flex align-items-center justify-content-between justify-content-lg-end">
                <small className="d-block float-start d-md-none text-end" style={{ color: '#38a4c3' }}>
                  17/04/2025
                </small>
                <a href="/en/global/news/detailsinternational/24433-qatar-charity-delivers-over" className="btn btn-primary float-end rounded-circle px-4 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 32 14">
                    <defs>
                      <clipPath id="clip-path">
                        <rect width="32" height="14" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#clip-path)">
                      <path
                        d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                        transform="translate(15.504 22.586) rotate(-135)"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </p>
            </div>
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row row-cols-1 m-0">
              {[{
                href: '/en/global/news/detailsinternational/24431-qatar-charity-brings-clean',
                title: 'Qatar Charity brings clean water to over 10,000 people in Pakistan',
                desc: 'Qatar Charity (QC) has successfully installed 80 hand pumps in remote areas of...',
                date: '16/04/2025'
              }, {
                href: '/en/global/news/detailsinternational/24429-qatar-charity-thanks',
                title: 'Qatar Charity thanks supporters of its Ramadan campaign ‘Giving Lives On’',
                desc: 'Doha, Qatar – April 14, 2025 With the generous support of...',
                date: '15/04/2025'
              }, {
                href: '/en/global/news/detailsinternational/24427-qatar-charity%e2%80%99s-cataract',
                title: 'Qatar Charity’s cataract surgeries restore sight to 300 patients in Sri Lanka',
                desc: 'Thanks to the generosity of donors in Qatar, Qatar Charity’s (QC) Ibsar...',
                date: '14/04/2025'
              }].map(({ href, title, desc, date }, i) => (
                <a
                  key={i}
                  href={href}
                  className="col bg-lighter py-7 text-body text-decoration-none mb-4"
                  aria-current="true"
                >
                  <h6 className="mb-4">{title}</h6>
                  <p className="mb-1">
                    <small>{desc}</small>
                  </p>
                  <div className="col-4">
                    <hr className="my-6" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="f-xs mb-1">{date}</p>
                    <p className="f-xs mb-1 link-primary">
                      More details &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 32 14">
                        <defs>
                          <clipPath id="clip-path">
                            <rect width="32" height="14" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#clip-path)">
                          <path
                            d="M3.414,19.988H9a1.278,1.278,0,0,1,.223.025,1.04,1.04,0,0,1,.7,1.358,1.018,1.018,0,0,1-.812.611A.832.832,0,0,1,9,21.988H.944a.821.821,0,0,1-.111-.013A1.023,1.023,0,0,1,.006,21.1,1.037,1.037,0,0,1,0,20.988v-8a1.036,1.036,0,0,1,1.383-.924,1.023,1.023,0,0,1,.611.812A1.051,1.051,0,0,1,2,12.988v5.586L20.294.28a1.939,1.939,0,0,1,.175-.139,1.028,1.028,0,0,1,1.476.516,1.011,1.011,0,0,1-.1.862,1.964,1.964,0,0,1-.14.176L3.414,19.988Z"
                            transform="translate(15.504 22.586) rotate(-135)"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;