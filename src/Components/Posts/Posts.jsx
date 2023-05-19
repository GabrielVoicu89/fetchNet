import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Post from "../Post/Post";

export default function Posts() {
  return (
    <MDBCard className="m-5 shadow-5" style={{}}>
      <MDBCardBody>
        <Post />
        <Post />
        <Post />
        <Post />
      </MDBCardBody>
    </MDBCard>
  );
}
