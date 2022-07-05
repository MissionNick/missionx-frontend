import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../components/shared/Fallback'
import { errorHandler } from '../components/shared/ErrorHandler'

import Footer from "../components/shared/Footer"
import Navbar from "../components/shared/Navbar"
import Home from "../components/ProjectLibrary/Home"
import ScrollToTop from "../components/shared/ScrollToTop"

import styles from "../components/styles/ProjectLibrary.module.css";

const { btnbacktotop } = styles;


function StudentProjectLibrary() {

    
    
    return (
        <ErrorBoundary>
            <ScrollToTop />
            <Navbar />
            <Home />
            <Footer />           
        </ErrorBoundary>
    )
}

export default StudentProjectLibrary;