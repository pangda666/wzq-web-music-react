import { combineReducers } from "redux-immutable"; // 优化react-redux使用hooks替换connect函数导致的性能问题：只要组件引用了redux数据，尽管这个数据没有被引用，数据变更时组件都会被更新

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

export default combineReducers({
  recommend: recommendReducer,
});