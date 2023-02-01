import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Home from './component/home/Home.jsx';
import Services from './component/services/Services';
import Skills from './component/skills/Skills';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;
