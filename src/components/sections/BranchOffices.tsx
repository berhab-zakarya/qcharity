import React from 'react';

interface BranchOffice {
  countryCode: string;
  name: string;
  phone: string;
  flagUrl: string;
}

const BranchOffices: React.FC = () => {
  const branches: BranchOffice[] = [
    {
      countryCode: '2',
      name: 'Palestine Branch',
      phone: '0097082847338',
      flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/2.png'
    },
    {
      countryCode: '2',
      name: 'Palestine Branch',
      phone: '009722240717',
      flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/2.png'
    },
    // Add all other branches here following same pattern
  ];

  return (
    <section className="pt-xl-17 pt-md-15 pt-12">
      <div className="container-fluid container-lg">
        <h1 className="display-5">
          Other branches
        </h1>
        <div className="row gy-7 gy-xl-13 gy-md-12 pt-lg-11 row-cols-xl-4 row-cols-md-3 row-cols-2 justify-content-between">
          {branches.map((branch, index) => (
            <div key={index} className="col-6 col-md-4 col-xl-3">
              <img 
                className="mt-9" 
                src={branch.flagUrl} 
                width="50" 
                height="30"
                alt={`${branch.name} flag`}
              />
              <h4 className="mt-5">
                {branch.name}
              </h4>
              <div className="d-none d-md-block">
                <div className="mt-5">
                  <img 
                    src="/content/QCGlobal/images/phone-icon.png"
                    alt="Phone icon"
                  />
                  <span className="ms-6 fw-bold">
                    <a 
                      className="pull-left QC_defult-text margin-5-top" 
                      href={`tel:${branch.phone}`} 
                      style={{ direction: 'ltr', lineHeight: '7px', fontFamily: 'Arial' }}
                    >
                      {branch.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-12 mt-xl-16 mt-md-14" />
      </div>
    </section>
  );
};

export default BranchOffices;