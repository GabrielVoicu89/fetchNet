import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "../../assets/Nav/Navbar";
import { useState } from "react";

export default function Login() {
  const [inputMail, setInputMail] = useState("");
  const [inputPass, setInputPass] = useState("");
  //recovering the value of mail
  const handleMail = (e) => {
    setInputMail(e.target.value);
  };
  //recovering the value of password
  const handlePass = (e) => {
    setInputPass(e.target.value);
  };
  // declaring the options for fetch
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputMail,
      password: inputPass,
    }),
  };

  const clickLogin = async () => {
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/login ",
      options
    );
    const data = await response.json();

    console.log("array:", data);
    console.log("token:", data.token);
  };

  return (
    <div>
      <Navbar />
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                <MDBInput
                  onChange={handleMail}
                  wrapperClass="mb-4 w-100"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  onChange={handlePass}
                  wrapperClass="mb-4 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn onClick={clickLogin} size="lg">
                  Login
                </MDBBtn>

                <hr className="my-3" />

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  SIGN UP NOW
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
