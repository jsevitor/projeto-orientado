import Routes from "../../Routes";
import { Container } from "./Styles";

const MainContent = ({ menuCollapsed }) => {
  return (
    <Container collapsed={menuCollapsed}>
      <Routes />
    </Container>
  );
};

export default MainContent;
