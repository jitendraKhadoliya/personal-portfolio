import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home.jsx";
import Qualification from "./component/qualification/Qualification";
import ScrollUp from "./component/scrollUp/ScrollUp";
import Services from "./component/services/Services";
import Skills from "./component/skills/Skills";
import Testimonial from "./component/testimonials/Testimonial";
import Work from "./component/work/Work";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonial />
        <Contact />
      </main>
        <ScrollUp />
        <Footer />
        <ToastContainer
position="top-center"
autoClose={300}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    </>
  );
}

export default App;
