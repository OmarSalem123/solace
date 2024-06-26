import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FinInfo from "./pages/FinInfo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/FinancialInformation" element={<FinInfo />} />
      </Routes>
    </div>
  );
};

export default App;
