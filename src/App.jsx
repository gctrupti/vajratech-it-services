import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import QuerySection from "./components/QuerySection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <Testimonials />
      <QuerySection/>
      <CTA />
      <Footer />
    </>
  );
}

export default App;