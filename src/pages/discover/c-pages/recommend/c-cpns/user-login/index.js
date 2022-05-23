import React, { memo } from 'react'
import {CBUserLoginWrapper} from './style'

const CBUserLogin = memo(() => {
  return (
    <CBUserLoginWrapper>
      <p className='login_note'> 登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className='login_btn' href=' '>用户登录</a>
    </CBUserLoginWrapper>
  )
})

export default CBUserLogin