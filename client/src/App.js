// import logo from "./logo.svg";
// eslint-disable-next-line
import axios from "axios";
import "./App.css";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home"
import Messages from "./Components/Messages/Messages";
import SavedItems from "./Components/SavedItems";
import Post from "./Components/Post/Post";
import Settings from "./Components/Settings";

import HelpAndSupports from "./Components/HelpAndSupport";
import Profile from "./Components/Profile/Profile";
import PostDetail from "./Components/PostDetail/PostDetail";
import FourOFour from "./Components/FourOFour";
import SignUp from "./Components/Registration/SignUp";
import SignIn from "./Components/Registration/SignIn";

// const apiCall = () => {
//   const server = "http://localhost:8080";
//   axios
//     .get(`${server}/test`)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("Error: ", err);
//     });
// };

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <div className="App">
          <header className="App-header"> */}
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/saveditems" element={<SavedItems />} />
        <Route path="/post" element={<Post/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<HelpAndSupports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/signin" element= {<SignIn/>}/>
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/*" element={<FourOFour />} />
        {/* <button onClick={apiCall}>Make API Call</button> */}
        {/* </header>
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;