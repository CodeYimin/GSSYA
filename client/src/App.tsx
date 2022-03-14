import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import HomePage from "./pages/home/HomePage";
import TermsPage from "./pages/terms/TermsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
