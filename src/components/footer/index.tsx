import React from "react";
import S from "./style.module.scss"
import Facebook from "../../assets/footer/facebook.svg"
import Instagram from "../../assets/footer/instagram.svg"
import Linkedin from "../../assets/footer/linkedin.svg"
import Twitter from "../../assets/footer/twitter.svg"
import Youtube from "../../assets/footer/youtube.svg"

function Footer() {
    return (
        <footer className={S.footer}>
            <div className={S.footer__div}>
                <p className={S.footer__div_phone}>4002-8922</p>
                <div className={S.footer__div_icons}>
                    <img className={S.footer__div_icon} src={Facebook} alt="logo do facebook" />
                    <img className={S.footer__div_icon} src={Twitter} alt="logo do twitter" />
                    <img className={S.footer__div_icon} src={Youtube} alt="logo do Youtube" />
                    <img className={S.footer__div_icon} src={Linkedin} alt="logo do linkedin" />
                    <img className={S.footer__div_icon} src={Instagram} alt="logo do instagram" />
                </div>
            </div>
            <div className={S.footer__div2}>
                <p className={S.footer__div2_text}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </div>
        </footer>
    )
}

export default React.memo(Footer);