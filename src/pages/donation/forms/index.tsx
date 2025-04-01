import React, { useState } from "react";
import S from "./style.module.scss";
import Book from "../../../assets/donation/book.png";

function Forms() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    imagem_url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/doar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Livro doado com sucesso!");
        setFormData({
          titulo: "",
          categoria: "",
          autor: "",
          imagem_url: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Erro ao doar livro: ${errorData.erro}`);
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      alert("Erro ao doar livro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={S.forms}>
      <div className={S.forms__header}>
        <img className={S.forms__header__img} src={Book} alt="" />
        <h3 className={S.forms__header__title}>Informações do Livro</h3>
      </div>
      <div className={S.forms__inputs}>
        <input
          className={S.forms__input}
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
        />
        <input
          className={S.forms__input}
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={formData.categoria}
          onChange={handleChange}
        />
        <input
          className={S.forms__input}
          type="text"
          name="autor"
          placeholder="Autor"
          value={formData.autor}
          onChange={handleChange}
        />
        <input
          className={S.forms__input}
          type="text"
          name="imagem_url"
          placeholder="Link da imagem"
          value={formData.imagem_url}
          onChange={handleChange}
        />
        <input
          className={S.forms__button}
          type="button"
          value="Doar"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default React.memo(Forms);
