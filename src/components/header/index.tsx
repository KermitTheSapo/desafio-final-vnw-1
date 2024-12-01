import React from "react";
import logo from "/favicon.svg"
import S from "./style.module.scss"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={S.header}>
            <div className={S.header__logo__div}>
                <img className={S.header__logo__img} src={logo} alt="Livro aberto com paginas brancas" />
                <h1 className={S.header__logo__title}>Livros Vai na Web</h1>
            </div>
            <ul className={S.header__list__ul}>
                <Link to="/" className={S.header__list__link}>
                    <li className={S.header__list__li}>Início</li>
                </Link>
                <Link to="/donated-books" className={S.header__list__link}>
                    <li className={S.header__list__li}>Livros Doados</li>
                </Link>
                <Link to="/donation" className={S.header__list__link}>
                    <li className={S.header__list__li}>Quero Doar</li>
                </Link>
            </ul>
            <div className={S.header__input__div}>
                <input className={S.header__input} type="text" placeholder="O que você procura?" />
            </div>
        </header>
    )
}

export default React.memo(Header);