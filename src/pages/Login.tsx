import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for admin credentials
    if (userInput === "admin@gmail.com" && password === "admin123") {
      navigate("/admin"); // Navigate to admin dashboard
      return;
    }

    // Check for regular user credentials
    if (userInput === "user@gmail.com" && password === "usertest123") {
      navigate("/");
      return;
    }

    // Handle invalid credentials
    alert("Invalid email or password");
  };

  useEffect(() => {
    import("../styles/LoginPage.css"); //
    import("../styles/QCStyleEn.css");
    const passwordDiv = document.getElementById("password-step");
    if (passwordDiv) {
      if (userInput.length > 0) {
        passwordDiv.classList.remove("hidden");
      } else {
        passwordDiv.classList.add("hidden");
      }
    }
  }, [userInput]);

  return (
    <div id="home-main-wrapper" className="pageForScroll">
      <div className="">
        {/* Mobile nav */}
        <div
          className="col-xs-12 hidden-md hidden-lg padding-none position-fixed d-md-none w-full w_full "
          style={{ top: 0, zIndex: 99, background: "white" }}
        >
          <div
            className="col-xs-12 d-flex padding-20-v align-items-center justify-content-around "
            style={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <a href="/en/global/q" className="col-xs-6 padding-none">
              <img
                className="col-xs-8 col-sm-6 padding-none w-2/3"
                src="/Content/images/QC-Logo-New.png"
                alt="QC Logo"
              />
            </a>
            <div className="col-xs-6 col-sm-4 col-sm-offset-2 d-flex justify-content-end padding-none">
              <a
                href="/ar/qa/account/login"
                className="col-xs-6 padding-less change-language LoginMenuA"
              >
                عربي - قطر
              </a>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* Left Side (Form) */}
            <div className="col-xs-12 col-md-5 margin-125-top-xs loge">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 col-lg-offset-3 text-center w-full w_full">
                      <a
                        href="/en/global/account/login"
                        id="btn-back"
                        className="col-xs-12 padding-none margin-50-top margin-40-bottom hidden"
                      >
                        <p className="bold">
                          <i className="fa fa-chevron-left fa-dir-flip"></i>{" "}
                          Back
                        </p>
                      </a>
                      <div className="col-xs-12 padding-none text-center-md">
                        <p
                          id="main-heading"
                          className="font-24 margin-bottom-0 bold log"
                        >
                          Log In
                        </p>
                        <p
                          id="sub-heading"
                          className="margin-30-bottom font-14 margin-8-top"
                        >
                          Welcome Back, please enter your login details
                        </p>
                      </div>

                      <form
                        onSubmit={handleLogin}
                        className="col-xs-12 d-flex padding-none form-horizontal text-center"
                        id="frm-login-user"
                        method="post"
                        role="form"
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div id="anti-forgery-token">
                          <input
                            name="__RequestVerificationToken"
                            type="hidden"
                            value="TOKEN_PLACEHOLDER"
                          />
                        </div>
                        <input
                          id="IsMobileLogin"
                          name="IsMobileLogin"
                          type="hidden"
                          value=""
                        />

                        <div
                          id="email-input"
                          className="col-xs-12 padding-none form-group margin-0-bottom w-full w_full"
                        >
                          <input
                            className="form-control rounded-[12px]"
                            id="UserName"
                            name="UserName"
                            placeholder="Enter phone number or username"
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                          />
                        </div>

                        <div
                          id="password-step"
                          className="col-xs-12 padding-none margin-0-bottom form-group w-full w_full"
                        >
                          <div className="col-xs-12 padding-none">
                            <div className="position-relative">
                              <input
                                className="form-control margin-0-bottom rounded-[12px]"
                                id="inputPassword"
                                name="LoginPassword"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <div id="show" className="password-show-icon">
                                <img
                                  src="/content/images/newLoginImages/eyeIcon.png"
                                  className="mt-[6px]"
                                  alt="show/hide"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 padding-none d-flex custom-control custom-checkbox mb-3 margin-20-top margin-0-bottom align-items-center">
                            <input
                              className="custom-control-input pointer"
                              id="RememberMeCheckbox"
                              name="RememberMe"
                              type="checkbox"
                              value="true"
                            />
                            <input
                              name="RememberMe"
                              type="hidden"
                              value="false"
                            />
                            <label
                              htmlFor="RememberMeCheckbox"
                              className="font-normal margin-bottom-0 pointer mt-[12px]"
                            >
                              Remember me?
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="col-xs-12 QC_primary-btn btn-lg margin-24-top rounded-[12px] w_full grid place-content-center"
                        >
                          Log In
                        </button>
                      </form>

                      {/* OTP Step */}
                      <div
                        id="verification-step"
                        className="col-xs-12 padding-none hidden otp-form"
                      >
                        <div
                          id="otp"
                          className="inputs col-xs-12 padding-none d-flex justify-content-center"
                        >
                          {[...Array(6)].map((_, i) => (
                            <input
                              key={i}
                              className="input"
                              type="text"
                              inputMode="numeric"
                            />
                          ))}
                        </div>
                        <div
                          id="no-code-otp"
                          className="col-xs-12 margin-30-top text-center"
                        >
                          <p>Didn't receive code?</p>
                          <br />
                          <div id="Resend" className="inline-flex text-center">
                            <button
                              type="button"
                              className="pull-right text-right padding-none red-color underline"
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                color: "#e00570",
                                marginRight: 15,
                              }}
                              id="btn-ResendCode"
                            >
                              Resend new code
                            </button>
                            <span
                              className="padding-10-h"
                              id="timer"
                              style={{ fontWeight: "bold" }}
                            ></span>
                          </div>
                        </div>
                        <div
                          className="col-xs-12 padding-none font-12 QC_primary-color text-center padding-10-v margin-20-top"
                          style={{ backgroundColor: "lightyellow" }}
                        >
                          When requesting a verification code (OTP), please
                          ensure that the blocking of advertising messages
                          feature is not activated on your mobile phone, to
                          ensure that you receive Qatar Charity SMS messages.
                        </div>
                      </div>

                      <button
                        id="phone-verification"
                        type="button"
                        className="col-xs-12 QC_primary-btn btn-lg rounded-pill margin-24-top hidden"
                        style={{ display: "none" }}
                      >
                        <span>Continue</span>
                      </button>

                      <div id="altLoginOptions">
                        <div className="col-xs-12 text-center-md margin-24-top">
                          <a
                            href="/en/global/account/cantlogin"
                            className="font-14 bold margin-0-bottom underline"
                          >
                            Can&apos;t login?
                          </a>
                        </div>
                        <div className="col-xs-12 text-center margin-50-top d-flex flex-column-reverse min-height-calc-xs">
                          <p className="font-14">
                            Don&apos;t have account?{" "}
                            <a
                              href="/en/global/account/register"
                              className="underline bold"
                            >
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

            {/* Right Side (Image) */}
            <div className="col-md-7 backgroud_overlay hidden-xs hidden-sm position-relative">
              <div className="col-xs-12 d-flex margin-50-top align-items-center justify-content-between">
                <a href="#" className="col-xs-1">
                  <img
                    src="/logo.jpg"
                    alt="QC Logo"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px]"
                  />
                </a>
              </div>
              <div
                className="position-absolute text-white"
                style={{ bottom: 30 }}
              >
                <div className="pull-left">
                  <p className="margin-0-bottom">
                    <sub>
                      Takaful is a registered charity organization
                      <br />
                      All rights reserved @Takaful 2025
                      <br />
                      Version : 1.0.0
                    </sub>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
