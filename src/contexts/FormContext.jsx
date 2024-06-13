// FormContext.js

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialFornecedorData = {
    name: "",
    cnpj: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    zipCode: "",
    address: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    bank: "",
    account: "",
    bankingAgency: "",
    pix: "",
  };

  const initialProdutoData = {
    name: "",
    brand: "",
    picture: "",
  };

  const [fornecedorData, setFornecedorData] = useState(initialFornecedorData);
  const [produtoData, setProdutoData] = useState(initialProdutoData);
  // const [errors, setErrors] = useState({});

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    switch (formType) {
      case "fornecedor":
        setFornecedorData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "produto":
        setProdutoData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    toast.warning("Preencha os campos!");
  };

  const handleCancel = () => {
    setFornecedorData(initialFornecedorData);
    setProdutoData(initialProdutoData);
  };

  return (
    <FormContext.Provider
      value={{
        fornecedorData,
        produtoData,
        handleChange,
        handleSubmit,
        handleCancel,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
