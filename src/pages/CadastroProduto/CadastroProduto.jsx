import { BsBoxSeam } from "react-icons/bs";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import InputField from "../../components/Form/Form";
import { ButtonContainer, FormContainer } from "./Styles";

const CadastroProduto = () => {
  return (
    <Card title={"Cadastro de Produto"} icon={BsBoxSeam}>
      <FormContainer>
        <InputField label={"Nome"} />
        <InputField label={"Marca"} />
        <InputField label={"Categoria"} />
        <InputField label={"Fornecedor"} />
        <InputField label={"Foto"} />
      </FormContainer>
      <ButtonContainer>
        <Button label={"Adicionar"} />
        <Button label={"Cancelar"} />
      </ButtonContainer>
    </Card>
  );
};

export default CadastroProduto;
