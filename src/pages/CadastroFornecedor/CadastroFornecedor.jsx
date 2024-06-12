import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField, SelectField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroFornecedor = () => {
  const [data, setData] = useState({
    name: "",
    cnpj: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    zipCode: "",
    adress: "",
    adressNumber: "",
    neighborhood: "",
    city: "",
    bank: "",
    account: "",
    bankingAgency: "",
    pix: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    toast.success("Salvo com sucesso!");
  };

  const handleCancel = () => {
    setData({
      name: "",
      cnpj: "",
      phone: "",
      mobile: "",
      email: "",
      website: "",
      zipCode: "",
      adress: "",
      adressNumber: "",
      neighborhood: "",
      city: "",
      bank: "",
      account: "",
      bankingAgency: "",
      pix: "",
    });
  };

  return (
    <Card title={"Cadastro de Fornecedor"} icon={"bi bi-truck"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"name"}
          value={data.name}
          onChange={handleChange}
        />
        <InputField
          label={"CNPJ"}
          name={"cnpj"}
          value={data.cnpj}
          onChange={handleChange}
        />
        <InputField
          label={"Telefone"}
          name={"phone"}
          value={data.phone}
          onChange={handleChange}
          placeholder={"(xx)xxxx-xxxx"}
        />
        <InputField
          label={"Celular"}
          name={"mobile"}
          value={data.mobile}
          onChange={handleChange}
          placeholder={"(xx)xxxxx-xxxx"}
        />
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          value={data.email}
          onChange={handleChange}
          placeholder={"email@email.com"}
        />
        <InputField
          label={"Site"}
          name={"website"}
          value={data.website}
          onChange={handleChange}
        />
        <InputField
          label={"CEP"}
          name={"zipCode"}
          value={data.zipCode}
          onChange={handleChange}
          placeholder={"xx.xxx-xx"}
        />
        <InputField
          label={"Endereço"}
          name={"adress"}
          value={data.adress}
          onChange={handleChange}
        />
        <InputField
          label={"Número"}
          name={"adressNumber"}
          value={data.adressNumber}
          onChange={handleChange}
        />
        <InputField
          label={"Bairro"}
          name={"neighborhood"}
          value={data.neighborhood}
          onChange={handleChange}
        />
        <InputField
          label={"Cidade"}
          name={"city"}
          value={data.city}
          onChange={handleChange}
        />
        <InputField
          label={"Banco"}
          name={"bank"}
          value={data.bank}
          onChange={handleChange}
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
          value={data.account}
          onChange={handleChange}
        />
        <InputField
          label={"Agência"}
          name={"bankingAgency"}
          value={data.bankingAgency}
          onChange={handleChange}
        />
        <InputField
          label={"Chave PIX"}
          name={"pix"}
          value={data.pix}
          onChange={handleChange}
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
