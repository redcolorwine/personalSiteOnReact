import workOne_1 from '../media/images/proj/1.png';
import workOne_2 from '../media/images/proj/2.png';
import workTwo_1 from '../media/images/proj/6.png';
import workTwo_2 from '../media/images/proj/7.png';
import workThree_1 from '../media/images/proj/org/1.JPG';
import workThree_2 from '../media/images/proj/org/2.JPG';
import workFour_1 from '../media/images/proj/fss/1.JPG';
import workFour_2 from '../media/images/proj/fss/2.JPG';
import workFive_1 from '../media/images/proj/todoReact/1.PNG';
import workFive_2 from '../media/images/proj/todoReact/2.PNG';
import workFive_3 from '../media/images/proj/todoReact/3.PNG';
import workFive_4 from '../media/images/proj/todoReact/4.PNG';
const NEXT_ITEMS = 'NEXT_ITEMS';
//Инициализируем начальный State
let initialState = {
    //Счетчик текущих элементов для переключения между изображениями
    currentItems: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0
    },
    //Объект, где хранятся массивы путей изображений, которые в последствии будут преобразованы в теги Img
    works: {
        workOne: [workOne_1, workOne_2],
        workTwo: [workTwo_1, workTwo_2],
        workThree: [workThree_1, workThree_2],
        workFour: [workFour_1, workFour_2],
        workFive: [workFive_1, workFive_2, workFive_3, workFive_4],
        workSix: [workOne_1, workOne_2]
    },
    //Объект, хранящий описания работ
    worksText: {
        workOne: "Данный сайт-одностраничка был написан, грубо говоря, на коленке во время обучения в университете. Максимально простой, лаконичный, но довольно приятный на глаз. На тот момент особыми знаниями верстки я не обладал, потому говорить об адаптиве смысла на тот момент не было. Сайт был полностью резиновым :D Тем не менее, преподавателю сайт понравился, да и другим однокурсникам. К слову, представленные фотографии сделаны мною лично, помимо 'Веба', мне очень нравится фотографировать. ",
        workTwo: " Представляю наработки незаконченного Интернет-магазина одежды, который планировали открыть со своим приятелем. Но что-то пошло не так, и идею мы забросили. Но тем не менее, заниматься версткой было интересно. Тогда я тоже не особо умел верстать, но признаки адаптива уже прослеживаются. Видно, что главное меню при смене разрешения изменяется со строчного на блочный. На тот момент я уже начал действительно с большим интересом познавать 'азы' верстки и сильнее углубляться. К слову, помимо адаптива, научился использовать псевдо классы CSS типа hover и другие элементы анимации. И моему удивлению предела не было, ведь теперь сайты начали казаться реально 'живыми' и я наглядно видел отлик мыши, наведение и другие действия, что обычно делает пользователь сайта.",
        workThree: " Здесь я закончил свой первый 'TODO' лист, выглядит может и максимально просто, но я был доволен собой так как это первый мой проект, где я осознанно начал использовать JavaScript и Jquery(использование которого мне очень нравится и существенно упрощает разработку). Я смог не только добавлять и удалять элементы списка, но самое главное, что я смог хранить эти значения после закрытия браузера(ведь до этого я столкнулся с проблемой, что при обновлении страницы, все элементы исчезали и такой ежедневник был попросту бесполезен). Тут уже, разумеется, никакой резиновой верстки, а полноценный адаптив под разные разрешения экрана. Уже более осознанная работа, пусть и внешне выглядит не лучшим(в последующем на мой глаз) образом.",
        workFour: " Не могу не упомянуть сверстанный мной локальный сайт одного из филиалов гос.организации. Используется сотрудниками локально и по сей день. Находится на сервере и используется в основном как справочник для сотрудников. Можно сказать даже горжусь этой работой, хоть и внешне выглядит достаточно строго и просто. Помимо JavaScript, пришлось использовать и PHP, для вставки таблиц в центральный блок, при нажатии соответствующих кнопок. В адаптиве хоть и не было нужды, но я довольно неплохо его сверстал. Сделал все абсолютно добровольно и больше ради практики. ",
        workFive: " В ходе изучения ReactJS решил сразу же попрактиковаться и разработал простенький ToDO list.Могу отметить то, что в отличии от того же ToDo на Jquery, данный проект оказался более простым, лаконичным и особенно быстрым.Проект строится на базе React и Redux с использованием библиотеки react-redux, которая упрощает взаимодействие с Redux.Практически каждый элемент интерфейса представляет собой отдельную компоненту, включая обработчик неправильного ввода. ",
        workSix: " "
    }
}



const workReducer = (state = initialState, action) => {
    //Редьюсер пока принимает один Action
    //В зависимости от переданного project изменяются разные счетчики изображений, чтобы избежать переключение всех картинок сразу
    //Для каждой работы предусмотрены свои изображения и соответсвенно собственные счетчики
    switch (action.type) {
        case NEXT_ITEMS: {
            switch (action.project) {
                //Если счетчик достиг длины массива изображений, то обнуляем его
                case 1: {
                    if (state.currentItems.one === state.works.workOne.length - 1) {
                        state.currentItems.one = 0;
                        //Возращаем копию State и глубокую копию объектов при помощи спред оператора "..."
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    } else {
                        state.currentItems.one++;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    }
                }
                case 2: {
                    if (state.currentItems.two === state.works.workTwo.length - 1) {
                        state.currentItems.two = 0;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    } else {
                        state.currentItems.two++;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    }
                }
                case 3: {
                    if (state.currentItems.three === state.works.workThree.length - 1) {
                        state.currentItems.three = 0;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    } else {
                        state.currentItems.three++;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    }
                }
                case 4: {
                    if (state.currentItems.four === state.works.workFour.length - 1) {
                        state.currentItems.four = 0;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    } else {
                        state.currentItems.four++;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    }
                }
                case 5: {
                    if (state.currentItems.five === state.works.workFive.length - 1) {
                        state.currentItems.five = 0;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    } else {
                        state.currentItems.five++;
                        return {
                            ...state,
                            works: { ...state.works },
                            worksText: { ...state.worksText }
                        };
                    }
                }
                default: return state;
            }
        }
        default: return state;
    }
}



export default workReducer;