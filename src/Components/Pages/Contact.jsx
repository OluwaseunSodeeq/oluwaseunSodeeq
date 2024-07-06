import Container from "../../Ui/Container";
import Header from "../Header";
import Footer from "../../Ui/Footer";
import ContactHeroSection from "../ContactHeroSection";

function Contact() {
  return (
    <Container>
      <section className="w-full p-0 overflow-x-hidden">
        <Header />
        <ContactHeroSection />
        <Footer />
      </section>
    </Container>
  );
}

export default Contact;
