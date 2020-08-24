import React from "react";
import "../Register.css";

function Register() {
  return (
    <div>
      <form className="register_container">
        <div className=" register_left">
          <h2 className="register_title">
            Billing Address <i className="fas fa-home fa-sm"> </i>
          </h2>
          <div className="register_text">
            <label for="validationDefault01">Full Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Full Name"
              name="firstname"
              required
            />
          </div>
          <div className="register_text">
            <label for="validationDefault02">Email</label>
            <br />
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="register_text">
            <label for="validationDefaultUsername">City & State</label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              placeholder="City,State"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>

          <div className="register_text">
            <label for="validationDefault03">Address</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="adr"
              placeholder="Address"
              name="address"
              required
            />
          </div>

          <div className="register_text">
            <label for="validationDefault05">Zip</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="Zip"
              name="Zip"
              placeholder="Zip"
              required
            />
          </div>
        </div>

        <div className="register_right">
          <h2 className="register_title">
            Payment Information <i className="fab fa-cc-visa "></i>
            <i className="fab fa-cc-mastercard "></i>
          </h2>
          <div className="register_text_top">
            <label for="validationDefault01">Name On Card</label>
            <div className="register_input">
              <input
                type="text"
                className="form-control "
                id="cname"
                // placeholder="Name On Card"
                name="cardname"
                required
              />
            </div>
            <div className="register_text">
              <label for="validationDefault02">Credit Card Number</label>
              <div className="register_input">
                <input
                  type="text"
                  id="ccnum"
                  className="form-control"
                  name="Credit Card Number"
                  required
                />
              </div>
            </div>
            <div className="register_text">
              <label for="validationDefaultUsername">Exp.Date</label>
              <div className="register_input">
                <input
                  type="text"
                  className="form-control"
                  id="expd"
                  // placeholder="03/09"
                  aria-describedby="inputGroupPrepend2"
                  name="expirationd"
                  required
                />
              </div>
            </div>
            <div className="register_text">
              <label for="validationDefaultUsername">CVV</label>
              <div className="register_input">
                <input
                  type="text"
                  className="form-control"
                  id="cvvid"
                  name="cvv"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
              </div>
            </div>
          </div>
          <div className="register_text">
            <div className="text-left">
              <div className="form-check">
                <span>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                  />
                  Agree to terms and conditions
                </span>
              </div>
            </div>
          </div>
          <button className="register_button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
