import React, { useState, FormEvent } from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import BranchOffices from "../components/sections/BranchOffices";
import { Toast, ToastContainer } from "react-bootstrap";

interface ContactFormData {
  personName: string;
  personEmail: string;
  personMobile: string;
  message: string;
}

const Contactus: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    personName: "",
    personEmail: "",
    personMobile: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 7000);
  };

  return (
    <>
      <Header />
      <main className="contactus bg-cover h-auto mt-20 pt-5">
        {" "}
        {/* or pt-md-6, pt-lg-7 */}
        <div className="container-fluid container-lg">
          <div className="row justify-content-between">
            <div className="col-12 col-md-5 pt-13 pt-md-17">
              <h1 className="display-2 text-primary text-uppercase">
                Contact us
              </h1>
              <p>Our offices around the world.</p>
            </div>
            <div className="col-12 col-md-7">
              <iframe
                className="pt-lg-10 pt-xxl-0 d-none d-md-block"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.7374664544395!2d-1.3237427!3d34.8720045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78c96f96346091%3A0x8c65f6748b5c507e!2sUniversity%20of%20Tlemcen!5e0!3m2!1sen!2sdz!4v1650450000000!5m2!1sen!2sdz"
                width="640"
                height="480"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Tlemcen Map"
              />
              <img
                className="d-md-none"
                src="/Content/QCGlobal/images/map-mobile-contactus.png"
                alt="Mobile map"
              />
              <h1 className="d-md-none mt-9">Main Branch</h1>
              <img
                className="mt-9"
                src="algeria_flag.png"
                width="70"
                height="50"
                alt="Algeria flag"
              />
              <h4 className="mt-5">Algeria Branch</h4>
              <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                  <div className="mt-8 fw-bold">
                    <img
                      src="/content/QCGlobal/images/location-icon.png"
                      alt="Location icon"
                    />
                    <span className="ms-6 fw-bold">
                      University of Tlemcen, Tlemcen 13000, Algeria{" "}
                      {/* Updated address */}
                    </span>
                  </div>
                  <div className="mt-5">
                    <img
                      src="/content/QCGlobal/images/phone-icon.png"
                      alt="Phone icon"
                    />
                    <span className="ms-6 fw-bold">
                      <a
                        className="pull-left QC_defult-text margin-5-top"
                        href="tel:+974 44290000"
                        style={{
                          direction: "ltr",
                          lineHeight: "14px",
                          fontFamily: "Arial",
                        }}
                        >
                        +213 43411196
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
        <BranchOffices />
        {/* Contact Form Section */}
        <section className="pt-xl-16 pt-md-14 pt-12">
          <div className="container-fluid container-lg">
            <div className="row justify-content-between">
              <div className="col-12 col-sm-5 col-lg-4">
                <h1 className="display-4">Contact Form</h1>
                {/* Toast appears just below Contact Form title */}
                <ToastContainer
                  position="bottom-center"
                  className="p-3"
                  style={{
                    position: "relative",
                    left: 0,
                    bottom: "0",
                    zIndex: 9999,
                  }}
                >
                  <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    bg="success"
                    delay={7000}
                    autohide
                  >
                    <Toast.Header>
                      <strong className="me-auto">Message Sent</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                      Your message has been sent successfully.<br />
                      We will review your request and contact you soon.
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
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

                      <div className="text-center mt-4"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contactus;
