import CadastroFornecedor from "../CadastroFornecedor/CadastroFornecedor";
import { Container } from "./Styles";

const MainContent = ({ menuCollapsed }) => {
  return (
    <Container collapsed={menuCollapsed}>
      <CadastroFornecedor />
    </Container>
  );
};

export default MainContent;
