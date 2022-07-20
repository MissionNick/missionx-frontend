import { ErrorBoundary } from "react-error-boundary";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Home from "../components/ProjectLibrary/Home";
import ScrollToTop from "../components/shared/ScrollToTop";

function ProjectLibrary() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Footer />
    </ErrorBoundary>
  );
}

export default ProjectLibrary;
