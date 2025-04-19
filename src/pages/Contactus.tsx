import React, { useState, FormEvent } from 'react';
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';

interface ContactFormData {
  personName: string;
  personEmail: string;
  personMobile: string;
  message: string;
}

const Contactus: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    personName: '',
    personEmail: '',
    personMobile: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header/>
    <div className="text-center mt-4">                      
     </div>
    <main className="contactus bg-cover h-auto mt-20 pt-5"> {/* or pt-md-6, pt-lg-7 */}
      <div className="container-fluid container-lg">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 pt-13 pt-md-17">
            <h1 className="display-2 text-primary text-uppercase">
              Contact us
            </h1>
            <p>
              Our offices around the world.
            </p>
          </div>
          <div className="col-12 col-md-7">
            <iframe 
              className="pt-lg-10 pt-xxl-0 d-none d-md-block" 
              src="https://www.google.com/maps/d/embed?mid=139qxItN7fqoDznyCv6_H6HYuic9AAVOs&z=9&language=en" 
              width="640" 
              height="480"
              title="Google Map"
            />
            <img 
              className="d-md-none" 
              src="/Content/QCGlobal/images/map-mobile-contactus.png"
              alt="Mobile map"
            />
            <h1 className="d-md-none mt-9">
              Main Branch
            </h1>
            <img 
              className="mt-9" 
              src="https://www.qcharity.org/PortalExportPath//CountryImages/542.png" 
              width="45" 
              height="27"
              alt="Qatar flag"
            />
            <h4 className="mt-5">
              Qatar Branch
            </h4>
            <div className="row justify-content-between">
              <div className="col-12 col-md-6">
                <div className="mt-8 fw-bold">
                  <img 
                    src="/Content/QCGlobal/images/location-icon.png"
                    alt="Location icon"
                  />
                  <span className="ms-6 fw-bold">PO.BOX 1224 Doha, Qatar</span>
                </div>
                <div className="mt-5">
                  <img 
                    src="/Content/QCGlobal/images/phone-icon.png"
                    alt="Phone icon"
                  />
                  <span className="ms-6 fw-bold">
                    <a 
                      className="pull-left QC_defult-text margin-5-top" 
                      href="tel:+974 44290000" 
                      style={{ direction: 'ltr', lineHeight: '14px', fontFamily: 'Arial' }}
                    >
                      +974 44290000
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-end px-md-0 px-xl-6">
                <div className="d-none d-md-block">
                  <div className="mt-5">
                    <span className="h1 ms-10 align-bottom">Main Branch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
      </div>

      {/* Contact Form Section */}
      <section className="pt-xl-16 pt-md-14 pt-12">
        <div className="container-fluid container-lg">
          <div className="row justify-content-between">
            <div className="col-12 col-sm-5 col-lg-4">
              <h1 className="display-4">
                Contact Form
              </h1>
            </div>

            <div className="col-12 col-md-6">
              <div className="row mt-7 mt-md-0">
                <form onSubmit={handleSubmit}>
                  <div className="col-12">
                    <div className="form">
                      <input
                        className="form-control rounded-pill border-1 text-muted"
                        type="text"
                        name="personName"
                        placeholder="Name"
                        value={formData.personName}
                        onChange={handleInputChange}
                        required
                        minLength={6}
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-6">
                    <div className="form">
                      <input
                        className="form-control rounded-pill border-1 text-muted"
                        type="email"
                        name="personEmail"
                        placeholder="Email"
                        value={formData.personEmail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-6">
                    <div className="form">
                      <input
                        className="form-control rounded-pill border-1 text-muted"
                        type="tel"
                        name="personMobile"
                        placeholder="Mobile"
                        value={formData.personMobile}
                        onChange={handleInputChange}
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-6">
                    <div className="form">
                      <textarea
                        className="form-control pb-12 h-100 border-1 text-muted"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        minLength={50}
                        maxLength={1000}
                        rows={2}
                      />
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-4 col-6 offset-6 offset-xl-9 offset-md-8 mt-6">
                    <button
                      type="submit"
                      className="col-12 btn btn-primary rounded-pill"
                    >
                      Send
                    </button>
                    
                    <div className="text-center mt-4">  

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
    </>
  );
};

export default Contactus;