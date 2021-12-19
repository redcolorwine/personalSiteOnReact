import workOne_1 from '../media/images/proj/1.png';
import workOne_2 from '../media/images/proj/2.png';
import workTwo_1 from '../media/images/proj/6.png';
import workTwo_2 from '../media/images/proj/7.png';
const NEXT_ITEM = 'NEXT_ITEM';
const NEXT_ITEMS = 'NEXT_ITEMS';
let initialState = {
    currentItem: 0,
    currentItems:{
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0
    },
    workOne: [workOne_1, workOne_2],
    works: {
        workOne: [workOne_1, workOne_2],
        workTwo: [workTwo_1, workTwo_2],
        workThree: [workOne_1, workOne_2],
        workFour: [workOne_1, workOne_2],
        workFive: [workOne_1, workOne_2],
        workSix: [workOne_1, workOne_2]
    }
}



const workReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEXT_ITEM: {
            if (state.currentItem === state.workOne.length - 1) {
                state.currentItem = 0;
                return {
                    ...state,
                    workOne: [...state.workOne]
                };
            } else {
                state.currentItem++;
                return {
                    ...state,
                    workOne: [...state.workOne]
                };
            }
        }
        case NEXT_ITEMS: {
            switch (action.project) {
                case 1: {
                    if (state.currentItems.one === state.works.workOne.length - 1) {
                        state.currentItems.one = 0;
                        
                        return {
                            ...state,
                            works:state.works
                            
                            
                        };
                        
                    } else {
                        state.currentItems.one++;
                        debugger;
                        return {
                            ...state,
                            works:state.works
                          
                        };
                        
                    }
                }
                case 2: {
                    if (state.currentItems.two === state.works.workTwo.length - 1) {
                        state.currentItems.two = 0;
                        return {
                            ...state,
                            works:state.works
                            
                        };
                    } else {
                        state.currentItems.two++;
                        return {
                            ...state,
                            works:state.works
                            
                        };
                    }
                }
                // case 3: {
                //     if (state.currentItem === state.workThree.length - 1) {
                //         state.currentItem = 0;
                //         return {
                //             ...state,
                //             workThree: [...state.workThree]
                //         };
                //     } else {
                //         state.currentItem++;
                //         return {
                //             ...state,
                //             workThree: [...state.workThree]
                //         };
                //     }
                // }
                // case 4: {
                //     if (state.currentItem === state.workFour.length - 1) {
                //         state.currentItem = 0;
                //         return {
                //             ...state,
                //             workFour: [...state.workFour]
                //         };
                //     } else {
                //         state.currentItem++;
                //         return {
                //             ...state,
                //             workFour: [...state.workFour]
                //         };
                //     }
                // }
                // case 5: {
                //     if (state.currentItem === state.workFive.length - 1) {
                //         state.currentItem = 0;
                //         return {
                //             ...state,
                //             workFive: [...state.workFive]
                //         };
                //     } else {
                //         state.currentItem++;
                //         return {
                //             ...state,
                //             workFive: [...state.workFive]
                //         };
                //     }
                // }
                // case 6: {
                //     if (state.currentItem === state.workSix.length - 1) {
                //         state.currentItem = 0;
                //         return {
                //             ...state,
                //             workSix: [...state.workSix]
                //         };
                //     } else {
                //         state.currentItem++;
                //         return {
                //             ...state,
                //             workSix: [...state.workSix]
                //         };
                //     }
                // }
                default: return state;
            }
        }
        default: return state;
    }
}



export default workReducer;