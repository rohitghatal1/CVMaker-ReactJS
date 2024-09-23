
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
import Templates from './components/Templates';

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
      {/* <Navbar/>
      <HomeTab/>
      <Templates/>
      <Footer/> */}
      {/* <AboutUs/> */}
      {/* <CVgenerator/> */}
      {/* <CreativeTemplate/> */}
      {/* <BasicTemplate/> */}
      {/* <ProfessionalTemplate/> */}
      <ProfessionalIITemplate/>
    </>
  );
}

export default App;
