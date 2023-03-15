import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  getBanner
} from './store/actionCreators';

const Recommend = memo(() => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    banners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <>
      <div>Recommend</div>
    </>
  )
})

export default Recommend;