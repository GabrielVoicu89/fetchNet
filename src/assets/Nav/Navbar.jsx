import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  let login;
  let register;
  const clearStorage = () => {
    localStorage.clear();
  };

  const [firstName, setFirstName] = useState("");
  const getUser = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/user ",
      options
    );
    const data = await response.json();
    setFirstName(data.firstname);
  };
  getUser();

  if (token != null) {
    login = (
      <Link to="/Login" onClick={clearStorage}>
        Logout
      </Link>
    );

    register = <Link to="/Profile">Welcome {firstName}</Link>;
  } else {
    login = <Link to="/Login">Login</Link>;
    register = <Link to="/Register">Register</Link>;
  }

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
              <MDBBreadcrumbItem>{login}</MDBBreadcrumbItem>
              <MDBBreadcrumbItem>{register}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
