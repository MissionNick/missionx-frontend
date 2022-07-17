import { ErrorBoundary } from 'react-error-boundary'

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer"


export default function Profile() {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
