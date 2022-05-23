import request from './request'
// 获取歌曲详情
export const  getSongDetail = function(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        },
    })
}
//获取歌词详情
export const getLyricById = function(id){
    return request({
        url:'/lyric',
        params:{
            id:id
        }
    })
}