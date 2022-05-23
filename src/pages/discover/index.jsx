//第三方库 
import React, {  memo } from 'react';

// 工具等
import {discoverMenu} from '@/common/local-data.js'


// 组件
import { DiscoverWrapper } from './styled';
import { NavLink ,Outlet} from 'react-router-dom';

export default memo(function CBDiscover(props) {

  return <DiscoverWrapper >
    <div className="top">  
    <div className='wrap-v1 banner'>
      {
        discoverMenu.map((item,index,arr) => {
          return <div key={item.title} className = 'item'>
            <NavLink to = {item.link}>
              <em>{item.title}</em>
            </NavLink>
          </div>
        })
      }
    </div>
    </div>
    <Outlet/>
  </DiscoverWrapper>;
});
