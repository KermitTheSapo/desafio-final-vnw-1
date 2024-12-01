import React from "react";
import S from "./style.module.scss"
import { cardType } from "./type";

function Card({ img, alt, text }: cardType) {
    return (
        <div className={S.card}>
            <img className={S.card__img} src={img} alt={alt} />
            <p className={S.card__text}>{text}</p>
        </div>
    )
}

export default React.memo(Card);