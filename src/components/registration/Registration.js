import React, { useState } from "react";
import "./trial.css";

function Registration() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    rpassword: "",
  });

  const [account, setAccount] = useState([]);

  function handlechange(event) {
    const { value, name } = event.target;

    setData((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email,
          password: prevValue.password,
          rpassword: prevValue.rpassword,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          email: prevValue.email,
          lname: value,
          password: prevValue.password,
          rpassword: prevValue.rpassword,
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value,
          password: prevValue.password,
          rpassword: prevValue.rpassword,
        };
      } else if (name === "password") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: prevValue.email,
          password: value,
          rpassword: prevValue.rpassword,
        };
      } else if (name === "rpassword") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: prevValue.email,
          password: prevValue.password,
          rpassword: value,
        };
      }
    });
    console.log(event.target.value);
  }

  function handlesubmit(event) {
    event.preventDefault();
  }

  function handleclick() {
    setAccount((prevData) => {
      return [...prevData, data];
    });
    setData({
      fname: "",
      lname: "",
      email: "",
      password: "",
      rpassword: "",
    });
  }

  return (
    <div id="__next">
      <div>
        <div></div>
        <div class="MuiBox-root css-bfd9tc">
          <div id="recaptcha-container"></div>
          <a
            class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1t9eji0"
            href="/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div class="MuiBox-root css-1ia9ix2">
              <div class="MuiBox-root css-1f8sh1y">
                <div
                  style={{
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    margin: "0px",
                  }}
                ></div>
              </div>
            </div>
          </a>
          <div class="MuiBox-root css-70qvj9">
            <div class="MuiBox-root css-11csgqj">
              <div class="MuiBox-root css-8wc4km">
                <h6 class="MuiTypography-root MuiTypography-subtitle1 css-1p4pks7">
                  Signin / Signup
                </h6>
                <p class="MuiTypography-root MuiTypography-body1 css-1xhdqrn">
                  This will take only a few seconds, we promise.
                </p>
                <div class="MuiBox-root css-yq1clh">
                  <form class="css-yq1clh" onSubmit={handlesubmit}>
                    <div class="MuiBox-root css-1yp4ln">
                      <div class="MuiFormControl-root MuiTextField-root css-15p06bd">
                        <label
                          class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorSecondary css-1a473cl"
                          data-shrink="false"
                          for="mui-1"
                          id="mui-1-label"
                        ></label>
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorSecondary MuiInputBase-formControl css-are74c">
                          <input
                            aria-invalid="false"
                            class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                            aria-describedby="mui-1-helper-text"
                            id="mui-1"
                            type="text"
                            name="fname"
                            value={data.fname}
                            onChange={handlechange}
                            placeholder="First Name"
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-1ftyaf0">
                              <span>First Name</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div class="MuiBox-root css-1yp4ln">
                      <div class="MuiFormControl-root MuiTextField-root css-15p06bd">
                        <label
                          class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorSecondary css-1a473cl"
                          data-shrink="false"
                          for="mui-2"
                          id="mui-2-label"
                        ></label>
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorSecondary MuiInputBase-formControl css-are74c">
                          <input
                            aria-invalid="false"
                            class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                            aria-describedby="mui-2-helper-text"
                            id="mui-2"
                            type="text"
                            name="lname"
                            value={data.lname}
                            onChange={handlechange}
                            placeholder="Last Name"
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-1ftyaf0">
                              <span>Last Name</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div class="MuiBox-root css-1yp4ln">
                      <div class="MuiFormControl-root MuiTextField-root css-15p06bd">
                        <label
                          class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorSecondary css-1a473cl"
                          data-shrink="false"
                          for="mui-3"
                          id="mui-3-label"
                        ></label>
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorSecondary MuiInputBase-formControl css-are74c">
                          <input
                            aria-invalid="false"
                            class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                            aria-describedby="mui-3-helper-text"
                            id="mui-3"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handlechange}
                            placeholder="Email"
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-1ftyaf0">
                              <span>Email</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div class="MuiBox-root css-1yp4ln">
                      <div class="MuiFormControl-root MuiTextField-root css-15p06bd">
                        <label
                          class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorSecondary css-1a473cl"
                          data-shrink="false"
                          for="mui-4"
                          id="mui-4-label"
                        ></label>
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorSecondary MuiInputBase-formControl css-are74c">
                          <input
                            aria-invalid="false"
                            class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                            aria-describedby="mui-4-helper-text"
                            id="mui-4"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handlechange}
                            placeholder="Password"
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-1ftyaf0">
                              <span>Password</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div class="MuiBox-root css-1yp4ln">
                      <div class="MuiFormControl-root MuiTextField-root css-15p06bd">
                        <label
                          class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorSecondary css-1a473cl"
                          data-shrink="false"
                          for="mui-5"
                          id="mui-5-label"
                        ></label>
                        <div class="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorSecondary MuiInputBase-formControl css-are74c">
                          <input
                            aria-invalid="false"
                            class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq"
                            aria-describedby="mui-5-helper-text"
                            id="mui-5"
                            type="password"
                            name="rpassword"
                            value={data.rpassword}
                            onChange={handlechange}
                            placeholder="Repeat Password"
                          />
                          <fieldset
                            aria-hidden="true"
                            class="MuiOutlinedInput-notchedOutline css-igs3ac"
                          >
                            <legend class="css-1ftyaf0">
                              <span>Repeat Password</span>
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <button
                      class="MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root css-fjhycm"
                      tabindex="0"
                      type="submit"
                      onClick={handleclick}
                    >
                      <span class="MuiButton-startIcon MuiButton-iconSizeMedium css-6xugel">
                        <div></div>
                      </span>
                      <a href="/">

                      Submit
                      <span class="MuiTouchRipple-root css-w0pj6f"></span>
                      {/* Submit */}
                      </a>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
