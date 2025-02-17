import "./App.css";
import "particles.js/particles";
import Sponsors from "./Components/Sponsors";
import About from "./Components/About";
import SupportedBy from "./Components/SupportedBy";
import "particles.js/particles";
import Navbar from "./Components/Navbar//Navbar";
import { Hero } from "./Components/Hero//Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
import { FAQs } from "./Components/FAQs/Faq";
import ContactForm from "./Components/Contact";
import ProgressBar from "./Components/ProgressBar";
import Prizes from "./Components/Prizes/Prizes";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import { Footer } from "./Components/Footer/Footer";

function App() {

  window.particlesJS.load("particles", "/particlesjs-config.json");
  Aos.init();
  return (
    <div className="App">
      <div className="relative">
        <div className="fixed top-0 left-0 -z-50">
          <div id="particles" style={{ background: "#08081b" }} className="w-screen h-screen" />
        </div>

        <ProgressBar />
        <Navbar />
        <Hero />
        <About />
        <SupportedBy />
        <Roadmap />
        {/* <Sponsors /> */}
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
