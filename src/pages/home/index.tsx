import React from "react";
import S from "./style.module.scss"
import Card from "./components/card/card";
import Community from "../../assets/home/community.png";
import Reading from "../../assets/home/reading.png";
import Transform from "../../assets/home/transform.png";
import Balance from "../../assets/home/balance.png";
import Poster from "./components/poster";

function Home() {
    return (
        <main>
            <Poster />
            <div className={S.home}>
                <h2 className={S.home__title}>Por que devo doar?</h2>
                <div className={S.home__div}>
                    <Card img={Community} text={"Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."} alt={""} />
                    <Card img={Reading} text={"Estimula o hábito da leitura e o aprendizado contínuo."} alt={""} />
                    <Card img={Transform} text={"Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."} alt={""} />
                    <Card img={Balance} text={"Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."} alt={""} />
                </div>
            </div>
        </main>
    )
}

export default React.memo(Home);