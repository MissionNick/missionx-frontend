import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockHome from './pages/MockHome'
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import MockTeacher from './pages/MockTeacher'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MockHome />} />
          <Route path="/StudentProjectLibrary" element={<StudentProjectLibrary />} />
          <Route path="/MockTeacher" element ={<MockTeacher />} />
        </Routes>
      </BrowserRouter>
    
  </div>);
}

export default App;
