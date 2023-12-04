import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import './App.css'
import F1 from './F1'
import NBA from './NBA'
import MLB from './MLB'
import NFL from './NFL'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);

function App() {


  return (
    <div>
      <F1 />
      <MLB />
      <NBA />
      <NFL />
    </div>
  )
}

export default App
