import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import SignOut from "./Pages/SignOut";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/sign-up" element= {<SignUp/>} />
        <Route path="/sign-out" element= {<SignOut/>} />
        <Route path="profile" element= {<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
