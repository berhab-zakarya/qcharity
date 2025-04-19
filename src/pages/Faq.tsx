import React from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const Faq: React.FC = () => {
  return (
    <>
      <Header />

      <section className="FaqSection first-section">
        <div className="container">
          <div className="col-12 text-center">
            <h1 className="col-12 col-md-8 fw-bolder offset-md-2 display-2 text-primary text-uppercase">
              Frequently Asked Questions
            </h1>
            <hr className="hr-30-percent mt-7" />
          </div>
          <div className="col-12 col-md-10 offset-md-1 pt-md-13 pt-0">
            <div className="accordion accordion-flush" id="accordionFaq">
              {/* Question 1 */}
              <div className="accordion-item">
                <p className="accordion-header h4" id="ques1">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques1Ans"
                    aria-expanded="false"
                    aria-controls="ques1Ans"
                  >
                    <div className="h4 fw-medium">
                      How are projects approved?
                    </div>
                  </button>
                </p>
                <div
                  id="ques1Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques1"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Qatar Charity follows a results-oriented approach to plan,
                      manage, and implement proper humanitarian response with
                      utmost consideration to the needs and development
                      indicators of targeted communities. Qatar Charity works in
                      full recognition of the pressing global humanitarian
                      challenges in development, education, health, water,
                      energy, and climate change.
                    </p>
                    <p className="col">
                      Projects are approved based on specific criteria,
                      including the following:
                    </p>
                    <p className="col">
                      • Consistency with the general strategy of Qatar Charity
                    </p>
                    <p className="col">
                      • Compatibility with the broad humanitarian sector
                      strategy
                    </p>
                    <p className="col">
                      • Humanitarian needs and development indicators
                    </p>
                    <p className="col">• Institutional capacity</p>
                    <p className="col">• Availability of funding</p>
                    <p className="col">• Efficiency and effectiveness</p>
                    <p className="col">• Risks</p>
                    <p className="col">• Impact and sustainability.</p>
                    <p className="col">
                      A designated committee evaluates all project proposals and
                      ensures they align with the above mentioned standards.
                      Proposals that don't comply with Qatar Charity's
                      intervention goals and fulfill its social and
                      developmental objectives will not be approved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="ques2">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques2Ans"
                    aria-expanded="false"
                    aria-controls="ques2Ans"
                  >
                    <div className="h4 fw-medium">How are projects funded?</div>
                  </button>
                </h2>
                <div
                  id="ques2Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques2"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Fundraising is the pillar of aid. It is a mobilization
                      tool that enables NGOs to execute their projects and
                      maintain humanitarian action. Qatar Charity adopts a
                      community-focused fundraising model that is key to its
                      independence: More than 90% of our funds come from
                      individuals. Qatar Charity's fundraising strategy does not
                      solely aim to raise funds; instead, it engages the local
                      community in the charity sector as an integral actor in
                      humanitarian work and maintains a relationship with donor
                      individuals and institutions based on trust and
                      reciprocity. Donors are provided with most effective
                      traceability tools that allow them to track their donation
                      from the moment we receive it to the completion of the
                      project.
                    </p>
                    <p className="col">
                      Qatar Charity also benefits from funds granted by
                      institutional donors for specific projects such as Qatar
                      Fund for Development, UN agencies i.e. UNHCR, WFP, FAO
                      etc. and international organizations and networks i.e. the
                      Start Network.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="ques3">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques3Ans"
                    aria-expanded="false"
                    aria-controls="ques3Ans"
                  >
                    <div className="h4 fw-medium">
                      How are partners approved?
                    </div>
                  </button>
                </h2>
                <div
                  id="ques3Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques3"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Qatar Charity recognizes the importance of joint action to
                      realize the sustainable development goals. While we place
                      high value on our long-standing partnerships with
                      governments, UN agencies and large organizations, we also
                      envision strategic and sustainable partnerships with
                      grass-root organizations and communities. Qatar Charity
                      also implements a set of precautionary measures while
                      choosing its partners through its due diligence policy.
                      This includes capacity assessments, local governments'
                      consultation and screening against all major sanctions
                      lists, including UN sanction list, EU sanction list, US
                      sanction list and national sanction lists in the
                      beneficiary country.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="ques4">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques4Ans"
                    aria-expanded="false"
                    aria-controls="ques4Ans"
                  >
                    <div className="h4 fw-medium">
                      Where does my donation go?
                    </div>
                  </button>
                </h2>
                <div
                  id="ques4Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques4"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Throughout the years, we have optimized our financial
                      performance and increased our efficiency to guarantee the
                      best possible value-for-money to our donors. We are now
                      able to spend 94% of your donation on programs and
                      services that fulfill our social mission. For every dollar
                      we receive, we spend 94 cents on humanitarian and
                      development projects and programs and allocate the
                      remaining 6 cents to raise more funds and cover overhead
                      expenses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="ques5">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques5Ans"
                    aria-expanded="false"
                    aria-controls="ques5Ans"
                  >
                    <div className="h4 fw-medium">
                      How are beneficiaries chosen?
                    </div>
                  </button>
                </h2>
                <div
                  id="ques5Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques5"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Qatar Charity implements a transparent policy to ensure
                      reaching out to those in need of aid. This policy assures
                      fair access to Qatar Charity's services while upholding
                      accountability and non-bias standards. At Qatar Charity,
                      meeting communities' urgent need for aid is the only
                      standard for choosing beneficiaries. Qatar Charity's
                      beneficiaries' selection and approval policy is guided by
                      the "Core Humanitarian Standards" that stipulates non-bias
                      and focusing humanitarian response on communities/
                      individuals in need only. Our intervention is not based on
                      any discriminatory standards including country of origin,
                      ethnicity, political affiliation, social class, or faith.
                      Accordingly, Qatar Charity adopts a specific set of
                      guidelines that are based on transparency, impartiality,
                      the right for assistance, and prioritizing vulnerable
                      individuals such as persons with disabilities, children,
                      women, families supported by women and the elderly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="ques6">
                  <button
                    className="accordion-button collapsed fw-medium accordion-button-plus text-start ps-md-0 ps-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ques6Ans"
                    aria-expanded="false"
                    aria-controls="ques6Ans"
                  >
                    <div className="h4 fw-medium">
                      I have read allegations about Qatar Charity online, are
                      those allegations factual?
                    </div>
                  </button>
                </h2>
                <div
                  id="ques6Ans"
                  className="accordion-collapse collapse"
                  aria-labelledby="ques6"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="col">
                      Qatar Charity is a legitimate, wholly lawful international
                      non-governmental organization registered under the
                      Regulatory Authority for Charitable Activities in the
                      State of Qatar and established in the accordance of the
                      laws and regulations governing charitable work in Qatar in
                      1992. Since inception, Qatar Charity has worked tirelessly
                      with UN agencies, international NGOs, local governments
                      and humanitarian networks to deliver life-saving
                      humanitarian assistance and development projects in more
                      than 50 countries.
                    </p>
                    <p className="col">
                      Today, Qatar Charity works through its 29 country offices
                      based in the world's most underprivileged zones to bring
                      about lasting change and solutions to poverty, hunger,
                      unemployment, gender inequality, child abuse and
                      displacement. Qatar Charity is a leading organization
                      within the international humanitarian system and was
                      granted over the years:
                    </p>
                    <p className="col">
                      - Special Status membership at the Economic and Social
                      Council of the United Nations in 1994
                    </p>
                    <p className="col">
                      - Observer membership at the United Nations International
                      Organization for Migration in 2004
                    </p>
                    <p className="col">
                      - Full membership in the UK based Start Network, one of
                      the most prominent and selective alliances of NGOs
                      worldwide in 2017
                    </p>
                    <p className="col">
                      - Full membership in the Geneva-based Core Humanitarian
                      Standards Alliance, a leading network that ensures
                      accountability to affected populations, in 2018
                    </p>
                    <p className="col">
                      - Full membership in the United Nations Department of
                      Global Communication in 2018
                    </p>
                    <p className="col">
                      The true factual position is that Qatar Charity has been
                      the subject of allegations in the aftermath of the
                      blockade imposed on the State of Qatar by the blockade
                      countries, resulting in the automatic, baseless and
                      unlawful listing of all Qatar-based NGOs, media
                      institutions and sports networks on sanction lists in
                      those countries for political motives. Qatar Charity has
                      been a leading organization in the Middle East since
                      inception and had been awarded dozens of government awards
                      in those countries for its governance and achievements
                      over the course of a decade up until the blockade. The
                      designation of Qatar Charity as an entity of concern has
                      no legal standing in any other country and has been openly
                      rejected by United Nations and other countries. We
                      continue to work closely with all governments to provide
                      timely, effective and life-saving assistance whenever and
                      wherever needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-5"> </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
