import { connect } from "react-redux";
import Works from "./works";

//Контейнерная компонента для передачи props в презентационную компоненту <Works/>

const mapStateToProps = (state) => {
    return {
        works: state.workPage.works,
        currentItems: state.workPage.currentItems,
        worksText: state.workPage.worksText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextItems: (project) => {
            dispatch({
                type: 'NEXT_ITEMS',
                project: project
            })
        }
    }
}


const WorksContainer = connect(mapStateToProps, mapDispatchToProps)(Works);

export default WorksContainer;
