import Posts from "../../Components/Posts/Posts";
import Navbar from "../../assets/Nav/Navbar";
import CreatePost from "../../Components/CreatePost/CreatePost";
export default function Home() {
  return (
    <div>
      <Navbar />
      <CreatePost />
      <Posts />
    </div>
  );
}
