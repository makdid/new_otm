import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scene/Global/Topbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scene/Global/Sidebar";
import  Dashboard  from "./scene/dashboard";
import  Team  from "./scene/team";
import  Contacts  from "./scene/contacts";
import  Invoices  from "./scene/invoices";
import  Form  from "./scene/form";
import  Calendar  from "./scene/calendar";
import  Faq  from "./scene/faq";
import  Bar  from "./scene/bar";
import  Pie  from "./scene/pie";
import  Line  from "./scene/line";
import  City  from "./scene/city";
import  Geography  from "./scene/geography";
function App() {
    const [theme , colorMode] = useMode()

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/city" element={<City/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/line" element={<Line/>}/>
          <Route path="/geography" element={<Geography/>}/>
          </Routes>
        </main>  
    </div>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
}

export default App;
