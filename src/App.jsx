import "./App.css";
import { RouterProvider } from "react-router";
import Router from "./assets/Router/Router";

function App() {
  return (
    <>
      <RouterProvider npm runrouter={Router} />
    </>
  );
}

export default App;
