import { useState } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import Main from "./Components/Main/Main";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

import AppContext from "./Context/AppContext";
function App() {
  const [isDark, setIsDark] = useState(false);
  const [menuBarMobile, setMenuBarMobile] = useState(false);
  return (
    <div className={isDark ? "dark  font-Vazir " : "font-Vazir"} dir="rtl">
      <AppContext.Provider
        value={{
          isDark,
          setIsDark,
          menuBarMobile,
          setMenuBarMobile,
        }}
      >
        <Navbar />
        <NavbarMobile/>
        <Header />
        <Main />
        <FooterComponent />
      </AppContext.Provider>
    </div>
  );
}

export default App;
