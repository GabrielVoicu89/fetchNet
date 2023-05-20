import { useState } from "react";
import {
  MDBCollapse,
  MDBBtn,
  MDBCard,
  MDBContainer,
  MDBInputGroup,
} from "mdb-react-ui-kit";

function CreatePost() {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <div>
        <MDBContainer>
          <MDBCard className="mt-5">
            <MDBBtn size="lg" onClick={toggleShow}>
              Create post
            </MDBBtn>
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
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
}

export default CreatePost;
