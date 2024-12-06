import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Hero from "../src/components/Section/Hero";
import Package from "../src/components/Section/Package";
import Header from "../src/components/Layout/Header";
import { ClSta } from "../src/components/Section/Clcta";
import Modal from "../src/components/UI/Modal";

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <Package />
      <ClSta />
    </div>
  );
};

export default App;
