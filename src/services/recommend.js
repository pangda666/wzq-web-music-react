import request from "./axios";

// banner查询
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

// 热门推荐查询
export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}

// 专辑获取
export function getNewAlbum(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}


export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}