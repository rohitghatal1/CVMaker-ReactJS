
import './App.css';
import HomeTab from './components/HomeTab';
import Navbar from './components/Navbar';
import Templates from './components/Templates';

function App() {
  // document.body.classList.remove("showScrollbar");

  document.addEventListener('scroll', ()=>{
    document.body.classList.add("showScrollbar");
  })
  return (
    <>
      <Navbar/>
      <HomeTab/>
      <Templates/>
    </>
  );
}

export default App;
