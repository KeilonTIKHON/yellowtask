import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import JogsPage from "./pages/JogsPage";
import "./styles/global.css";
import Info from "./pages/Info";

const App: React.FC = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jogs" element={<JogsPage />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    
  );
};

export default App;

