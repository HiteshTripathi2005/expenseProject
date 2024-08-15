import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./pages/auth";
import { ExpenseTracer } from "./pages/expense-tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/expense" element={<ExpenseTracer />} />
      </Routes>
    </Router>
  );
}

export default App;
