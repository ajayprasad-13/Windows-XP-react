import { useState } from "react";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <HomePage />
    </div>
  );
}

export default App;
