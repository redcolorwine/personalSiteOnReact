import cmedia from './main.module.css'
import logocss from '../media/images/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png';
import logohtml from '../media/images/kisspng-html-web-design-scalable-vector-graphics-world-wid-html5-icon-hd-5ab0c85c377aa0.0639325615215350682273.png'
import logojs from '../media/images/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b1a2a1f9.2428698915320700656662.png'
import logojquery from '../media/images/kisspng-blue-symbol-sphere-logo-jquery-5ab0be39672e44.7155775415215324734226.png'
import logoreact from '../media/images/reactblue.png'
import logoredux from '../media/images/redux.png'
const Main = (props) => {
    // Главная страница приложения
    // с стеком технологий, которые я практикую и постоянно изучаю
    return (
        <div className={cmedia.main}>
            <div className={cmedia.myLogo}>
                <h1>Приветствую Вас на моем сайте-визитке!</h1>
                <p>Я начинающий разработчик, горю желанием заниматься разработкой веб-приложений и версткой страниц.
                    Поэтому с большим желанием выполню любой проект :3</p>
                <div className={cmedia.stack}>
                    <div className={cmedia.stacklogo}>
                        <img src={logohtml} alt="" />
                    </div>
                    <div className={cmedia.stacklogo}>
                        <img src={logocss} alt="" />
                    </div>
                    <div className={cmedia.stacklogo}>
                        <img src={logojs} alt="" />
                    </div>
                    <div className={cmedia.stacklogo}>
                        <img src={logojquery} alt="" />
                    </div>
                    <div className={cmedia.stacklogo}>
                        <img src={logoreact} alt="" />
                    </div>
                    <div className={cmedia.stacklogo}>
                        <img src={logoredux} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;