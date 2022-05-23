import React, { memo } from 'react'


import { getSizeImage } from '@/utils/format-utils'


import {CBAlbumCoverWrapper} from './style'
const AlbumCover = memo((props) => {
    const {info = {picUrl:'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',name:'超八夯夯夯哈哈哈哈行ahahaha',artist:{name:'超八'}},size, width, bgp} = props
  
    return (
    <CBAlbumCoverWrapper width = {width} size={size} bgp = {bgp}>
        <div className="cover">
            <img src={getSizeImage(info.picUrl,size)} alt={info.name} className = 'cover_img'/>
            <a className='mask ' href=' ' > </a>
            <a className='play_icon sprite_icon' href=' ' title='播放'> </a>
        </div>
        <p className='title'>
            <a href=" " className="song_name text_nowrap">{info.name}</a>
            <a href=" " className="song_author text_nowrap">{info.artist.name}</a>
        </p>

    </CBAlbumCoverWrapper>
  )
})

export default AlbumCover