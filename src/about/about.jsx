import cmedia from './about.module.css'
import me from '../media/images/me.jpg'
const About = (props) => {
    // Страница "ОБО МНЕ" 
    // Просто выводим информацию
    return (
        <div className={cmedia.about}>
            <div className={cmedia.aboutText}>
                <h1>Меня зовут Сергей!</h1>
                <p>
                    Занимаюсь версткой и разработкой Веб-приложений.
                    Постоянно стараюсь изучать что-то новое и интересное.
                    После обучения в университете по специальности
                    "Информатика и вычислительная техника", нашел себя
                    именно в Веб-раработки и понял, что это мое.
                    Многое дается мне не без труда, но мне все это нравится,
                    потому что с каждой интересной и непростой задачей
                    приобретается бесценный опыт.
                </p>
            </div>
            <div className={cmedia.aboutImg}>
                <img src={me} alt="ME" />
            </div>


        </div>
    )
}

export default About;