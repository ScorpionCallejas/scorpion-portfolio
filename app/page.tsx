import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}