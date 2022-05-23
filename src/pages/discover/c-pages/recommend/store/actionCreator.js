import * as actionTypes from './constant';
import {
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getSettledSinger,} from '@/services/recommend.js'


// 设置顶部banner图的action
const changeTopBannersAction = (res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
//设置热门推荐
const changeHotRecommendAction = (res)=>({
    type:actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend:res.result,
})
// 设置新碟上架
const changeNewAlbumAction = (res) =>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbum:res.albums,
})
// 设置飙升榜
const changeSoaringRankingAction = (res)=>({
    type:actionTypes.CHANGE_SOARING_RANKING,
    soaringRanking:res.playlist,
})
// 设置新歌榜
const changNewSongRankingAction = (res)=>({
    type:actionTypes.CHANGE_NEW_SONG_RANKING,
    newSongRanking:res.playlist,
})
// 设置原创榜
const changOriginalRankingAction = (res)=>({
    type:actionTypes.CHANGE_ORIGINAL_RANKING,
    originalRanking:res.playlist,
})
// 设置入驻歌手
const changeSettledSingerAction = res =>({
    type:actionTypes.CHANGE_SETTLED_SINGER,
    settledSinger:res.artists,
})

// 获取顶部banner图的网络请求
export const getTopBannersAction = ()=>{
    return dispatch =>{
        getTopBanners().then((res)=>{
            dispatch(changeTopBannersAction(res))
        })
    }
    
}
// 发送网络请求获取热门推荐
export const getHotRecommendAction = (limit) => {
    return dispatch =>{
        getHotRecommends(limit).then((res) => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}
//发送网络请求获取新碟上架 

export const getNewAlbumAction = (limit) =>{
    return dispatch =>{
        getNewAlbums(limit).then((res)=>{
            dispatch(changeNewAlbumAction(res))
        })
    }
}

// 发送网络请求获取recommend的榜单
export const getTopListAction = (idx)=>{
    return dispatch =>{
        getTopList(idx).then((res)=>{
            switch (idx) {
                case 0:
                    return dispatch(changNewSongRankingAction(res))
                case 2:
                    return dispatch(changOriginalRankingAction(res))
                case 3:
                    return dispatch(changeSoaringRankingAction(res))
                default:
                    break;
            }
        })
    }
}
// 获取入驻歌手list
export const getSettledSingerAction = (limit) => {
    return dispatch => {
        getSettledSinger(limit).then((res) => {
            dispatch(changeSettledSingerAction(res))
        })
    }
}