import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import LoginPage from "./components/LoginPage";
import Register from "./components/RegisterPage";
import EditProd from "./components/EditProd";
import ListProd from "./components/ListProd";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/editp" element={<EditProd/>} />
    <Route path="/listp" element={<ListProd/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
