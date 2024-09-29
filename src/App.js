import { useEffect } from 'react';
import NProgress from 'nprogress';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BasicTemplate from './allTemplates/basicTemplate/BasicTemplate';
import CreativeTemplate from './allTemplates/CreativeTemplate/CreativeTemplate';
import ProfessionalIITemplate from './allTemplates/ProfessionalIITemplate/ProfessionalIITemplate';
import ProfessionalTemplate from './allTemplates/professionalTemplate/ProfessionalTemplate';
import './App.css'; // Import your custom CSS
import AboutUs from './components/AboutUs';
import CVgenerator from './components/CVgenerator';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import Navbar from './components/Navbar';
import TemplateTab from './components/TemplateTab';
import 'nprogress/nprogress.css'; // Make sure this is imported for default styles

function App() {
  let scrollTimeout;

  document.addEventListener('scroll', () => {
    document.body.classList.add('showScrollbar');

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('showScrollbar');
    }, 500);
  });

  return (
    // <>
    //   <Router>
    //     <Navbar />
    //     <MainContent />
    //   </Router>
    // </>
    <ProfessionalTemplate/>
  );
}

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); // Start progress bar
  
    // Optionally, you might want to finish the progress after a certain event.
    NProgress.done(); // Complete progress immediately
  
    return () => {
      NProgress.done(); // Ensure progress bar is cleaned up on unmount
    };
  }, [location]);
  

  const showFooter = location.pathname !== '/cvgenerator';

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeTab />} />
        <Route path='/templateTab' element={<TemplateTab />} />
        <Route path='/cvgenerator' element={<CVgenerator />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
