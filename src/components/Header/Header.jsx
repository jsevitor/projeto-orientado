<<<<<<< HEAD
import { BsList } from "react-icons/bs";

import { Container, MenuButton, Title } from "./Styles";
const Header = () => {
  return (
    <Container>
      <Title>Projeto Orientado</Title>
      <MenuButton as={BsList} />
=======
import { BsList, BsXLg } from "react-icons/bs";
import { Container, MenuButton, Title } from "./Styles";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <Container>
      <Title>Projeto Orientado</Title>
      {!sidebar ? (
        <MenuButton as={BsList} onClick={toggleSidebar} />
      ) : (
        <MenuButton as={BsXLg} onClick={closeSidebar} />
      )}
      {sidebar && <SideBar active={setSidebar} closeSidebar={closeSidebar} />}{" "}
      {/* Passa a função closeSidebar */}
>>>>>>> master
    </Container>
  );
};

export default Header;
