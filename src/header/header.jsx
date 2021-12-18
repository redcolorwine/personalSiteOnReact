import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css'

const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <ul className={cmedia.navmenu}>
                <li><NavLink to="/main">Главная</NavLink></li>
                <li><NavLink to="/about">Обо мне</NavLink></li>
                <li><NavLink to="/works">Мои работы</NavLink></li>
                <li><NavLink to="/blog">Блог</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;