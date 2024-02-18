import Footer from "../../Ui/Footer";
import Header from "../Header";
import HomepageHeroSection from "../HomepageHeroSection";
import Projects from "../Projects";
import Skills from "../Skills";

function Homepage() {
  return (
    <>
      <Header />
      <HomepageHeroSection />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default Homepage;
