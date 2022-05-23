import React, { memo ,useEffect,useState} from 'react'

import { useSelector,useDispatch ,shallowEqual} from 'react-redux'
import {getTopBannersAction } from '../../store/actionCreator'



// 组件
import {Carousel} from 'antd'
import { BannerControl, BannerLeft, BannerRight, TopBannerWrapper } from './style'
import { createRef } from 'react'
import { useCallback } from 'react'

const CBTopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
    // state


  //组件与redux关联,获取数据和进行操作
  const {topBanners} = useSelector((state)=>({
    // topBanners:state.getIn(['recommend','topBanners'])
    topBanners:state.get('recommend').get('topBanners'),
    }),shallowEqual)
  const dispatch =  useDispatch()

  // 其他hooks
  const bannerRef = createRef()
  useEffect(()=>{
    dispatch(getTopBannersAction())
  },[dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他业务逻辑
  const backgroundImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')
  
  return (
    <TopBannerWrapper backgroundImage = {backgroundImage} >
        <div className='wrap-v2 banner'>
            <BannerLeft>
              <Carousel effect="fade" dots={ {className: 'banner_dot'}} autoplay ref =  {bannerRef} beforeChange={bannerChange}>
                  {
                    topBanners.map((item,index,arr)=>{
                      return <div className='banner_item' key={item.targetId}>
                            <img src={item.imageUrl} alt={item.typeTitle} />
                      </div>
                    })
                  }
              </Carousel>
            </BannerLeft>
            <BannerRight>
              <a  className='download' href=' '> </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
              <span className="shadow"></span>
            </BannerRight>
            <BannerControl>
              <button className='left' onClick={e=>bannerRef.current.prev()}></button>
              <button className='right' onClick={e=>bannerRef.current.next()}></button>
            </BannerControl>
        </div>
    </TopBannerWrapper>
  )
})

export default CBTopBanner