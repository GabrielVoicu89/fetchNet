import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
export default function Profile() {
  return (
    <div>
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
    </div>
  );
}
