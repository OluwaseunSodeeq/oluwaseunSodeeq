import Footer from "../../Ui/Footer";
import Header from "../Header";
import HomepageHeroSection from "../HomepageHeroSection";
import Projects from "../Projects";
import Skills from "../Skills";

function Homepage() {
  return (
    <section className="w-full p-0 overflow-x-hidden">
      <Header />
      <HomepageHeroSection />
      <Skills />
      <Projects />
      <Footer />
    </section>
  );
}

export default Homepage;
