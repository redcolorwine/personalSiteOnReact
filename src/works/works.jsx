import WorkItem from './workItem/WorkItem';
import cmedia from './works.module.css'
const Works = (props) => {
    //В презентационной компоненты через props получаем изображения и 
    //при помощи map() преобразовывем из в картинки <img/>
    var items1 = props.works.workOne.map((work) => {
        return (<img src={work} alt="workItem" />)
    })
    var items2 = props.works.workTwo.map((work) => {
        return (<img src={work} alt="workItem" />)
    })
    var items3 = props.works.workThree.map((work) => {
        return (<img src={work} alt="workItem" />)
    })
    var items4 = props.works.workFour.map((work) => {
        return (<img src={work} alt="workItem" />)
    })
    var items5 = props.works.workFive.map((work) => {
        return (<img src={work} alt="workItem" />)
    })

    return (
        //В компоненту WorkItem передаем массивы картинок items[i], коллбэк для переключения изображений nextItems(), 
        // счетчики изображений currentItems(), описания worksText() и project id(передаваемый в dispatch для 
        // взаимодействия с требуемым счетчиком)
        <div className={cmedia.works}>
            <WorkItem items={items1} nextItems={props.nextItems} currentItems={props.currentItems.one} id="1" worksText={props.worksText.workOne} />
            <WorkItem items={items2} nextItems={props.nextItems} currentItems={props.currentItems.two} id="2" worksText={props.worksText.workTwo} />
            <WorkItem items={items3} nextItems={props.nextItems} currentItems={props.currentItems.three} id="3" worksText={props.worksText.workThree} />
            <WorkItem items={items4} nextItems={props.nextItems} currentItems={props.currentItems.four} id="4" worksText={props.worksText.workFour} />
            <WorkItem items={items5} nextItems={props.nextItems} currentItems={props.currentItems.five} id="5" worksText={props.worksText.workFive} />
        </div>
    )
}

export default Works;