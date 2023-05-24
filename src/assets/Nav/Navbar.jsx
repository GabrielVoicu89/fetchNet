import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  let login;
  let register;
  const clearStorage = () => {
    localStorage.clear();
  };

  if (token != null) {
    login = (
      <Link className="text-light" to="/Login" onClick={clearStorage}>
        Logout
      </Link>
    );

    register = (
      <Link className="text-light" to="/Profile">
        Welcome {localStorage.getItem("firstname")}
      </Link>
    );
  } else {
    login = (
      <Link className="text-light" to="/Login">
        Login
      </Link>
    );
    register = (
      <Link className="text-light" to="/Register">
        Register
      </Link>
    );
  }

  return (
    <>
      <MDBNavbar dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand>
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
              <MDBBreadcrumbItem>{login}</MDBBreadcrumbItem>
              <MDBBreadcrumbItem>{register}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
