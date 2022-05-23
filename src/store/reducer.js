// import {combineReducers} from 'redux'
import { combineReducers } from 'redux-immutable'
import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store"
import {reducer as playerReducer} from '../pages/player/store/index'


// 此处也要对数据进行优化   因为redux中的combineReducers时使用Object.keys(obj),如果直接使用immutable将reducer对象转为immutable对象
// 导致combineReducers报错,所以我们使用redux-immutable封装好了的combineReducers  用法一样的
const  reducer = combineReducers({
        recommend:recommendReducer,
        player:playerReducer,
    })

// const  reducer = combineReducers({
//     recommend:recommendReducer
// })

export default reducer