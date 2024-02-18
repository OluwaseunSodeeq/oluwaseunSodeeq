import Container from "../../Ui/Container";
import Header from "../Header";
import Footer from "../../Ui/Footer";
import ContactHeroSection from "../ContactHeroSection";

function Contact() {
  return (
    <Container>
      <div>
        <Header />
        <ContactHeroSection />
        <Footer />
      </div>
    </Container>
  );
}

export default Contact;
