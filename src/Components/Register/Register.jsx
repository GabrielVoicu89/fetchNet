import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import Navbar from "../../assets/Nav/Navbar";

export default function Register() {
  return (
    <div>
      <Navbar />
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCard
            className="my-5 mb-5  shadow-5"
            style={{
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
              maxWidth: "500px",
            }}
          >
            <MDBCardBody className="p-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <MDBBtn className="w-100 mb-4" size="lg">
                sign up
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
