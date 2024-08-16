
import CreativeTemplate from './allTemplates/CreativeTemplate/CreativeTemplate';
import './App.css';
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
      <CreativeTemplate/>
    </>
  );
}

export default App;
