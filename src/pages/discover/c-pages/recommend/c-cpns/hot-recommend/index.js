/* 
  推荐页-热门推荐组件
*/
import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  getRecommend
} from "../../store/actionCreators";
import { useEffect } from 'react';

import { 
  RecommendWrapper
} from "./style";
import {
  PDThemeHeaderRCM,
  PDThemeCover
} from 'components';

const HotRecommend = memo(() => {
  const dispatch = useDispatch();
  const { recommends } = useSelector(state => ({
    recommends: state.getIn([ 'recommend', 'hotRecommends' ])
  }), shallowEqual);

  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);

  return (
    <RecommendWrapper>
      <PDThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}/>
      <div className="recommend-list">
        {
          recommends.slice(0, 8).map((item) => {
            return (
              <PDThemeCover info={item} key={item.id}/>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
})

export default HotRecommend