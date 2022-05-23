import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {getTopListAction} from '../../store/actionCreator'

import CBRecommendHeader from '@/components/recommend-c-header'
import {CBRecommendRankingWrapper} from './style'
import CBRcmTopRanking from '@/components/rcm-top-ranking'

const CBRecommendRanking = memo(() => {


// redux与数据关联
  const {soaringRanking,newSongRanking,originalRanking} = useSelector((state=>({
    soaringRanking:state.get('recommend').get('soaringRanking'),
    newSongRanking:state.get('recommend').get('newSongRanking'),
    originalRanking:state.get('recommend').get('originalRanking'),
  })),shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  useEffect(()=>{
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  },[dispatch])
  return (
    <CBRecommendRankingWrapper>
      <CBRecommendHeader title = '榜单'/>
      <div className='content'>
        <CBRcmTopRanking info = {soaringRanking} />
        <CBRcmTopRanking info = {newSongRanking} />
        <CBRcmTopRanking info = {originalRanking} />
      </div>
    </CBRecommendRankingWrapper>
  )
})

export default CBRecommendRanking