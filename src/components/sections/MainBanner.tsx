import React from "react";
import "../../qc.global.css";

const MainBanner: React.FC = () => {
  return (
    <main
      className="main-banner background-index bg-cover bg-cover-center px-xxl-10 px-xl-5 text-white overflow-hidden"
      style={{}}
    >
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 align-self-end align-self-sm-center">
            <div className="rounded-circle align-self-center text-nowrap main-banner-circle">
              <p className="display-5 ml12Letter">Transforming</p>
              <p>
                <span className="display-1 text-uppercase fw-bold">
                  {" "}
                  lives{" "}
                </span>
                <span className="display-5"> for </span>
                <span className="display-3 fw-bold"> 40 </span>
              </p>
              <p>
                <span className="display-3 fw-bold text-uppercase">
                  {" "}
                  Years{" "}
                </span>
                <span className="display-5"> and </span>
                <span className="display-5"> counting… </span>
              </p>
              <h5 className="mt-3 fw-normal d-none d-sm-block">
                Since 1984, we have been working in the most vulnerable
                <br />
                countries to save lives in emergencies and find durable
                <br />
                solutions to poverty, hunger and inequalities.
              </h5>
              <div className="rounded-circle small-circle float-end mt-8 mt-md-0 elemAnimateOnScroll"></div>
            </div>
          </div>
        </div>
        <div className="row mt-n10 mt-md-n12 mt-lg-n13 mt-xl-n14">
          <div className="col-12 align-self-end">
            <div className="row justify-content-between">
              <div className="col gx-10 gx-sm-9"></div>
              <div className="col text-center d-none d-md-block">
                <div className="col text-center d-none d-md-block">
                  <div>
                    
                  </div>
                </div>
              </div>
              <div className="col text-end d-none d-md-block">
                <div className="">
                  <sub> © Photograph is Copyright Takaful </sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid h-100 d-flex pb-5 px-8"></div>
    </main>
  );
};

export default MainBanner;
