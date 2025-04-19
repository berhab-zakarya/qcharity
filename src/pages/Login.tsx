import '../styles/LoginPage.css';


import { useEffect, useState } from 'react';

const LoginPage = () => {
  useEffect(() => {
    import('../styles/QCStyleEn.css');
    import('../styles/LoginPage.css');

    // تحميل CSS الخاص بـ Login فقط
  }, []);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  // const [showEmailInput, setShowEmailInput] = useState(true);
  // const [showPasswordStep, setShowPasswordStep] = useState(false);
  // const [showVerificationStep, setShowVerificationStep] = useState(false);

  return (
    <div id="home-main-wrapper" className="pageForScroll">
      <div className="">
        {/* Mobile nav */}
        <div className="col-xs-12 hidden-md hidden-lg padding-none position-fixed" style={{ top: 0, zIndex: 99, background: 'white' }}>
          <div className="col-xs-12 d-flex padding-20-v align-items-center" style={{ borderBottom: '1px solid #D9D9D9' }}>
            <a href="/en/global/q" className="col-xs-6 padding-none">
              <img className="col-xs-8 col-sm-6 padding-none" src="/content/images/QC-Logo-New.png" alt="Qatar Charity Logo" />
            </a>
            <div className="col-xs-6 col-sm-4 col-sm-offset-2 d-flex justify-content-end padding-none">
              <a href="/ar/qa/account/login" className="col-xs-6 padding-less change-language LoginMenuA">
                عربي - قطر
              </a>
            </div>
          </div>
        </div>
        {/* Mobile nav end */}

        <div className="container-fluid">
          <div className="row no-gutter">
            {/* The image half */}
            <div className="col-md-7 backgroud_overlay hidden-xs hidden-sm position-relative">
              <div className="col-xs-12 d-flex margin-50-top align-items-center">
                <a href="/en/global/q" className="col-xs-6">
                  <img className="" src="/content/images/QC-Logo-New.png" alt="Qatar Charity Logo" />
                </a>
                <div className="col-xs-6 d-flex justify-content-end">
                  <a href="/ar/qa/account/login" className="change-language LoginMenuA change-language-button">
                    ع
                  </a>
                </div>
              </div>
              <div className="position-absolute text-white" style={{ bottom: '30px' }}>
                <div className="pull-left">
                  <p className="margin-0-bottom">
                    <sub>
                      Qatar Charity is a Qatar registered charity (6) and registered organization 01006100
                      <br />
                      All rights reserved @Qatar Charity in 2025
                      <br />
                      Version : 6.0.0.5
                    </sub>
                  </p>
                </div>
              </div>
            </div>
            
            {/* The content half - CENTERED LOGIN */}
            <div className="col-xs-12 col-md-5 margin-125-top-xs">
              <div className="login d-flex align-items-center py-5">
                {/* Modified container to properly center content */}
                <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <div className="row" style={{ width: '100%' }}>
                    <div className="col-md-10 col-md-offset-1">
                      {/* Back button */}
                      <a href="#" id="btn-back" className="col-xs-12 padding-none margin-50-top margin-40-bottom hidden" onClick={()=>{}}>
                        <p className="bold">
                          <i className="fa fa-chevron-left fa-dir-flip"></i>
                          Back
                        </p>
                      </a>
                      <div className="col-xs-12 padding-none text-center">
                        {/* Heading section */}
                        <p id="main-heading" className="font-24 margin-bottom-0 bold">Log In</p>
                        <p id="sub-heading" className="margin-30-bottom font-14 margin-8-top">Welcome Back, please enter your login details</p>
                      </div>

                      <form onSubmit={()=>{}} className="col-xs-12 padding-none form-horizontal text-center" id="frm-login-user" method="post" role="form">
                        <div id="anti-forgery-token">
                          <input name="__RequestVerificationToken" type="hidden" value="IV0p3mUydPTU8XXq5WB_m1cwmYnqEIgauNRyqtK1J4RQnaFWGRuVc2lWRYpo5Hl8V9Z0rquH_PH9nnR-ayTdP5ZIDaCFfPKQO4v1Vmg8Tzw1" />
                        </div>
                        
                        <input id="IsMobileLogin" name="IsMobileLogin" type="hidden" value="" />
                        
                        {/* Email/Username Input */}
                        <div id="email-input" className={`col-xs-12 padding-none form-group margin-0-bottom ${!true ? 'hidden' : ''}`}>
                          <input 
                            className="form-control rounded-pill" 
                            id="UserName" 
                            name="UserName" 
                            placeholder="Enter phone number or username" 
                            type="text" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                          <span className="field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                        </div>

                        {/* Password and Remember Me Input */}
                        <div id="password-step" className={`col-xs-12 padding-none margin-0-bottom form-group ${!false ? 'hidden' : ''}`}>
                          <div className="col-xs-12 padding-none">
                            <div className="position-relative">
                              <input 
                                autoComplete="off" 
                                className="form-control rounded-pill margin-0-bottom" 
                                id="inputPassword" 
                                name="LoginPassword" 
                                placeholder="Password" 
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <span className="field-validation-valid" data-valmsg-for="LoginPassword" data-valmsg-replace="true"></span>
                              <div id="show" className="password-show-icon" onClick={() => setShowPassword(!showPassword)}>
                                <img src="/content/images/newLoginImages/eyeIcon.png" alt="Show password" />
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 padding-none d-flex custom-control custom-checkbox mb-3 margin-20-top margin-0-bottom align-items-center">
                            <input 
                              className="custom-control-input pointer" 
                              id="RememberMeCheckbox" 
                              name="RememberMe" 
                              type="checkbox" 
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label htmlFor="RememberMeCheckbox" className="font-normal margin-bottom-0 pointer">
                              Remember me?
                            </label>
                          </div>
                        </div>

                        <div id='capatch150' className="g-recaptcha" data-size="invisible"></div>
                      </form>

                      {/* OTP area */}
                      <div id="verification-step" className={`col-xs-12 padding-none otp-form ${!true ? 'hidden' : ''}`}>
                        <div id="otp" className="inputs col-xs-12 padding-none d-flex justify-content-center">
                          {/* {otpInputs.map((value, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              className="input"
                              type="text"
                              inputMode="numeric"
                              value={value}
                              onChange={()=>{}}
                              onKeyDown={()=>{}}
                            />
                          ))} */}
                        </div>

                        <div id="no-code-otp" className="col-xs-12 margin-30-top text-center">
                          <p>Didn't receive code?</p>
                          <div id="Resend" style={{ display: 'inline-flex', textAlign: 'center' }}>
                            <button 
                              type="button" 
                              className="pull-right text-right padding-none red-color underline" 
                              style={{ border: '0px', backgroundColor: 'transparent', color: '#e00570 !important', marginRight: '15px' }} 
                              id="btn-ResendCode" 
                              onClick={()=>{}}
                            >
                              Resend new code
                            </button>
                            <span className="padding-10-h" id="timer" style={{ fontWeight: 'bold' }}>
                              30s
                            </span>
                          </div>
                        </div>

                        <div className="col-xs-12 padding-none font-12 QC_primary-color text-center padding-10-v margin-20-top" style={{ backgroundColor: 'lightyellow' }}>
                          When requesting a verification code (OTP), please ensure that the blocking of advertising messages feature is not activated on your mobile phone, to ensure that you receive Qatar Charity SMS messages.
                        </div>
                      </div>

                      <div className="form-group LoginErrorDiv" style={{ display: 'none' }}>
                        <div className="col-md-12">
                          <span className="field-validation-error">
                            <span>User name and password don't match.</span>
                          </span>
                        </div>
                      </div>

                      {/* Buttons for sign in and continue */}
                      {true && (
                        <button id="sign-in" type="submit" className="col-xs-12 QC_primary-btn btn-lg rounded-pill margin-24-top" >
                          <span>Log In</span>
                        </button>
                      )}
                      
                      {true && (
                        <button id="sign-in" type="submit" className="col-xs-12 QC_primary-btn btn-lg rounded-pill margin-24-top" >
                          <span>Log In</span>
                        </button>
                      )}
                      
                      {false && (
                        <button id="sign-in" type="submit" className="col-xs-12 QC_primary-btn btn-lg rounded-pill margin-24-top" >
                          <span>Verify</span>
                        </button>
                      )}

                      {!false && !true && (
                        <button id="phone-verification" type="button" className="col-xs-12 QC_primary-btn btn-lg rounded-pill margin-24-top">
                          <span>Continue</span>
                        </button>
                      )}

                      <div id="altLoginOptions">
                        <div className="col-xs-12 text-center margin-24-top">
                          <a href="/en/global/account/cantlogin" className="font-14 bold margin-0-bottom underline">
                            Can't login?
                          </a>
                        </div>
                        
                        <div className="col-xs-12 text-center margin-50-top">
                          <p className="font-14">
                            Don't have account? 
                            <a href="/en/global/account/register" className="underline bold">
                              Please Register
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;