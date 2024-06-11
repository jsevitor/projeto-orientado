import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField, SelectField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const EntradaProdutos = () => {
  return (
    <Card title={"Entrada de Produto"} icon={"bi bi-download"}>
      <FormContainer>
        <InputField label={"Produto"} name={"product"} />
        <InputField label={"Quantidade"} name={"quantity"} />
        <SelectField label="Fornecedor" value="">
          <option value="" disabled selected>
            Selecione
          </option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
        </SelectField>
        <InputField
          label={"Data de Entrada"}
          name={"entry-date"}
          type={"date"}
        />
        <InputField
          label={"Número de Lote"}
          name={"lot-number"}
          type={"number"}
        />
        <InputField label={"Preço de Compra"} name={"purchase-price"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default EntradaProdutos;
