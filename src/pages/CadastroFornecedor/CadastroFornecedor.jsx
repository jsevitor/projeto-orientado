import { BsTruck } from "react-icons/bs";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import InputField from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroFornecedor = () => {
  return (
    <Card title={"Cadastro de Fornecedor"} icon={BsTruck}>
      <FormContainer>
        <InputField label={"Nome"} />
        <InputField label={"CNPJ"} />
        <InputField label={"Telefone"} />
        <InputField label={"Celular"} />
        <InputField label={"Site"} />
        <InputField label={"CEP"} />
        <InputField label={"Endereço"} />
        <InputField label={"Número"} />
        <InputField label={"Bairro"} />
        <InputField label={"Cidade"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroFornecedor;
