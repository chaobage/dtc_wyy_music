import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector ,useDispatch} from 'react-redux'

import {getNewAlbumAction} from '../../store/actionCreator'

// 组件
import  {Carousel} from 'antd'
import {CBNewAlbumWrapper} from './style'
import CBRecommendHeader from '@/components/recommend-c-header' 
import AlbumCover from '@/components/album-cover'



const CBNewAlbum = memo(() => {


  // redux与数据关联
   const {newAlbum} = useSelector((state) => ({
    newAlbum:state.get('recommend').get('newAlbum'),
   }),shallowEqual)
   const dispatch = useDispatch()

  //  其他hooks
  const newAlbumRef = useRef()
  useEffect(()=>{
    dispatch(getNewAlbumAction(10))
  },[dispatch])

  return (
    <CBNewAlbumWrapper >
      <CBRecommendHeader title ='新碟上架'  />
      <div className='content'>
      <Carousel /* autoplay */ dots = {false} ref = {newAlbumRef}>
        {[0,1].map((item)=>{
          return (<div className='page' key = {item}>
            {
              newAlbum && newAlbum.slice(item*5,(item+1)*5).map((iten)=>{
                return <div  className='album_list'   key={iten.id} >
                  <AlbumCover 
                    info = {iten} 
                    size = '100' 
                    width = '118'
                    bgp = "-570px" />
                </div> 
              })
            }
          </div>)
        })}
      </Carousel>
      <button className='btn left' onClick={(e)=>{newAlbumRef.current.prev()}}></button>
      <button className='btn right' onClick={(e)=>{newAlbumRef.current.next()}}></button>
      </div>
      </CBNewAlbumWrapper>
  )
})

export default CBNewAlbum