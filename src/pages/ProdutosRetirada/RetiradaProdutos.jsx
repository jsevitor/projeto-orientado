import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { InputField } from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const RetiradaProdutos = () => {
  return (
    <Card title={"Retirada de Produto"} icon={"bi bi-upload"}>
      <FormContainer>
        <InputField label={"Produto"} name={"product"} />
        <InputField label={"Quantidade"} name={"quantity"} />
        <InputField label={"Tipo de Saída"} name={"type"} />
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
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default RetiradaProdutos;
