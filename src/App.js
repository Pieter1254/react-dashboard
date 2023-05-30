import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Transactions from "./scenes/transactions";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Geography from "./scenes/geography";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
// import Calender from "./scenes/calender";

function App() {
  const [theme, colorMode] = useMode();
  return ( 
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
              <SideBar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/transactions" element={<Transactions />}/>
                  <Route path="/form" element={<Form />}/>
                  <Route path="/faq" element={<FAQ />}/>
                  <Route path="/bar" element={<Bar />}/>
                  <Route path="/line" element={<Line />}/>
                  <Route path="/pie" element={<Pie />}/>
                  <Route path="/geography" element={<Geography/>} />
                  {/* <Route path="/calender" element={<Calender />}/> */}
                </Routes>
              </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    );
}

export default App;
