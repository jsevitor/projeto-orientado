import { BsTruck } from "react-icons/bs";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import InputField from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroUsuario = () => {
  return (
    <Card title={"Cadastro de Usuario"} icon={BsTruck}>
      <FormContainer>
        <InputField label={"Nome"} />
        <InputField label={"CPF"} />
        <InputField label={"Telefone"} />
        <InputField label={"Celular"} />
        <InputField label={"Data de Nascimento"} />
        <InputField label={"E-mail"} />
        <InputField label={"CEP"} />
        <InputField label={"Endereço"} />
        <InputField label={"Número"} />
        <InputField label={"Bairro"} />
        <InputField label={"Cidade"} />
        <InputField label={"UF"} />
        <InputField label={"Foto"} />
        <InputField label={"Usuário de Login"} />
        <InputField label={"Senha"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroUsuario;
