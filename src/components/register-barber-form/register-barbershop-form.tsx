import { Button } from "@radix-ui/themes";

import { CrossCircledIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const RegisterBarbershopForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    cep: "",
    streetName: "",
    number: "",
    neighborhood: "",
    complement: "",
    city: "",
    state: "",
    cpfCnpj: "",
    whatsapp: "",
    logo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearField = (fieldName: string) => {
    setFormData({ ...formData, [fieldName]: "" });
  };

  return (
    <form className="register-form">
      <div>
        <div className="password-input-container">
          <input
            type="text"
            name="companyName"
            placeholder="Digite Nome da sua Empresa"
            className="register-input"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <div
            className="input-clear"
            onClick={() => clearField("companyName")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            className="register-input"
            value={formData.cep}
            onChange={handleInputChange}
          />
          <div className="input-clear" onClick={() => clearField("cep")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="text"
            name="streetName"
            placeholder="Nome da Rua"
            className="register-input"
            value={formData.streetName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-row">
          <div className="password-input-container">
            <input
              type="text"
              name="number"
              placeholder="Número"
              className="register-input"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
          <div className="password-input-container">
            <input
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              className="register-input"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="text"
            name="complement"
            placeholder="Complemento"
            className="register-input"
            value={formData.complement}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-row">
          <div className="password-input-container">
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              className="register-input"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="password-input-container">
            <input
              type="text"
              name="state"
              placeholder="UF"
              className="register-input"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="text"
            name="cpfCnpj"
            placeholder="CPF / CNPJ"
            className="register-input"
            value={formData.cpfCnpj}
            onChange={handleInputChange}
          />
          <div className="input-clear" onClick={() => clearField("cpfCnpj")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="text"
            name="whatsapp"
            placeholder="Digite o WhatsApp da Empresa"
            className="register-input"
            value={formData.whatsapp}
            onChange={handleInputChange}
          />
          <div className="input-clear" onClick={() => clearField("whatsapp")}>
            <CrossCircledIcon />
          </div>
        </div>
        <div className="password-input-container">
          <input
            type="file"
            name="logo"
            className="register-input"
            onChange={(e) =>
              setFormData({
                ...formData,
                logo: e.target.files?.[0]?.name || "",
              })
            }
          />
          <div className="password-toggle">
            <ArrowUpIcon />
          </div>
        </div>
      </div>
      <Button type="submit" className="button-submit">
        Entrar
      </Button>
    </form>
  );
};

export default RegisterBarbershopForm;
