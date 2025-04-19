

const DevelopmentHumanitarianAid: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="display-4 mb-4">DEVELOPMENT & HUMANITARIAN AID</p>
            <p className="text-primary h1">2018 - 2022</p>
          </div>

          <div className="row gx-xl-9 row-cols-1 row-cols-md-4 gx-lg-6 gx-xl-9 align-items-center justify-content-center mt-5 mt-md-11 mx-auto mx-md-0">
            <div className="col text-center bg-lighter mx-4">
              <img className="col-12 mt-9" src="/images/graph1.svg" />
              <p className="font-20 fw-bold mt-8">
                Development sectors of intervention
              </p>
              <p className="font-20 fw-bold mb-8">2018-2022</p>
            </div>

            <div className="col text-center bg-lighter mx-4 mt-5 mt-md-0">
              <img className="col-12 mt-9" src="/images/graph2.svg" />
              <p className="font-20 fw-bold mt-8">
                Humanitarian sectors of intervention
              </p>
              <p className="font-20 fw-bold mb-8">2018-2022</p>
            </div>

            <div className="col text-center bg-lighter mx-4 mt-5 mt-md-0">
              <img className="col-12 mt-9" src="/images/graph3.svg" />
              <p className="font-20 fw-bold mt-8">Total impact</p>
              <p className="font-20 fw-bold mb-8">2018-2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentHumanitarianAid;
