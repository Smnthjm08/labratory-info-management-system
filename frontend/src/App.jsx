import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import AdminLayout from "./components/Layout/AdminLayout";
import Admin from "./pages/Admin";
import NewPatient from "./components/patients/NewPatient";
import NewUser from "./components/Admin/NewUser";
import ManageTeam from "./components/Admin/ManageTeam";
import DigitalSignature from "./components/Admin/DigitalSignature";
import AddSignature from "./components/Admin/AddSignature";
import Faq from "./components/Faq";
import Appointments from "./components/patients/Appointments";
import Visits from "./components/patients/Visits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* Admin routes with sidebar */}
        <Route path="/admin/" element={<AdminLayout />}>
          {/* <Route index element={<Admin />} /> */}
          <Route path="new-patient" element={<NewPatient />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="visits" element={<Visits />} />
          <Route path="new-user" element={<NewUser />} />
          <Route path="manage-team" element={<ManageTeam />} />
          <Route path="digital-sign" element={<DigitalSignature />} />
          <Route path="add-signature" element={<AddSignature />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
