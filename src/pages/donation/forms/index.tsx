import React from "react";
import S from "./style.module.scss";
import Book from "../../../assets/donation/book.png";
function Forms() {
  return (
    <div className={S.forms}>
      <div className={S.forms__header}>
        <img className={S.forms__header__img} src={Book} alt="" />
        <h3 className={S.forms__header__title}>Informações do Livro</h3>
      </div>
      <div className={S.forms__inputs}>
        <input className={S.forms__input} type="text" placeholder="Titulo" />
        <input className={S.forms__input} type="text" placeholder="Categoria" />
        <input className={S.forms__input} type="text" placeholder="Autor" />
        <input
          className={S.forms__input}
          type="text"
          placeholder="Link da imagem"
        />
        <input className={S.forms__button} type="button" value="Doar" />
      </div>
    </div>
  );
}

export default React.memo(Forms);
