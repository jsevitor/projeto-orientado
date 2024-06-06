import {
  BsBoxSeam,
  BsChevronLeft,
  BsGear,
  BsHouse,
  BsPersonCircle,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
import {
  BottomBox,
  Container,
  Icon,
  ItemTitle,
  MenuItem,
  MenuItems,
  NavContainer,
  TopBox,
} from "./Styles";

const SideBar = ({ active }) => {
  return (
    <Container sidebar={active}>
      <TopBox>
        <Icon as={BsChevronLeft} />
      </TopBox>
      <hr />
      <NavContainer>
        <MenuItems>
          <MenuItem>
            <Icon as={BsHouse} />
            <ItemTitle>Início</ItemTitle>
          </MenuItem>

          <MenuItem>
            <Icon as={BsReverseLayoutTextWindowReverse} />
            <ItemTitle>Cadastro</ItemTitle>
          </MenuItem>

          <MenuItem>
            <Icon as={BsBoxSeam} />
            <ItemTitle>Produtos</ItemTitle>
          </MenuItem>

          <MenuItem>
            <Icon as={BsGear} />
            <ItemTitle>Painel de Controle</ItemTitle>
          </MenuItem>
        </MenuItems>
      </NavContainer>
      <hr />
      <BottomBox>
        <Icon as={BsPersonCircle} />
        <ItemTitle>Fulano de Tal</ItemTitle>
      </BottomBox>
    </Container>
  );
};

export default SideBar;
