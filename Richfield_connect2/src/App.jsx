import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AppProvider, AppContext } from "./context/AppContext.jsx";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import SignUp from "./views/SignUp.jsx";
import LogIn from "./views/Login.jsx";
import Feed from "./views/Feed.jsx";
import EditProfile from "./views/EditProfile.jsx";
import Profile from "./views/Profile.jsx";
import Resources from "./views/Resources.jsx";
import AIHelp from "./views/AIHelp.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/Global.css";

function AppContent() {
  const { state } = useContext(AppContext);

  return (
    <div className={state.darkMode ? "dark-mode" : ""}>
      <Router>
        <Header />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/feed" element={<Feed />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/login" element={<LogIn />} />

            <Route path="/editprofile" element={<EditProfile />} />

            <Route path="/resources" element={<Resources />} />

            <Route path="/ai-help" element={<AIHelp />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
