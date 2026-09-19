import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AppProvider, AppContext } from "./context/AppContext.jsx";

import Feed from "./views/Feed.jsx";
import Profile from "./views/Profile.jsx";
import SignUp from "./views/SignUp.jsx";
import LogIn from "./views/Login.jsx";
import EditProfile from "./views/EditProfile.jsx";
import Resources from "./views/Resources.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
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
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Feed */}
            <Route path="/feed" element={<Feed />} />

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />

            {/* Sign Up */}
            <Route path="/signup" element={<SignUp />} />

            {/* Login */}
            <Route path="/login" element={<LogIn />} />

            {/* Edit Profile */}
            <Route path="/editprofile" element={<EditProfile />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />

            {/* AI Help */}
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
