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

export default function Post(props) {
  return (
    <div key={props}>
      <MDBCard className="mx-5 my-5 shadow-5">
        <MDBCardBody>
          <MDBCardHeader>
            <MDBCardTitle>{props.title}</MDBCardTitle>
            <MDBCardText>{props.content}</MDBCardText>
            <MDBBtn onClick={props.toggleShowc} className="mx-1 p-1">
              <MDBIcon far icon="comment-dots" size="3x" />
            </MDBBtn>

            <MDBBtn onClick={props.addLike} className="p-1">
              <MDBIcon far icon="thumbs-up" size="3x" />
              <MDBBadge className="ms-2" color="danger">
                {props.likes}
              </MDBBadge>
            </MDBBtn>
          </MDBCardHeader>
          <MDBCollapse show={props.showShowc}>
            <div>
              <MDBInputGroup style={{ height: 100 }}>
                <textarea
                  onChange={props.handleComment}
                  style={{ height: 100 }}
                  className="form-control"
                />
              </MDBInputGroup>
              <MDBBtn className="m-2" onClick={props.addComment}>
                ADD
              </MDBBtn>
            </div>
          </MDBCollapse>

          <MDBCardBody className="pb-0"></MDBCardBody>
          <div className="comments">{props.comments}</div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
