/* 
  推荐页-轮播图组件
*/
import React, { memo, useState, useRef, useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  getBanner, // 获取banner数据
} from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

const PDTopBanner = memo(() => {
  const [ curIndex, setCurIndex ] = useState(0); // 当前显示banner图下标

  const dispatch = useDispatch();
  const { banners } = useSelector(state => ({
    banners: state.getIn([ 'recommend', 'topBanners' ])
  }), shallowEqual);

  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setCurIndex(to);
  }, []);

  const bgImage = banners[curIndex] && (banners[curIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
            {
              banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default PDTopBanner;