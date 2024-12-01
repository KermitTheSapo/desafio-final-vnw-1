import React from "react";
import S from "./style.module.scss"
import { cardType } from "./type";

function Card({ img, alt, author, bookName, category }: cardType) {
    return (
        <div className={S.card}>
            <img className={S.card__img} src={img} alt={alt} />
            <div className={S.card__texts}>
                <p className={S.card__text}>{bookName}</p>
                <p className={S.card__text}>{author}</p>
                <p className={S.card__text}>{category}</p>
            </div>
        </div>
    )
}

export default React.memo(Card);