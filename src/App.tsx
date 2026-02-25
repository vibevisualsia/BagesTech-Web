import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import WhyChoose from './sections/WhyChoose';
import Technologies from './sections/Technologies';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Portfolio />
        <Pricing />
        <Technologies />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
