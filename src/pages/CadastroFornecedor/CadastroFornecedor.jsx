import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroFornecedor = () => {
  return (
    <Card title={"Cadastro de Fornecedor"} icon={"bi bi-truck"}>
      <FormContainer>
        <InputField label={"Nome"} name={"name"} />
        <InputField label={"CNPJ"} name={"cnpj"} />
        <InputField
          label={"Telefone"}
          name={"phone"}
          placeholder={"(xx)xxxx-xxxx"}
        />
        <InputField
          label={"Celular"}
          name={"mobile"}
          placeholder={"(xx)xxxxx-xxxx"}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"email@email.com"}
        />
        <InputField label={"Site"} name={"website"} />
        <InputField label={"CEP"} name={"zip-code"} placeholder={"xx.xxx-xx"} />
        <InputField label={"Endereço"} name={"adress"} />
        <InputField label={"Número"} name={"adress-number"} />
        <InputField label={"Bairro"} name={"neighbourhoold"} />
        <InputField label={"Cidade"} name={"city"} />
        <InputField label={"UF"} name={"state"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroFornecedor;
