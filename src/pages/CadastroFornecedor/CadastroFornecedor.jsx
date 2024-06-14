import { useContext } from "react";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer } from "react-toastify";
import { FormContext } from "../../contexts/FormContext";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { InputField, SelectField } from "../../components/Form/Form";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroFornecedor = () => {
  const { fornecedorData, handleChange, handleSubmit, handleCancel } =
    useContext(FormContext);

  return (
    <Card title={"Cadastro de Fornecedor"} icon={"bi bi-truck"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"name"}
          value={fornecedorData.name}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"CNPJ"}
          name={"cnpj"}
          value={fornecedorData.cnpj}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Telefone"}
          name={"phone"}
          value={fornecedorData.phone}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"(xx)xxxx-xxxx"}
        />
        <InputField
          label={"Celular"}
          name={"mobile"}
          value={fornecedorData.mobile}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"(xx)xxxxx-xxxx"}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          value={fornecedorData.email}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"email@email.com"}
        />
        <InputField
          label={"Site"}
          name={"website"}
          value={fornecedorData.website}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"CEP"}
          name={"zipCode"}
          value={fornecedorData.zipCode}
          onChange={(e) => handleChange(e, "fornecedor")}
          placeholder={"xx.xxx-xx"}
        />
        <InputField
          label={"Endereço"}
          name={"address"}
          value={fornecedorData.address}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Número"}
          name={"addressNumber"}
          value={fornecedorData.addressNumber}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Bairro"}
          name={"neighborhood"}
          value={fornecedorData.neighborhood}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Cidade"}
          name={"city"}
          value={fornecedorData.city}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"UF"}
          name={"state"}
          value={fornecedorData.state}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Banco"}
          name={"bank"}
          value={fornecedorData.bank}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <SelectField label="Tipo de Conta" value="">
          <option value="">Selecione</option>
          <option value="opcao1">Conta Poupança PF</option>
          <option value="opcao2">Conta Poupança PJ</option>
          <option value="opcao3">Conta Corrente PF</option>
          <option value="opcao4">Conta Corrente PJ</option>
          <option value="opcao5">PIX</option>
        </SelectField>
        <InputField
          label={"Conta"}
          name={"account"}
          value={fornecedorData.account}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Agência"}
          name={"bankingAgency"}
          value={fornecedorData.bankingAgency}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
        <InputField
          label={"Chave PIX"}
          name={"pix"}
          value={fornecedorData.pix}
          onChange={(e) => handleChange(e, "fornecedor")}
        />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} onClick={handleSubmit} />
        <Button label={"Cancelar"} onClick={handleCancel} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroFornecedor;
