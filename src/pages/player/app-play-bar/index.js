import React, { memo, useCallback, useEffect, useRef ,useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'



import {getSizeImage,getPlayUrl,formatMinuteSecond} from '@/utils/format-utils.js'
import {getSongDetailAction,changePlaySongAction,changePlayModeAction,changeCurrentLyricIndexAction} from '../store/actionCreator'

import { NavLink } from 'react-router-dom'
import {Slider} from 'antd'
import {PlayerBarWrapper,CBPlayerControl,CBPlayerInfo,CBPlayerOperate} from './style'
import CBPlayPanel from '../app-play-panel'


const CBPlayerBar = memo(() => {
    // state
    const  [isPlaying, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChanging, setIsChanging] = useState(false)

    const dispatch = useDispatch()
    const {currentSong,
        playList,
        playMode,
        lyricList,
        currentLyricIndex
    } = useSelector((state)=>({
        currentSong:state.getIn(['player','currentSong']),
        playList:state.getIn(['player','playList']),
        playMode:state.getIn(['player','playMode']),
        lyricList:state.getIn(['player','lyricList']),        
        currentLyricIndex:state.getIn(['player','currentLyricIndex']),        
    }),shallowEqual)

    //react hook 
    const audioRef = useRef()

    // 获取歌曲信息
    useEffect(()=>{
        dispatch(getSongDetailAction(331404))
        
    },[dispatch])

    //获取歌曲时间 
    useEffect(()=>{
        setDuration(currentSong.dt)
    },[currentSong])

    // 获取歌曲播放地址
    useEffect(() => {
        audioRef.current.src = getPlayUrl(currentSong.id)
        if (isPlaying) {
            audioRef.current.play()
        }
       /*  audioRef.current.play().then((res)=>{
            setPlaying(true)
        }
        ).catch((err)=>{
            setPlaying(false)
        }
        ) */
    }, [currentSong])
    
    // 点击播放按钮,获取歌曲播放src   或者切换播放/暂停
    const play = useCallback(()=>{
        isPlaying ?  audioRef.current.pause() : audioRef.current.play() 
        setPlaying(!isPlaying)  
    },[isPlaying])

    // 其他业务代码

    //设置当前播放时间  使用audio的回调
    const handleTimeupdate = (e)=>{
        const time = e.target.currentTime
        if (isChanging === false) {
            setCurrentTime(time)
            setProgress(time * 1000 / duration *100)
            const index = lyricList.findIndex((item)=>{
                return item.time / 1000 > time 
            })
            let newLyricIndex = index - 1
            if(index === 0) newLyricIndex = index
            if(index === -1) newLyricIndex = lyricList.length - 1
            if(newLyricIndex !== currentLyricIndex) dispatch(changeCurrentLyricIndexAction(newLyricIndex))
        }

    }
    const handleEnded = (e) => {
    
        if(playMode === 2){//单曲循环
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else {
            dispatch(changePlaySongAction(1))
        }
    }
    //滑动滑块的回调
    const sliderChange = useCallback(
      (value) => {
          
        setIsChanging(true)
        setProgress(value)
        setCurrentTime(duration/1000 * value/100)
      },
      [duration],
    )
    // 停止滑动滑块的回调
    const sliderAfterChange = useCallback(
        (value) => {
            const time = duration/1000 * value/100
            setIsChanging(false)
            audioRef.current.currentTime = time
            setProgress(value)
            setCurrentTime(time)
        },
        [duration],
      )

    const singerName = currentSong.ar && currentSong.ar[0].name
    const coverPicture = currentSong.al && currentSong.al.picUrl
    const hasMV = true
  return (
    <PlayerBarWrapper className='sprite_player' >
        <div className=' wrap-v2 content' >
            <CBPlayerControl  isPlaying={isPlaying}>
                <button 
                    onClick = {e=>dispatch(changePlaySongAction(1)) } 
                    className='prev sprite_player' title = '上一首ctrl + ←'></button>
                <button onClick= {e=>play()} className='play sprite_player' title = '播放/暂停(p)'></button>
                <button 
                    onClick = {e=>dispatch(changePlaySongAction(-1)) } 
                    className='next sprite_player' title = '下一首ctrl + →'></button>
            </CBPlayerControl>
            <CBPlayerInfo >
                <div className='cover_container'>
                    <img src={getSizeImage(coverPicture,34)} alt=' '/>
                    <NavLink className='cover sprite_player' to = '/discover/player'> </NavLink>
                </div>
                <div>
                    <div className='sons_info'>
                        <NavLink className='songName text-nowrap' 
                            to = '/discover/player' 
                            title = {currentSong.name}>
                                {currentSong.name}
                        </NavLink>
                        {hasMV?<a className='mv sprite_player' href=' ' title='MV'> </a>:''}
                        <a className='singer_name text-nowrap' href=' ' 
                            title= {singerName}>
                                {singerName}
                        </a>
                        <a className='from_list sprite_player' href=' ' title='来自歌单'> </a>

                    </div>
                    <div className='progress'>
                        <Slider value = {progress} 
                            onChange={sliderChange} 
                            onAfterChange = {sliderAfterChange} 
                            tooltipVisible={false}/>
                        <span className='time'>
                            <em>{formatMinuteSecond(currentTime)}</em> / {formatMinuteSecond(duration / 1000)}
                        </span>
                    </div>
            </div>
        </CBPlayerInfo>
        <CBPlayerOperate className='' playMode = {playMode} >
            <div className='left'>
                <button className='picture_lyrics' title='画中画歌词' href=' '> </button>
                <button className='collect sprite_player' title='收藏' href=' '> </button>
                <button className='share sprite_player' title='分享' href=' '> </button>
            </div>
            <div className='right sprite_player'>
                <button className='volume sprite_player' >  </button>
                <button 
                onClick={e=>dispatch(changePlayModeAction(playMode+1))} 
                className='mode sprite_player' title='循环/随机/单曲循环'> </button>
                <div className='add_to_list sprite_player' title='播放列表'> 
                    <span>{playList.length}</span>
                 </div>
            </div>
        </CBPlayerOperate>
        </div>
        <audio ref={audioRef} onTimeUpdate={e => handleTimeupdate(e)} onEnded={e => handleEnded(e) } />
        <CBPlayPanel/>
    </PlayerBarWrapper>

  )
})

export default CBPlayerBar