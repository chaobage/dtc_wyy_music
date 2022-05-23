import React, { Fragment, memo } from 'react';

import { footerLinks ,footerImages} from '../../common/local-data';


import { FooterWrapper, FootLeft ,FootRight} from './styled';

export default memo(function CBAppFooter() {


  return <FooterWrapper>
    <div className="content wrap-v2">
      <FootLeft>
        <div className="link">
           {footerLinks.map((item,index,arr)=>{
             return <Fragment key={item.title}>
              <a href={item.link}>{item.title}</a>
              <span>|</span>
             </Fragment>
           })}
        </div>
        <p className="copyright">
          <span>网易公司版权所有©1997-2022</span>
          <span>杭州乐读科技有限公司运营:
          <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png" rel="noopener noreferrer" target='_blank'>浙网文[2021] 1186-054号</a>
          </span>
        </p>
        <p className="report">
          <span>
          违法和不良信息举报电话：0571-89853516 
          </span>
         <span>举报邮箱：ncm5990@163.com</span>
        </p>
        <p className='info'>
          <span>粤B2-20090191-18</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target='_blank'>  工业和信息化部备案管理系统网站 </a>
          <span className='police_logo'></span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target='_blank'>浙公网安备 33010902002564号</a>
        </p>
      </FootLeft>
      <FootRight>
          {footerImages.map((item,index,arr) => {
            return <li key={item.title} className='item'>
              <a className='link' href={item.link} rel="noopener noreferrer" target='_blank'>aaa</a>
              <span className='title'>{item.title}</span>
            </li>
          })}
      </FootRight>
    </div>
  </FooterWrapper>;
});
