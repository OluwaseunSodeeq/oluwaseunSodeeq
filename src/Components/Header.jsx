import Container from "../Ui/Container";
import ContentContainer from "../Ui/ContentContainer";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

function Header() {
  return (
    <Container background="#fafbfc">
      <ContentContainer>
        <div className="w-full h-auto flex justify-between items-center px-6 py-4 border rounded-sm">
          <Logo />
          <Hamburger />
        </div>
      </ContentContainer>
    </Container>
  );
}

export default Header;
