import React from "react";
import S from "./style.module.scss"
import Forms from "./forms";

function Donation () {
    return (
        <main className={S.donation}>
            <h2 className={S.donation__text}>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <Forms />
        </main>
    )
}

export default React.memo(Donation);