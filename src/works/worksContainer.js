import { connect } from "react-redux";
import Works from "./works";




const mapStateToProps = (state) => {
    return {
        currentItem: state.workPage.currentItem,
        workOne:state.workPage.workOne,
        works: state.workPage.works,
        currentItems: state.workPage.currentItems
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        nextItem: () => {
            dispatch({
                type: 'NEXT_ITEM'
            })
        },
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
