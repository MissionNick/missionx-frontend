import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import MockTeacher from "./pages/MockTeacher";
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
          <Route path="/StudentProjectLibrary" element={<StudentProjectLibrary />} />
          <Route path="/MockTeacher" element={<MockTeacher />} />
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
