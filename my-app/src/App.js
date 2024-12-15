import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Grades from "./pages/Grades";
import GradeDetails from "./pages/GradeDetails";
import StudentInfo from "./pages/StudentInfo";
import ProgressReport from "./pages/ProgressReport";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Grades />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/grades/:classId" element={<GradeDetails />} />
          <Route path="/student-info" element={<StudentInfo />} />
          <Route path="/progress-report" element={<ProgressReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
