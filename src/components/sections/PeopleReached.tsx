// components/PeopleReached.jsx

const PeopleReached = () => {
    return (
      <section>
          <style>
        {`
          .bg-gray-rounded {
            background: #f2f3f3 0% 0% no-repeat padding-box;
            border-radius: 74px;
            opacity: 1;
            width: 148px;
            height: 148px;
          }
        `}
      </style>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-10">
              <p className="h1">PEOPLE WE REACHED IN 2022</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-3 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/pencil-icon.svg" />
              </div>
              <p className="h2 mt-3">274,000</p>
              <p className="font-20">Education</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-3 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/water-icon.svg" />
              </div>
              <p className="h2 mt-3">2.1M</p>
              <p className="font-20">Wash</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-3 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/welfare-icon.svg" />
              </div>
              <p className="h2 mt-3">631,000</p>
              <p className="font-20">Social welfare</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-3 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/health-icon.svg" />
              </div>
              <p className="h2 mt-3">472,000</p>
              <p className="font-20">Health & nutrition</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-11 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/housing-icon.svg" />
              </div>
              <p className="h2 mt-3">13,200</p>
              <p className="font-20">Social Housing</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-11 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/food-icon.svg" />
              </div>
              <p className="h2 mt-3">537,200</p>
              <p className="font-20">Food Security</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-11 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/economic-icon.svg" />
              </div>
              <p className="h2 mt-3">26,000</p>
              <p className="font-20">Economic Empowerment</p>
            </div>
  
            <div className="col-6 col-md-3 text-center pt-11 d-flex flex-column align-items-center">
              <div className="col-12 bg-gray-rounded d-flex align-items-center justify-content-center">
                <img width="48" height="48" src="/icons/shelter-icon.svg" />
              </div>
              <p className="h2 mt-3">-</p>
              <p className="font-20">Shelter, NFIs & livelihoods</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default PeopleReached;