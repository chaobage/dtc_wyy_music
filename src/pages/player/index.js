import React, { memo } from 'react'



import {PlayerWrapper,LeftWrapper} from './style'
const CBPlayer = memo(() => {
  return (
    <PlayerWrapper className='wrap-v1'>
        <LeftWrapper>
            <div className='playInfo'>歌词等信息</div>
            <div className='comment'>评论列表</div>
        </LeftWrapper>
        <LeftWrapper>
            <div className='simi_playList'>相似歌单</div>
            <div className='simi_songs'>相似歌手</div>
            <div className='download'> 下载客户端</div>
            <input />
        </LeftWrapper>
    </PlayerWrapper>
  )
})

export default CBPlayer