import React, { memo, useEffect } from 'react'
import { shallowEqual,useSelector,useDispatch } from 'react-redux'

import {getSizeImage} from '@/utils/format-utils'
import {getSettledSingerAction} from '../../store/actionCreator'
 
import {CBSettledSingerWrapper} from './style'
import CBThemeHeaderSmall from '@/components/theme-header-small'

const CBSettledSinger = memo(() => {


  // redux hook
  const {settledSinger} = useSelector((state)=>({
    settledSinger:state.getIn(['recommend',"settledSinger"])
  }),shallowEqual)
  const dispatch = useDispatch()

  // react hook
  useEffect(()=>{
    dispatch(getSettledSingerAction(5))
  },[dispatch])


  return (
    <CBSettledSingerWrapper>
      <CBThemeHeaderSmall title = '入驻歌手' more = "查看全部 >" />
      <ul className='list'>
        {settledSinger.map((item,index,arr) => {
          return <a className='item' key = {item.id} href =' '>
              <img src={getSizeImage(item.img1v1Url,62)} alt =''/>
              <div className='info'>
                <p className='name text-nowrap'>{item.name}</p>
                <p className='intro text-nowrap'>{item.name + (item.alias[0]?item.alias[0]:'')}</p>
              </div>
          </a>
        })}
      </ul>
      <div >
        <a className='recruit' href=' ' >申请成为网易音乐人</a>
      </div>
    </CBSettledSingerWrapper>
  )
})

export default CBSettledSinger