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
            <Link to="/" className="text-light">
              FetchNet
            </Link>
          </MDBNavbarBrand>
          <nav aria-label="breadcrumb">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/Login" className="text-light">
                  Login
                </Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/Register" className="text-light">
                  Register
                </Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active aria-current="page">
                <Link to="/Profile" className="text-light">
                  Profile
                </Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
