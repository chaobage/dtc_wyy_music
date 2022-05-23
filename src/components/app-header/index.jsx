// 第三方库的引用
import React, { memo } from 'react';


// 工具的引用
import {headerLinks} from '@/common/local-data.js'




// 组件的引用
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import {SearchOutlined} from "@ant-design/icons"
export default memo(function CBAppHeader(props) {
 
  // 页面代码
  const showSelectItem  = (item,index) =>{
    if (index < 3 || index === 5) {
      return <NavLink to = {item.path}>
        {item.title}
        <i className='sprite_01 icon'></i>
      </NavLink>
    } else {
      return <a href={item.path} rel = 'noreferrer' target = '_blank'>{item.title}</a>
    }
  }


  // 返回的jsx
  return <HeaderWrapper>
    <div className='content wrap-v1'>
    <HeaderLeft>
        <a href="/" className='logo sprite_01'>网易云音乐</a>
        <div className="select_list">
          {headerLinks.map((item,index,arr)=>{
            return <div key={item.title} className = 'select_item'>
            {showSelectItem(item,index)}
            </div>
          })}
        </div>
    </HeaderLeft>
    <HeaderRight>
      <Input className='search'placeholder='音乐/视频/电台/用户' prefix = {<SearchOutlined /> }/>
      <div className="author_center">创作者中心</div>
      <div className="login">登录</div>
    </HeaderRight>
    </div>
    <div className='divider'></div>

  </HeaderWrapper>;
});
