import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../src/scenes/global/Topbar";
import Sidebar from "../src/scenes/global/Sidebar";
import Dashboard from "../src/scenes/dashboard";
import Invoices from "../src/scenes/invoices";
// import Province from "../src/scenes/province/";
import Bar from "../src/scenes/bar";
import Form from "../src/scenes/form";
import Line from "../src/scenes/line";
import Pie from "../src/scenes/pie";
import FAQ from "../src/scenes/faq";
import Geography from "../src/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "../src/scenes/calendar";
import City from "../src/scenes/city";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/city" element={<City />} />
              {/* <Route path="/province" element={<Province />} /> */}
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
