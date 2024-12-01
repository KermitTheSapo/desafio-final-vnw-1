import React from "react";
import S from "./style.module.scss"
import poster from "../../../../assets/home/poster.png"
function Poster() {
    return (
        <div className={S.poster} style={{
            backgroundImage: `url(${poster})`
        }}>
            <h2 className={S.poster__title}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </div>
    )
}

export default React.memo(Poster);