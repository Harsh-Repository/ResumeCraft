import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navscroll from "./components/navbar/navbar";
import AllResumes from "./pages/All_Resumes/AllResumes";
import CreateResume from "./pages/CreateResume/CreateResume";
import HomePage from "./pages/HomePage/home";
import UpdateResume from "./pages/UpdateResume/update";
import ViewResume from "./pages/ViewResume/viewResume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navscroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/allResumes" element={<AllResumes />} />
          <Route exact path="/createResume" element={<CreateResume />} />
          <Route exact path="/viewResume/:id" element={<ViewResume />} />
          <Route exact path="/updateResume/:id" element={<UpdateResume/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
