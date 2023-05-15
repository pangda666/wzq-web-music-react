import React, { memo } from 'react';

import PDTopBanner from './c-cpns/top-banners';

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

const Recommend = memo(() => {

  return (
    <RecommendWraper>
      <PDTopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
})

export default Recommend;