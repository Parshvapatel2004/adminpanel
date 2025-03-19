import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ManageProperites from "./Pages/ManageProperties";
import ManageUsers from "./Pages/ManageUsers";
import ManageOwners from "./Pages/ManageOwners";
import Feedback from "./Pages/Feedback";
import Complains from "./Pages/Complains";
import Payments from "./Pages/Payments";
import Inquiries from "./Pages/Inquiries";
import ManageProperties from "./Pages/ManageProperties";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage_payments" element={<Payments />} />
          <Route path="/manage_feedbacks" element={<Feedback />} />
          <Route path="/manage_inquiries" element={<Inquiries />} />
          <Route path="/manage_complains" element={<Complains />} />
          <Route path="/manage_users" element={<ManageUsers />} />
          <Route path="/manage_owners" element={<ManageOwners />} />
          <Route path="/manage_properties" element={<ManageProperties/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
