import {
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBBtn,
  MDBContainer,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import Post from "../Post/Post";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  const token = localStorage.getItem("token");
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getPosts = async () => {
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/posts ",
      options
    );
    const data = await response.json();
    const table = data.posts;
    setPosts(table);
    console.log("table", table);
  };

  const optionscreate = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      title: title,
      content: post,
    }),
  };

  const handlePost = (e) => {
    setPost(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  // function for POSTING
  const clickAdd = async () => {
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/post ",
      optionscreate
    );
    const data = await response.json();
    console.log(data);

    if (data.success === true) {
      setShowShow(false);
      getPosts();
    } else {
      if (data.message === "Invalid token.") {
        alert("Please login before posting");
      } else {
        alert(data.message);
      }
    }
  };

  //function for LIKING
  const addLike = async (postId) => {
    const optionlike = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        postId: postId,
      }),
    };
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/post/like",
      optionlike
    );
    const data = await response.json();
    if (data.success === true) {
      getPosts();
    } else {
      if (data.message === "Invalid token.") {
        alert("Please login before liking");
      } else {
        alert(data.message);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // function for COMMENTING //
  const addComment = async (postId, parComment) => {
    const optioncomment = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        postId: postId,
        content: parComment,
      }),
    };
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/post/comment",
      optioncomment
    );
    const data = await response.json();
    if (data.success === true) {
      getPosts();
    } else {
      if (data.message === "Invalid token.") {
        alert("Please login before commenting");
      } else {
        alert(data.message);
      }
    }
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const addLikes = async (postId) => {
    const optionlike = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        postId: postId,
      }),
    };
    const response = await fetch(
      " https://social-network-api.osc-fr1.scalingo.io/demo/post/like",
      optionlike
    );
    const data = await response.json();
    if (data.success === true) {
      getPosts();
    } else {
      if (data.message === "Invalid token.") {
        alert("Please login before liked");
      } else {
        alert(data.message);
      }
    }
  };

  const render = () => {
    return posts.map((item, index) => {
      return (
        <div key={index}>
          <Post
            title={item.title}
            content={item.content}
            addComment={() => addComment(item._id, comment)}
            addLike={() => addLikes(item._id)}
            likes={item.likes.length}
            handleComment={handleComment}
            comments={item.comments.map((comment) => (
              <div
                key={comment._id}
                className="m-2 "
                style={{
                  borderRadius: "5px",
                  height: "30px",
                  backgroundColor: "aliceblue",
                }}
              >
                <p style={{ marginLeft: "1em", marginTop: "0.1em" }}>
                  {comment.content}
                </p>
              </div>
            ))}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="createPost">
        <MDBContainer>
          <MDBCard className="mt-5">
            <MDBBtn size="lg" onClick={toggleShow}>
              Create post
            </MDBBtn>
            <MDBCollapse show={showShow}>
              <div>
                <MDBInput
                  onChange={handleTitle}
                  className="mt-3"
                  wrapperClass="mb-4"
                  label="Title"
                  id="form1"
                  type="text"
                />
                <MDBInputGroup style={{ height: 100 }}>
                  <textarea
                    onChange={handlePost}
                    style={{ height: 100 }}
                    className="form-control"
                  />
                </MDBInputGroup>
                <MDBBtn className="m-2" onClick={clickAdd}>
                  ADD
                </MDBBtn>
              </div>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </div>
      <MDBCard
        className="m-5"
        style={{
          backgroundColor: "aliceblue",
        }}
      >
        <MDBCardBody>{render()}</MDBCardBody>
      </MDBCard>
    </div>
  );
}
