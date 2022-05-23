// 第三方库的引用
import React, { memo, Suspense } from 'react';


//工具的引用
import {CBRouter} from '@/route'
import store from './store'
// 组件的引用
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CBAppHeader from '@/components/app-header';
import CBAppFooter from '@/components/app-footer';
import CBPlayerBar from './pages/player/app-play-bar';

export default memo(function App() {
  return (<HashRouter>
      <Provider store= {store}>
        <CBAppHeader/>
        <Suspense fallback = {<div>Loading</div>}>
           <CBRouter/> 
        </Suspense>
        <CBAppFooter/>
        <CBPlayerBar/>
      </Provider>
    </HashRouter>
    )
});
