import { ErrorBoundary } from 'react-error-boundary'

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer"
import Home from "../components/profile/Home"


export default function Profile() {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <Home />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
