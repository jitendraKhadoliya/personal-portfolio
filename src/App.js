import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Header from './component/header/Header';
import Home from './component/home/Home.jsx';
import Qualification from './component/qualification/Qualification';
import Services from './component/services/Services';
import Skills from './component/skills/Skills';
import Testimonial from './component/testimonials/Testimonial';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}

export default App;
