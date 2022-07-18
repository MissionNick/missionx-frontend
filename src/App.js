import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLibrary from "./pages/ProjectLibrary";
import StudentProfiles from "./pages/StudentProfiles";
import ProgressTracker from "./pages/ProgressTracker";
import HelpRequests from "./pages/HelpRequests";
import ProjectSubmissions from "./pages/ProjectSubmissions";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<ProjectLibrary />} />
          <Route path="/teacher" element={<ProjectLibrary />} /> 
          <Route path="/progress-tracker" element={<ProgressTracker />} />
          <Route path="/student-profiles" element={<StudentProfiles />} />
          <Route path="/help-requests" element={<HelpRequests />} />
          <Route path="/project-submissions" element={<ProjectSubmissions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
