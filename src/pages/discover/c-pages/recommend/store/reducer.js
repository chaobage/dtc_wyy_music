import * as actionTypes from './constant'
// 引入immutable进行优化,Map对应对象,数组则使用List
import { Map } from 'immutable'


const defaultState = Map({
    topBanners:[],
    hotRecommend:[],
    newAlbum:[],
    soaringRanking:[],
    newSongRanking:[],
    originalRanking:[],
    settledSinger:[],
})

export default function recommendReducer(state = defaultState,action){
    switch (action.type) {
        // 设置bananer图
        case actionTypes.CHANGE_TOP_BANNERS:
            //immutable改变数据
            return state.set('topBanners',action.topBanners);
        // 设置热门推荐
        case actionTypes.CHANGE_HOT_RECOMMEND:
            //immutable改变数据
            return state.set('hotRecommend',action.hotRecommend);
        // 设置新碟上架
        case actionTypes.CHANGE_NEW_ALBUM:
            //immutable改变数据
            return state.set('newAlbum',action.newAlbum);


        // 设置榜单中的飙升榜
        case actionTypes.CHANGE_SOARING_RANKING:
            return state.set('soaringRanking',action.soaringRanking)
        // 设置榜单中的新歌榜
        case actionTypes.CHANGE_NEW_SONG_RANKING:
            return state.set('newSongRanking',action.newSongRanking)
        // 设置榜单中的原创榜
        case actionTypes.CHANGE_ORIGINAL_RANKING:
            return state.set('originalRanking',action.originalRanking)
        //设置入驻歌手 
        case actionTypes.CHANGE_SETTLED_SINGER:
            return state.set('settledSinger',action.settledSinger)
        default:
            return state
    }
}