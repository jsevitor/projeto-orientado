import { BsList } from "react-icons/bs";

import { Container, MenuButton, Title } from "./Styles";
const Header = () => {
  return (
    <Container>
      <Title>Projeto Orientado</Title>
      <MenuButton as={BsList} />
    </Container>
  );
};

export default Header;
