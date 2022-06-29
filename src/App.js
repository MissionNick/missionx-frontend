import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockHome from "./pages/MockHome";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import MockTeacher from "./pages/MockTeacher";
import StudentProfiles from "./pages/StudentProfiles";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MockHome />} />
          <Route
            path="/StudentProjectLibrary"
            element={<StudentProjectLibrary />}
          />
          <Route path="/MockTeacher" element={<MockTeacher />} />
          <Route path="/student-profiles" element={<StudentProfiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
