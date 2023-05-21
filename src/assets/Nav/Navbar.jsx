import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/Login">Login</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/Register">Register</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active aria-current="page">
                <Link to="/Profile">Profile</Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
