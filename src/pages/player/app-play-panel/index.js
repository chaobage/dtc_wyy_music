import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual,useDispatch,useSelector } from 'react-redux'

import {formatMinuteSecond} from '@/utils/format-utils.js'
import {getSongDetailAction} from '../store/actionCreator'

import {PlayPanelWrapper,CBHead,CBContainer,SongList,LyricList} from './style'
const CBPlayPanel = memo(() => {



  // redux
  const dispatch = useDispatch()
   const {playList,
    lyricList,
    currentSong,
    currentLyricIndex
  } = useSelector((state)=>({
    playList:state.getIn(['player','playList']),
    lyricList:state.getIn(['player','lyricList']),
    currentSong:state.getIn(['player','currentSong']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex']),
   }),shallowEqual)

   //react  hook
   const lyricRef = useRef()
   useEffect(()=>{
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    lyricRef.current.scrollTo(0,(currentLyricIndex - 3) * 32)
    
   },[currentLyricIndex])
  return (
    <PlayPanelWrapper className='wrap-v2'>
      <CBHead>
          <span className='page_title'>播放列表(18)</span>
          <button  className='like_all' href=''><i className='add_ico'></i>收藏全部</button>
          <span className='line'></span>
          <button className='clear'><i className='clear_ico'></i>清除</button>
          <span className='song_title text-nowrap'>{currentSong.name}</span>
          <button className='close'></button>
      </CBHead>
      <CBContainer>
          <SongList>
            {playList.map((item,index)=>{
              return <li className={`item ${currentSong.id === item.id ? 'item_active' : ''}`} 
                          key={item.id} 
                          onClick = {e => dispatch(getSongDetailAction(item.id)) }>
              <span className='title text-nowrap'>{item.name}</span>
              <div className='control'>
                <button className='delete_ico'></button>
                <button className='download_ico'></button>
                <button className='share_ico'></button>
                <button className='add_ico'></button>
              </div>
              <div className='info'>
                <a className='author' href=' '>{item.ar[0].name}</a>
                <span className='duration_time'>{formatMinuteSecond(item.dt / 1000)}</span>
                <a className='from_list' href=' '> </a>
              </div>
            </li>
            })}
              <div className='mask'></div>
          </SongList>
          <LyricList ref = {lyricRef}>
            {lyricList && lyricList.map((item,index)=>{
              return <p className={`lyric_line ${index === currentLyricIndex ? 'lyric_active' : ''}`} key={index}>{item.content}</p>
            })
            }
              
              <a  className='report_error' title='报错' href=' '> </a>
            <div className='mask'></div>

          </LyricList>
      </CBContainer>
    </PlayPanelWrapper>
  )
})

export default CBPlayPanel