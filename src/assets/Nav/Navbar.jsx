import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <>
      <MDBNavbar dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
              height="30"
              alt=""
              loading="lazy"
            />
            fetchNet
          </MDBNavbarBrand>
          <nav aria-label="breadcrumb">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">Login</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active aria-current="page">
                <a href="#">Profile</a>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
