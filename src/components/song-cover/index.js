import React, { memo } from 'react'


import {getCount} from '@/utils/format-utils.js'


import {CBSongCoverWrapper}  from './style'
import { getSizeImage } from '@/utils/format-utils'
const CBSongCover = memo((props) => {
  //props  state
  const {info} = props

  
  return (
    <CBSongCoverWrapper>
      <div className='sprite_cover container'>
        <a href=' ' className='img_cover'>
        </a>
        <img src={getSizeImage(info.picUrl,140)} alt={info.name} />
        <div className='bottom sprite_icon'>
            <i className='icon_headset sprite_icon'></i>
            <span className = 'play_count'>{getCount(info.playCount)}</span>
            <a   className='icon_play sprite_icon' href=' ' title='播放'> </a>
        </div>
        <div className='sprite_cover cover'></div>
      </div>
      <div className='intro '>
        <a  className='' href=' ' >{info.name}</a>
      </div>
    </CBSongCoverWrapper>
  )
})

export default CBSongCover