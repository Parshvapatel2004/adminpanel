import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ManageProperites from "./Pages/ManageProperties";
import ManageUsers from "./Pages/ManageUsers";
import ManageOwners from "./Pages/ManageOwners";
import Feedback from "./Pages/Feedback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/manage_users" element={<ManageUsers />} />
          <Route path="/manage_owners" element={<ManageOwners />} />
          <Route path="/manage_properties" element={<ManageProperites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
