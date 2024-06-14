// CadastroUsuario.js
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";
import { FormContext } from "../../contexts/FormContext";
import { ToastContainer } from "react-toastify";

const CadastroUsuario = () => {
  const { usuarioData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Cadastro de Usuario"} icon={"bi bi-person-add"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"name"}
          value={usuarioData.name}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"CPF"}
          name={"cpf"}
          placeholder={"xxx.xxx.xxx-xx"}
          value={usuarioData.cpf}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Telefone"}
          name={"phone"}
          placeholder={"(xx)xxxx-xxxx"}
          value={usuarioData.phone}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Celular"}
          name={"mobile"}
          placeholder={"(xx)xxxxx-xxxx"}
          value={usuarioData.mobile}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"email@email.com"}
          value={usuarioData.email}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Data de Nascimento"}
          name={"birthDate"}
          type={"date"}
          value={usuarioData.birthDate}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"CEP"}
          name={"zipCode"}
          placeholder={"xx.xxx-xx"}
          value={usuarioData.zipCode}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Endereço"}
          name={"address"}
          value={usuarioData.address}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Número"}
          name={"addressNumber"}
          value={usuarioData.addressNumber}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Bairro"}
          name={"neighborhood"}
          value={usuarioData.neighborhood}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Cidade"}
          name={"city"}
          value={usuarioData.city}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"UF"}
          name={"state"}
          value={usuarioData.state}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Usuário de Login"}
          name={"user"}
          value={usuarioData.user}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Senha"}
          name={"password"}
          type={"password"}
          value={usuarioData.password}
          onChange={(e) => handleChange(e, "usuario")}
        />
        <InputField
          label={"Foto"}
          name={"picture"}
          type={"file"}
          value={usuarioData.picture}
          onChange={(e) => handleChange(e, "usuario")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroUsuario;
