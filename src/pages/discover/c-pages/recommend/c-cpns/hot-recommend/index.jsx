import React, { memo, useEffect } from 'react'

import {getHotRecommendAction} from '../../store/actionCreator'
import { useDispatch, useSelector ,shallowEqual} from 'react-redux'

// 组件
import CBRecommendHeader from '@/components/recommend-c-header' 
import {CBHotRecommendList} from './style'
import CBSongCover from '@/components/song-cover'


const CBHotRecommend = memo(() => {
  // redux相关数据
  const {hotRecommend} = useSelector((state)=>{
    return{
      hotRecommend:state.get('recommend').get('hotRecommend'),
    }
  },shallowEqual)
  const dispatch = useDispatch()

  // hooks
  useEffect(()=>{
    dispatch(getHotRecommendAction(8))
  },[dispatch])
  return (
    <div>
      <CBRecommendHeader title = {'热门推荐'} keywords = {['华语','流行','民谣','电子','摇滚']}/>
      <CBHotRecommendList > 
        {
          hotRecommend.map((item,index,arr)=>{
            return( <div className='recommend_list' key={item.id}>
              <CBSongCover info = {item} key={item.id}/>
              </div>
            )
          })
        }
      </CBHotRecommendList>
    </div>
  )
})

export default CBHotRecommend