import React from "react";
import Card from "./components/card/card";
import Book from "../../assets/donated-books/book.png"
import S from "./style.module.scss"

function DonatedBooks () {
    return (
        <main className={S.donatedBooks}>
            <h1 className={S.donatedBooks__title}>Livros Doados</h1>
            <Card img={Book} bookName={"O protagonista"} author={"Susanne Andrade"} category={"Ficção"} alt={""} />
        </main>
    )
}

export default React.memo(DonatedBooks);