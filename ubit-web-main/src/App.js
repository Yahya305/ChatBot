import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import History from "./components/History";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[88vh]">
        <Routes>
          <Route element={<About />} path="/about" />
          <Route element={<History />} path="/history" />
          <Route element={<Dashboard />} path="/" />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
