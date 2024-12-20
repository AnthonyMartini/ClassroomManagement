import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
//No access until signed in
import ProtectedRoute from "./ProtectedRoute.js"; // Import the ProtectedRoute component
//pages
import Dashboard from "./pages/Dashboard";
import GradeDetails from "./pages/GradeDetails";
import ToDo from "./pages/ToDo";
import ClassSchedule from "./pages/ClassSchedule";
import Fees from "./pages/Fees";
import ReportCard from "./pages/ReportCard";
import Assessments from "./pages/Assessments";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Login from "./pages/Login";
import AdminHub from "./pages/AdminHub.jsx";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd24f", // Primary color
    },
    secondary: {
      main: "#222222", // Secondary color
    },
    background: {
      default: "#eaeaea", // Background color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
    },
  },
  spacing: 4,
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Correct declaration
  const [studentData, setStudentData] = useState(null);
  const [districtData, setDistrictData] = useState(null);
  const [classData, setClassData] = useState(null);

  //pass request string and state variable to function, state gets updated with data
  const callAPI = async (requestString, setStateVar) => {
    try {
      const response = await fetch(requestString, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"), // Replace with actual token
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          //log out if token is expired
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setStateVar(data);
    } catch (error) {
      console.error("Failed to fetch student data:", error.message);
    }
  };
  const breakData = (data) => {
    setStudentData(data.student);
    setDistrictData(data.district);
    setClassData(data.classes);
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Called the sign in");
      callAPI(`http://localhost:1433/api/signIn?ID=${22050}`, breakData);
    }
  }, [isLoggedIn]); // Empty dependency array ensures it only runs once

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} />}>
              <Route
                path="/dashboard"
                element={<Dashboard classData={classData} />}
              />
              <Route path="/grade-details" element={<GradeDetails />} />
              <Route path="/todo" element={<ToDo />} />
              <Route
                path="/schedule"
                element={<ClassSchedule classData={classData} />}
              />
              <Route path="/fees" element={<Fees />} />
              <Route path="/report-card" element={<ReportCard />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/messages" element={<Messages />} />
              <Route
                path="/account"
                element={<Account studentData={studentData} />}
              />
              <Route path="/adminHub" element={<AdminHub />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
