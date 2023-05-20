import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import Post from "../Post/Post";

export default function Posts() {
  return (
    <MDBCardBody>
      <Post />
      <Post />
      <Post />
      <Post />
    </MDBCardBody>
  );
}
