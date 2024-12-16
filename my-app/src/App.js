import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GradeDetails from "./pages/GradeDetails";
import ToDo from "./pages/ToDo";
import ClassSchedule from "./pages/ClassSchedule";
import Fees from "./pages/Fees";
import ReportCard from "./pages/ReportCard";
import Assessments from "./pages/Assessments";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd24f", // Primary color (blue)
    },
    secondary: {
      main: "#222222", // Secondary color (pink)
    },
    background: {
      default: "#eaeaea", // Background color for the app
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Set default font for the app
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
    },
  },
  spacing: 4, // Define spacing units for the app
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grades/:classId" element={<GradeDetails />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/schedule" element={<ClassSchedule />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/report-card" element={<ReportCard />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
