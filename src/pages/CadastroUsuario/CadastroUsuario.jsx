import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroUsuario = () => {
  return (
    <Card title={"Cadastro de Usuario"} icon={"bi bi-person-add"}>
      <FormContainer>
        <InputField label={"Nome"} name={"name"} />
        <InputField label={"CPF"} name={"cpf"} placeholder={"xxx.xxx.xxx-xx"} />
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
        <InputField label={"Data de Nascimento"} type={"date"} />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"email@email.com"}
        />
        <InputField label={"CEP"} name={"zip-code"} placeholder={"xx.xxx-xx"} />
        <InputField label={"Endereço"} name={"adress"} />
        <InputField label={"Número"} name={"adress-number"} />
        <InputField label={"Bairro"} name={"neighbourhoold"} />
        <InputField label={"Cidade"} name={"city"} />
        <InputField label={"UF"} name={"state"} />
        <InputField label={"Usuário de Login"} name={"user"} />
        <InputField label={"Senha"} name={"password"} type={"password"} />
        <InputField label={"Foto"} name={"picture"} type={"file"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroUsuario;
