import WorkItem from './workItem/WorkItem';
import cmedia from './works.module.css'
const Works=(props)=>{
    var items1 = props.works.workOne.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    var items2 = props.works.workTwo.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    var items3 = props.works.workThree.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    var items4 = props.works.workFour.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    var items5 = props.works.workFive.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    var items6 = props.works.workSix.map((work) => {
        return (<img src={work} alt="workItem"/>)
    })
    return(
        <div className={cmedia.works}>
            <WorkItem items={items1} works={props.works} nextItems={props.nextItems}  currentItems={props.currentItems.one} id="1" />
            <WorkItem items={items2} works={props.works} nextItems={props.nextItems}  currentItems={props.currentItems.two} id="2" />
        </div>
    )
}

export default Works;