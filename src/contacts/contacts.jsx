import cmedia from './contacts.module.css';
import meCartoon from '../media/images/mecartoon.jpg';
const Contacts = (props) => {
    return (
        <div className={cmedia.contacts}>
            <div className={cmedia.mainContacts}>
                <h1>Для связи со мной</h1>
                <p><a target='_blank' href="https://github.com/redcolorwine">Мой профиль GitHub</a></p>
                <p><a target='_blank' href="mailto:uremydeepsea@gmail.com">Почта для связи</a></p>
                <p><a target='_blank' href="https://instagram.com/redcolorwine">Мой инстаграм</a></p>
            </div>
            <div className={cmedia.meImg}>
                <img src={meCartoon} alt="me" />
            </div>
        </div>
    )
}

export default Contacts;