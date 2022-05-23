import {getSongDetail,getLyricById} from '@/services/player.js'
import {getRandomNumber,parseLyric} from '@/utils/format-utils.js'
import * as actionTypes from './constant'

// 设置歌曲详情的action
const changeCurrentSongAction = (song) =>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong:song,
})
//设置播放列表的action
const changePlayListAction = (playList) => ({
    type:actionTypes.CHANGE_PLAY_LIST,
    playList:playList,
}) 
//设置当前播放index的action
const changeCurrentSongIndexAction = (index) => ({
    type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex:index,
}) 

const changeLyricListAction = (lyricList)=>({
    type:actionTypes.CHANGE_LYRIC_LIST,
    lyricList,
})
export const changeCurrentLyricIndexAction = (currentLyricIndex)=>({
    type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})
// 切换播放模式
export  const changePlayModeAction = (currentMode)=>{
    if(currentMode === 3) currentMode = 0
    return {
        type:actionTypes.CHANGE_PLAY_MODE,
        playMode:currentMode,
    }
}


//切换播放歌曲的action
export const changePlaySongAction = (tag) => {
    return (dispatch,getState)=>{
        //获取当前播放的index
        let currentSongIndex = getState().getIn(['player','currentSongIndex'])
        const playList = getState().getIn(['player','playList'])
        const playMode = getState().getIn(['player','playMode'])
        switch (playMode) {
            // 1为随机播放,需要将当前播放的index随机为一个新的index
            case 1:         
                currentSongIndex = getRandomNumber(playList.length,currentSongIndex)    
                break;
            // 当播放模式是列表循环时,上一首传入tag为-1,下一首传入tag为1
            default:
                currentSongIndex += tag 
                if(currentSongIndex === playList.length) currentSongIndex = 0;
                if(currentSongIndex === -1) currentSongIndex = playList.length-1;
        }
        // 处理修改数据
        const song = playList[currentSongIndex]
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(changeCurrentSongAction(song))
      

        
        // 处理歌词 还没写
        getLyricById(song.id).then((res)=>{
            const lyric = res.lrc.lyric
            const lyricList = parseLyric(lyric)
            dispatch(changeLyricListAction(lyricList))
        })
    }
}

// 获取歌曲详情
export const getSongDetailAction = (ids)=>{
    return (dispatch,getState)=>{
        // 获取当前播放列表
        const playList = getState().getIn(['player','playList'])
        // 查看获取的歌曲信息在播放列表里面的index
        const SongIndex = playList.findIndex(item => item.id === ids)
        getSongDetail(ids).then((res)=>{
            const song = res.songs && res.songs[0]
            if(!song) return;
            if (SongIndex === -1) {
                const newPlayList  = [...playList]
                newPlayList.push(song)
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongAction(song))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
            } else {
                dispatch(changeCurrentSongAction(song))
                dispatch(changeCurrentSongIndexAction(SongIndex))
            }
            getLyricById(song.id).then((res)=>{
                const lyric = res.lrc.lyric
                const lyricList = parseLyric(lyric)
                dispatch(changeLyricListAction(lyricList))
            })
        }) 
        
    }
}

  
