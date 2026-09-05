import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Feed from "./views/Feed.jsx";
import Profile from "./views/Profile.jsx";
import SignUp from "./views/SignUp.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Footer from "./components/Footer.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
