import * as actionTypes from "./constants";

import { 
  getTopBanner,
  // getHotRecommend,
  // getNewAlbum,
  // getTopList,
  // getArtistList
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners
});

// 获取banner数据
export const getBanner = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeBannerAction(res));
    })
  }
};