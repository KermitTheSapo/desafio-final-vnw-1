import React, { useEffect, useState } from "react";
import Card from "./components/card/card";
import S from "./style.module.scss";
import { Book } from "./type";

function DonatedBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/livros")
      .then((response) => response.json())
      .then((data: Book[]) => {
        setBooks(data);
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  return (
    <main className={S.donatedBooks}>
      <h1 className={S.donatedBooks__title}>Livros Doados</h1>
      {books.length > 0 ? (
        books.map((book) => (
          <Card
            key={book.id}
            img={book.imagem_url}
            bookName={book.titulo}
            author={book.autor}
            category={book.categoria}
            alt={book.alt}
          />
        ))
      ) : (
        <p>Nenhum livro disponível no momento.</p>
      )}
    </main>
  );
}

export default React.memo(DonatedBooks);
