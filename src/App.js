import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import StudentProjectLibrary from "./pages/StudentProjectLibrary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentProjectLibrary" element={<StudentProjectLibrary />} />
        </Routes>
      </BrowserRouter>
    
  </div>);
}

export default App;
