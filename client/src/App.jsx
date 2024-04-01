import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Newblog from "./pages/Newblog";
import Notification from "./pages/Notification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-blog" element={<Newblog />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
