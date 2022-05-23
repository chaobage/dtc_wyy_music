import request from './request'

export function getTopBanners() {
   return request({
        url:'/banner'
    })
}

export function getHotRecommends(limit) {
    return request({
      url: "/personalized",
      params: {
        limit
      }
    })
  }
  
  export function getNewAlbums(limit) {
    return request({
      url: "/top/album",
      params: {
        limit
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
// 没找到入驻歌手的api,用热门歌手榜代替
  export function getSettledSinger(limit) {
    return request({
      url: "/artist/list",
      params: {
        limit
      }
    })
  }
  