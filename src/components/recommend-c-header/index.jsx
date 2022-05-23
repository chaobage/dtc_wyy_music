import React, { memo } from 'react'


import {RecommendWrapper} from './styled'

const CBRecommendHeader = memo((props) => {
    const {title,keywords = []} = props
  
  return (
    <RecommendWrapper >
        <div className="left">
          <a className='title' href=" ">{title}</a>
          <ul className='keywords'>
            {keywords.map((item,index,arr) => {
              return <li key={item} >
                <a href=" ">{item}</a>
                <span>|</span>
                </li>
            })}
          </ul>
        </div>
        <div className="right">
            <a href=" ">更多</a>
            <i> </i>
        </div>
    </RecommendWrapper>
  )
})

export default CBRecommendHeader