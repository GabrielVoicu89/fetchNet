import "./App.css";
import Login from "./Components/Login/Login";
import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";
import Register from "./Components/Register/Register";
import Navbar from "./assets/Nav/Navbar";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <CreatePost />
      </div>
      <div>
        <Posts />
      </div>
    </>
  );
}

export default App;
