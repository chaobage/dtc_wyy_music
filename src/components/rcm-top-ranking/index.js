import React, { memo } from 'react'
import { useDispatch } from 'react-redux'


import { getSizeImage } from '@/utils/format-utils'
import {getSongDetailAction} from '@/pages/player/store'


import {CBRcmTopRankingWrapper} from './style'

const CBRcmTopRanking = memo((props) => {
    const {info} = props
    const {tracks = []} = info

    //redux
    const dispatch = useDispatch()
  return (
    <CBRcmTopRankingWrapper>
        <div className='header'>
            <div className='img'>
                <img src = {getSizeImage(info.coverImgUrl,80)} alt=''/>
                <a href=' ' className='img_cover'> </a>
            </div>
            <div className='info'>
                <a className='title' href=' '>{info.name} </a>
                <div className='btn'>
                    <a  className='icon_play' href=' ' title='播放'> </a>
                    <a className='icon_collect' href=' ' title='收藏'> </a>
                </div>
                
            </div>
        </div>
        <ul className='ranking_list'>
            {tracks.slice(0,10).map((item,index)=>{
                return <li key={item.id}>
                    <h3 className='rank'>{index+1}</h3>
                    <div className='info'>
                        <a className='title text-nowrap' href=' '>{item.name}</a>
                        <div className='operate'>
                            <button onClick={e => dispatch(getSongDetailAction(item.id)) } className='icon_play' ></button>
                            <button className='icon_add_to' href=' '> </button>
                            <button className='collect' href=' '> </button>
                            <></>
                        </div>
                    </div>
                </li>
            })}
        </ul>
        <div className='view_all'>
            <a href=' ' >查看全部{'>'}</a>
        </div>
    </CBRcmTopRankingWrapper>
  )
})

export default CBRcmTopRanking
