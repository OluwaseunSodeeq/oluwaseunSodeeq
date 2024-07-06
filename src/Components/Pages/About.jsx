import Container from "../../Ui/Container";
import Footer from "../../Ui/Footer";
import AboutHeroSection from "../AboutHeroSection";
import Header from "../Header";

function About() {
  return (
    <Container background="#fff">
      <section className="w-full p-0 overflow-x-hidden">
        <Header />
        <AboutHeroSection />
        <Footer />
      </section>
    </Container>
  );
}

export default About;
