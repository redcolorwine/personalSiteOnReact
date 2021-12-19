import cmedia from './WorkItem.module.css'
const WorkItem = (props) => {
   var key=Number(props.id);

    return (
        <div className={cmedia.workItem}>
            <div className={cmedia.textArea}>
                <p>Данный сайт-одностраничка был написан, грубо говоря,
                    на коленке во время обучения в университете.
                    Максимально простой, лаконичный, но довольно приятный
                    на глаз. На тот момент особыми знаниями верстки я не
                    обладал, потому говорить об адаптиве смысла на тот
                    момент не было. Сайт был полностью резиновым :D
                    Тем не менее, преподавателю сайт понравился,
                    да и другим однокурсникам. К слову, представленные
                    фотографии сделаны мною лично, помимо "Веба",
                    мне очень нравится фотографировать.</p>
            </div>
            <div className={cmedia.imgArea}>
                {props.items[props.currentItems]}
                <button onClick={() => { props.nextItems(key);}}>Листать!</button>
              
            </div>
        </div>
    )
}

export default WorkItem;