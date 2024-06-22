import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  //Change Theme Color
  const [themeColor, setThemeColor] = useState(false);
  console.log(themeColor);
  return (
    <div id="home" className={`${themeColor ? "dark-theme" : ""} `}>
      {/* Run Chil Conponent */}
      <Home themeColor={themeColor} setThemeColor={setThemeColor} />
    </div>
  );
}

export default App;
