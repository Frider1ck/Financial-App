import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import { Spend, Income } from "./components/pages";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App">
        <Routes>
        <Route path="/" element={<Spend/>}  exact/>
        <Route path="/income" element={<Income/>} exact />
        </Routes>
      </div>
    </>
  );
}
// {/*  */}
export default App;
