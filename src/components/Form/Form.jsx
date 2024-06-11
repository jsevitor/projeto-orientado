import { Container, Input, Label, Select } from "./Styles";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder ? placeholder : ""}
      />
    </Container>
  );
};

const SelectField = ({ label, value, children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select value={value}>{children}</Select>
    </Container>
  );
};

export { InputField, SelectField };
