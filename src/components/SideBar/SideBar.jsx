
import { BsBoxSeam, BsGear, BsHouse, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BottomBox, Container, Icon, ItemTitle, MenuItem, MenuItems, NavContainer, TopBox } from './Styles'

const SideBar = () => {
  return (
    <Container>
        <TopBox>topo</TopBox>
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
        <BottomBox>fundo</BottomBox>
    </Container>
  )
}

export default SideBar
