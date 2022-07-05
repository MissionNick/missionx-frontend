import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentProjectLibrary from "./pages/StudentProjectLibrary";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/StudentProjectLibrary" element={<StudentProjectLibrary />} />
        </Routes>
      </BrowserRouter>
    
  </div>);
}

export default App;
