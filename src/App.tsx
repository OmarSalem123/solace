import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import FinInfo from "./pages/FinInfo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/FinancialInformation" element={<FinInfo />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;
