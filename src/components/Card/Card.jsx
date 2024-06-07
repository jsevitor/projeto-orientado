<<<<<<< HEAD
import "./Card.sass";

const Card = ({ label, children }) => {
  return (
    <div className="card">
      <div className="card_header">
        <h2>{label}</h2>
        <i className="bx bxs-truck"></i>
      </div>
      <form className="card_body">{children}</form>
    </div>
=======
import { CardBody, CardHeader, Container, Icon, Title } from "./Styles";

const Card = ({ title, icon, children }) => {
  return (
    <Container>
      <CardHeader>
        <Title>{title}</Title>
        <Icon as={icon} />
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Container>
>>>>>>> master
  );
};

export default Card;
