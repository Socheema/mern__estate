import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Header from "./Component/Header";
import SignIn from "./Pages/SignIn";

const App = () => {
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/sign-up" element= {<SignUp/>} />
        <Route path="/sign-in" element= {<SignIn/>} />
        <Route path="profile" element= {<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
