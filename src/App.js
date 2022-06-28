import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import MockHome from './pages/MockHome'
>>>>>>> main
import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import MockTeacher from './pages/MockTeacher'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
=======
          <Route path="/" element={<MockHome />} />
>>>>>>> main
          <Route path="/StudentProjectLibrary" element={<StudentProjectLibrary />} />
          <Route path="/MockTeacher" element ={<MockTeacher />} />
        </Routes>
      </BrowserRouter>
    
  </div>);
}

export default App;
