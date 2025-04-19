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
      {
        countryCode: '11',
        name: 'Pakistan Branch',
        phone: '0092-51-2221701/02',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/11.png'
      },
      {
        countryCode: '529',
        name: 'Sudan Branch',
        phone: '00249121391753',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/529.png'
      },
      {
        countryCode: '62',
        name: 'Kosovo Branch',
        phone: '37744272790',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/62.png'
      },
      {
        countryCode: '8',
        name: 'Bangladesh Branch',
        phone: '0088029883439',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/8.png'
      },
      {
        countryCode: '58',
        name: 'Niger Branch',
        phone: '0022790002012',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/58.png'
      },
      {
        countryCode: '45',
        name: 'Mali Branch',
        phone: '0022366772998',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/45.png'
      },
      {
        countryCode: '35',
        name: 'Somalia Branch',
        phone: '00252615545533',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/35.png'
      },
      {
        countryCode: '39',
        name: 'Mauritania Branch',
        phone: '+22245290319',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/39.png'
      },
      {
        countryCode: '47',
        name: 'Burkina Faso Branch',
        phone: '22670461532',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/47.png'
      },
      {
        countryCode: '29',
        name: 'Comoros Branch',
        phone: '002693579647 - 002694420282',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/29.png'
      },
      {
        countryCode: '5',
        name: 'Yemen Branch',
        phone: '00967738888954',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/5.png'
      },
      {
        countryCode: '636',
        name: 'Tunisia Branch',
        phone: '0021670732301',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/636.png'
      },
      {
        countryCode: '60',
        name: 'Albania Branch',
        phone: '35542404000',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/60.png'
      },
      {
        countryCode: '59',
        name: 'Bosnia and Herzegovina Branch',
        phone: '0038762127835',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/59.png'
      },
      {
        countryCode: '56',
        name: 'Djibouti Branch',
        phone: '0025321341438',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/56.png'
      },
      {
        countryCode: '44',
        name: 'Chad Branch',
        phone: '0023563966236',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/44.png'
      },
      {
        countryCode: '41',
        name: 'Kenya Branch',
        phone: '0097466916066',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/41.png'
      },
      {
        countryCode: '27',
        name: 'Turkey Branch',
        phone: '00905354490844',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/27Final.png'
      },
      {
        countryCode: '50',
        name: 'Ghana Branch',
        phone: '00233541176567',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/50.png'
      },
      {
        countryCode: '25',
        name: 'Nepal Branch',
        phone: '009779803456734',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/25.png'
      },
      {
        countryCode: '31',
        name: 'Kyrgyzstan Branch',
        phone: '+996990958500',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/31.png'
      },
      {
        countryCode: '17',
        name: 'Sri Lanka Branch',
        phone: '00',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/17.png'
      },
      {
        countryCode: '36',
        name: 'Tanzania Branch',
        phone: '00255222600075',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/36.png'
      },
      {
        countryCode: '48',
        name: 'Senegal Branch',
        phone: '00221786863466',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/48.png'
      },
      {
        countryCode: '43',
        name: 'Gambia Branch',
        phone: '+2207997140',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/43.png'
      },
      {
        countryCode: '42',
        name: 'Morocco Branch',
        phone: '002126969485599',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/42.png'
      },
      {
        countryCode: '40',
        name: 'Nigeria Branch',
        phone: '002347011242828',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/40.png'
      },
      {
        countryCode: '618',
        name: 'Malaysia Branch',
        phone: '0060322760376',
        flagUrl: 'https://www.qcharity.org/PortalExportPath//CountryImages/618.png'
      }
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