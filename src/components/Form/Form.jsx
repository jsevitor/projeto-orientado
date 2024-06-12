import { Container, Input, Label, Select } from "./Styles";

const InputField = ({ label, name, type, placeholder, value, onChange }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={onChange}
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
