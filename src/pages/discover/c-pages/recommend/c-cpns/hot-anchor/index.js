import React, { memo } from 'react'

import {hotRadios} from '@/common/local-data.js'
import {getSizeImage} from '@/utils/format-utils.js'


import {CBHotAnchorWrapper} from './style'
import CBThemeHeaderSmall from '@/components/theme-header-small'


const CBHotAnchor = memo(() => {
  return (
    <CBHotAnchorWrapper>
       <CBThemeHeaderSmall title='热门主播'/>
       <ul className='list'>
          {
            hotRadios.map((item,index,arr)=>{
              return <li className='item' key={item.name}>
                <a href=' '><img src={getSizeImage(item.picUrl,40)} alt={item.name} /></a>
                
                <div className='info'>
                  <a href=' ' className='name text-nowrap'>{item.name}</a>
                  <p className='position text-nowrap'>{item.position}</p>
                </div>
              </li>
            })
          }
       </ul>
    </CBHotAnchorWrapper>
  )
})

export default CBHotAnchor