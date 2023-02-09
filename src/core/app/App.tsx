import React from "react";
import "./App.css";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
