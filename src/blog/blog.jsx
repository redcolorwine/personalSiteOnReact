import cmedia from './blog.module.css'
import blogCat from '../media/images/catagirl.png'
const Blog = (props) => {
    //Блог пока в разработке, потому пока просто вывод информации
    return (
        <div className={cmedia.blog}>
            <div className={cmedia.blogText}>
                <h1>Тут должно быть что-то интересное!</h1>
                <p>Но в данный момент блог не ведется.
                    Пусть тут будет эта красивая
                    картинка с красивой девушкой с красивой кошечкой :)</p>
            </div>
            <div className={cmedia.blogImg}>
                <img src={blogCat} alt="catGirl" />
            </div>

        </div>
    )
}

export default Blog;