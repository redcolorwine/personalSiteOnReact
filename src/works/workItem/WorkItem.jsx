import cmedia from './WorkItem.module.css'
const WorkItem = (props) => {
    //Получаем переданный id
    var key = Number(props.id);
    return (
        //Выводим описание и элемент массива изображений с индексом равным текущему значению счетчика
        //При нажатии на кнопку передаем id project текущей компоненты для изменения текущего значения счетчика 
        <div className={cmedia.workItem}>
            <div className={cmedia.textArea}>
                <p>{props.worksText}</p>
            </div>
            <div className={cmedia.imgArea}>
                {props.items[props.currentItems]}
                <button onClick={() => { props.nextItems(key); }}>Листать!</button>
            </div>
        </div>
    )
}

export default WorkItem;