import "./App.css";
import Login from "./Components/Login/Login";
import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";
import Register from "./Components/Register/Register";
import Navbar from "./assets/Nav/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Register />
      </div>
      <div>
        <Post />
      </div>
      <div>
        <Posts />
      </div>
    </>
  );
}

export default App;
