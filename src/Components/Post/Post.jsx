import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function Post() {
  return (
    <MDBCard className="mx-5 my-5 shadow-5">
      <MDBCardBody>
        <MDBCardHeader>
          <MDBCardTitle>Author</MDBCardTitle>
          <MDBCardText>
            POST : Some quick example text to build on the card title and make
            up the bulk of the card's content. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas illum dolorem fuga cumque maxime
            numquam quibusdam unde eaque nisi, non sint officiis mollitia iure
            perferendis architecto asperiores soluta sunt. At!
          </MDBCardText>
          <MDBBtn className="mx-1">Comment</MDBBtn>
          <MDBBtn>Like</MDBBtn>
        </MDBCardHeader>

        <MDBCardBody className="pb-0">
          <p>comment 1</p>
          <p>comment 2</p>
        </MDBCardBody>
      </MDBCardBody>
    </MDBCard>
  );
}
