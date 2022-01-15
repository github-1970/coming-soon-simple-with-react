import "@fortawesome/fontawesome-free/js/all.min.js";
import "../assets/styles/App.css";
import Signup from "./signup";
import Main from "./Main";

export default function App(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* main */}
        <Main/>

        {/* signup */}
        <Signup />
      </div>
    </div>
  )
}
