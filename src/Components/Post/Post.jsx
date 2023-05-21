import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardHeader,
  MDBIcon,
  MDBBadge,
  MDBCollapse,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function Post() {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  return (
    <div>
      <MDBCard className="mx-5 my-5 shadow-5">
        <MDBCardBody>
          <MDBCardHeader>
            <MDBCardTitle>Author</MDBCardTitle>
            <MDBCardText>
              POST : Some quick example text to build on the card title and make
              up the bulk of the card's content. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas illum dolorem fuga cumque
              maxime numquam quibusdam unde eaque nisi, non sint officiis
              mollitia iure perferendis architecto asperiores soluta sunt. At!
              up the bulk of the card's content. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </MDBCardText>
            <MDBBtn onClick={toggleShow} className="mx-1 p-1">
              <MDBIcon far icon="comment-dots" size="3x" />
            </MDBBtn>

            <MDBBtn className="p-1">
              <MDBIcon far icon="thumbs-up" size="3x" />
              <MDBBadge className="ms-2" color="danger">
                8
              </MDBBadge>
            </MDBBtn>
          </MDBCardHeader>
          <MDBCollapse show={showShow}>
            <div>
              <MDBInputGroup style={{ height: 100 }}>
                <textarea style={{ height: 100 }} className="form-control" />
              </MDBInputGroup>
              <MDBBtn className="m-2" onClick={toggleShow}>
                ADD
              </MDBBtn>
            </div>
          </MDBCollapse>

          <MDBCardBody className="pb-0"></MDBCardBody>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
