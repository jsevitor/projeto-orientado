import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField, SelectField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const CadastroProduto = () => {
  const [data, setData] = useState({
    name: "",
    brand: "",
    picture: "",
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
      brand: "",
      picture: "",
    });
  };

  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <ToastContainer />
      <FormContainer>
        <InputField
          label={"Nome"}
          name={"name"}
          value={data.name}
          onChange={handleChange}
        />
        <InputField
          label={"Marca"}
          name={"brand"}
          value={data.brand}
          onChange={handleChange}
        />
        <SelectField label="Categoria" value="">
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <SelectField label="Fornecedor" value="">
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <InputField
          label={"Foto"}
          type={"file"}
          name={"picture"}
          value={data.picture}
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

export default CadastroProduto;
