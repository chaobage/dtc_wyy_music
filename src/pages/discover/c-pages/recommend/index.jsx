import React, { memo} from 'react'



// 组件
import CBHotRecommend from './c-cpns/hot-recommend'
import CBNewAlbum from './c-cpns/new-album'
import CBRecommendRanking  from './c-cpns/recommend-ranking'
import CBTopBanner from './c-cpns/top-banner'
import {CBRecommendWrapper, CBContent ,CBRecommendLeft,CBRecommendRight} from './style'
import CBUserLogin from './c-cpns/user-login/index'
import CBSettledSinger from './c-cpns/settled-singer'
import CBHotAnchor from './c-cpns/hot-anchor'


// 使用react-redux的hooks
const CBRecommend = (props) => {
  return (
    <CBRecommendWrapper>
      <CBTopBanner/>
      <CBContent className='wrap-v2'>
          <CBRecommendLeft>
              <CBHotRecommend />
              <CBNewAlbum />
              <CBRecommendRanking/>
          </CBRecommendLeft>
          <CBRecommendRight>
            <CBUserLogin />
            <CBSettledSinger />
            <CBHotAnchor/>
          </CBRecommendRight>
      </CBContent>
      
    </CBRecommendWrapper>
  )
}

export default memo(CBRecommend)


// const CBRecommend = (props) => { 
//   const {topBanners,changeBanners} = props
//   useEffect(()=>{
//     changeBanners()

//   },[])
//   return (
//     <div>CBRecommend:{topBanners.length}</div>
//   )
// }

// const mapStateToProps = (state) => ({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch)=>({
//   changeBanners:()=>{
//     dispatch(getTopBannersAction())
//   }
// })
// export default connect(mapStateToProps,mapDispatchToProps)(memo(CBRecommend))
