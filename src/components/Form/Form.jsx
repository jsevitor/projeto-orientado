import { Container, Input, Label } from "./Styles";

const InputField = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input type="text" />
    </Container>
  );
};

export default InputField;
