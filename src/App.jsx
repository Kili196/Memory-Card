import { useState } from "react";

import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const cardOptions = ["🧛‍♀️", "🧞", "👨‍🚀", "🐸", "🧌", "🧙‍♂️", "🦄", "🐉"];

  return (
    <div className="memory-game__container">
      <Header />
      <div className="memory-game__card-container">
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
