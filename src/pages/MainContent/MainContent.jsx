import CadastroFornecedor from "../CadastroFornecedor/CadastroFornecedor";
<<<<<<< HEAD
import "./MainContent.sass";

const MainContent = () => {
  return (
    <main>
      <CadastroFornecedor />
    </main>
=======
import { Container } from "./Styles";

const MainContent = ({ menuCollapsed }) => {
  return (
    <Container collapsed={menuCollapsed}>
      <CadastroFornecedor />
    </Container>
>>>>>>> master
  );
};

export default MainContent;
