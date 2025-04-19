const NewsletterSubscription = () => {
  return (
    <section>
      <div className="container-fluid bg-lighter">
        <div 
          className="container py-10 py-md-11 py-xl-12"
          id="mc-embedded-subscribe-form" 
        >
          <form className="row gx-6 gx-xl-9 align-items-start align-items-xl-end" id="mc_embed_signup_scroll">
            <div className="col-12 col-sm-5 col-lg-4 offset-lg-1 col-xl-3 offset-xl-0 mb-6">
              <h2>Subscribe Now</h2>
              <p className="mb-0">
                Subscribe to receive Qatar Charity Newsletter
              </p>
            </div>
            <div className="col-12 col-sm-7 col-lg-5 offset-lg-1 col-xl-7 offset-xl-0">
              <div className="row">
                <div className="col-12 col-xl-4">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control rounded-pill mb-5 mb-xl-0" 
                      id="mce-Name"
                      placeholder="Name" 
                      value="" 
                    />
                    <label className="gray-label" htmlFor="floatingInputGrid">Name</label>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control rounded-pill mb-5 mb-xl-0"
                      id="mce-PhoneNumber" 
                      placeholder="Phone" 
                      value="" 
                    />
                    <label className="gray-label" htmlFor="floatingInputGrid">Phone</label>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <div className="form-floating">
                    <input 
                      type="email" 
                      name="EMAIL"
                      className="form-control rounded-pill mb-0 mb-sm-3 mb-xl-0" 
                      id="mce-EMAIL"
                      placeholder="Write e-mail" 
                      value="" 
                    />
                    <label className="gray-label" htmlFor="floatingInputGrid">Email address</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 offset-sm-5 col-lg-3 offset-lg-6 col-xl-2 offset-xl-0 mt-7 mt-sm-5 mt-xl-0">
              <button 
                type="submit" 
                value="Send" 
                name="subscribe" 
                id="mc-embedded-subscribe"
                className="col-12 btn btn-primary rounded-pill"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;