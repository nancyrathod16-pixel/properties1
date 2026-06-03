import Navbar from "./Navbar";
import Textform from "./Textform";
import Alert1 from "./Alert1";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [dark, setDark] = useState(false);
  const [alert, setAlert] = useState(null);

  const show = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const close = () => setAlert(null);

  const toggleMode = () => {
    setDark(!dark);
    show(!dark ? "Dark Mode Enabled" : "Light Mode Enabled", "success");
  };

  const bg = dark ? "#1e1e1e" : "white";
  const color = dark ? "white" : "black";
  const navBg = dark ? "#1e1e1e" : "white";

  return (
    <div style={{ backgroundColor: bg, color, minHeight: "100vh" }}>
      
      <Navbar
        navBg={navBg}
        color={color}
        toggleMode={toggleMode}
        mode={dark ? "light" : "dark"}
      />

      <Alert1 alert={alert} close={close} />

      <Routes>
        <Route path="/Textform" element={<Textform dark={dark} title="Enter Your Text" />} />
      </Routes>

    </div>
  );
}

export default App;