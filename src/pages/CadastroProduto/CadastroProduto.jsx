import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField, SelectField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroProduto = () => {
  return (
    <Card title={"Cadastro de Produto"} icon={"bi bi-box-seam"}>
      <FormContainer>
        <InputField label={"Nome"} />
        <InputField label={"Marca"} />
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
        <InputField label={"Foto"} type={"file"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroProduto;
