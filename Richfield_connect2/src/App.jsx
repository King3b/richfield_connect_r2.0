import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext.jsx";
import Feed from "./views/Feed.jsx";
import Profile from "./views/Profile.jsx";
import SignUp from "./views/SignUp.jsx";
import LogIn from "./views/Login.jsx";
import EditProfile from "./views/profileEdit.jsx";
import Resources from "./views/Resources.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Footer from "./components/Footer.jsx";
import Chat from "./views/Chat.jsx";
import "./styles/Global.css";

import Header from "./components/Header.jsx";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profileEdit" element={<EditProfile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
