import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';


const CBDiscover = lazy(()=> import('@/pages/discover'))
const CBFriends = lazy(()=> import('@/pages/friends'))
const CBMine = lazy(()=> import('@/pages/mine'))
const CBDownload = lazy(()=> import('@/pages/download'))
const CBRecommend = lazy(()=> import('../pages/discover/c-pages/recommend'))
const CBRanking = lazy(()=> import('../pages/discover/c-pages/ranking'))
const CBDjRadio = lazy(()=> import('../pages/discover/c-pages/djradio'))
const CBArtist = lazy(()=> import('../pages/discover/c-pages/artist'))
const  CBAlbum = lazy(()=> import('../pages/discover/c-pages/album'))
const  CBSongs= lazy(()=> import('../pages/discover/c-pages/songs'))
const CBPlayer = lazy(()=> import('../pages/player'))


export const CBRouter =() => {
    return useRoutes(
        [
            {
                path:'/',
                element:<Navigate to = '/discover'/>
            },
            {
                path:'/discover',
                element:<CBDiscover/>,
                children:[
                    {path:'/discover/',
                    element:<Navigate to ='/discover/recommend'/>,},
                    {
                        path:'/discover/recommend',
                        element:<CBRecommend/>
                    },
                    {
                        path:'/discover/ranking',
                        element:<CBRanking/>
                    },
                    {
                        path:'/discover/songs',
                        element:<CBSongs/>
                    },
                    {
                        path:'/discover/djradio',
                        element:<CBDjRadio/>
                    },
                    {
                        path:'/discover/artist',
                        element:<CBArtist/>
                    },
                    {
                        path:'/discover/album',
                        element:<CBAlbum/>
                    },
                    {
                        path:'/discover/player',
                        element:<CBPlayer/>
                    },
    
                ],
            },
            {
                path:'/mine',
                element:<CBMine/>
            },
            {
                path:'/friend',
                element:<CBFriends/>
            },    
            {
                path:'/download',
                element:<CBDownload/>
            },    
                             
        ]
    )
}