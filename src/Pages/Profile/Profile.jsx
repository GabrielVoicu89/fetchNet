import Navbar from "../../assets/Nav/Navbar";
import Posts from "../../Components/Posts/Posts";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
} from "mdb-react-ui-kit";
export default function Profile() {
  return (
    <div>
      <Navbar />
      <section className="text-center text-md-start">
        <div
          className="p-5 bg-image"
          style={{
            height: "300px",
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/56.jpg")',
            zIndex: "-1",
          }}
        ></div>

        <div
          className="pb-2"
          style={{ backgroundColor: "background-color: hsl(0, 0%, 98%)" }}
        >
          <MDBContainer>
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol lg="6" md="8" className="mb-4 mb-md-0 pt-4">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/18.jpg"
                  className="rounded-circle float-none float-md-start me-4 mb-3"
                  alt=""
                  style={{
                    width: "168px",
                    marginTop: "-110px",
                    border: "4px solid hsl(0, 0%, 98%)",
                  }}
                />
                <h1 className="fw-bold">FetchNet</h1>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet assumenda, commodi perferendis libero debitis harum ut
                  sed nostrum minima aspernatur. .
                </p>
              </MDBCol>
              <MDBCol
                lg="6"
                md="8"
                className="mb-4 mb-md-0 text-center text-lg-end"
              >
                <MDBBtn>Edit profile</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
      <div className="d-flex">
        <MDBCol className="mt-5 ms-3" lg="3">
          <MDBCard className="mb-4">
            <MDBCardHeader className="d-flex justify-content-center align-items-center bg-primary text-light">
              Informations
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Johnatan Smith
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    example@example.com
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    (097) 234-5678
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    (098) 765-4321
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Bay Area, San Francisco, CA
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>{" "}
        <div className="flex-grow-1 w-1">
          <Posts />
        </div>
      </div>
    </div>
  );
}
