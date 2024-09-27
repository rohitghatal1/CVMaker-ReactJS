
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BasicTemplate from './allTemplates/basicTemplate/BasicTemplate';
import CreativeTemplate from './allTemplates/CreativeTemplate/CreativeTemplate';
import ProfessionalIITemplate from './allTemplates/ProfessionalIITemplate/ProfessionalIITemplate';
import ProfessionalTemplate from './allTemplates/professionalTemplate/ProfessionalTemplate';
import './App.css';
import AboutUs from './components/AboutUs';
import CVgenerator from './components/CVgenerator';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import Navbar from './components/Navbar';
import TemplateTab from './components/TemplateTab';

function App() {
  let scrollTimeout;

  document.addEventListener('scroll', () => {
    document.body.classList.add("showScrollbar");

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      document.body.classList.remove("showScrollbar");
    }, 500);
  });


  return (
    <>
      <Router>
        <Navbar />
        <MainContent/>
      </Router>

    {/* <TemplateTab/> */}
      {/* <Navbar/>
      <HomeTab/>
      <Templates/>
      <Footer/> */}
      {/* <AboutUs/> */}
      {/* <CVgenerator/> */}
      {/* <CreativeTemplate/> */}
      {/* <BasicTemplate/> */}
      {/* <ProfessionalTemplate/> */}
      {/* <ProfessionalIITemplate/> */}
    </>
  );
}
function MainContent() {
  const location = useLocation();
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
  )
}

export default App;
