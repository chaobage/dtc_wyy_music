import styled from "styled-components";

export const PlayPanelWrapper = styled.div`
    position:absolute;
    bottom:47px;
    left:50%;
    transform:translateX(-50%);
    background-color:red;
    width:986px;
    height:301px;
   
`

export const CBHead = styled.div`
    display:flex;
    height:41px;
    padding:0 5px;
    background:url(${require('@/assets/img/playlist_bg.png')}) 0 0 no-repeat;
    button{
        background-color:transparent;
        height:41px;
        color: #ccc;
        cursor: pointer;
    }
    .page_title{
        height: 39px;
        width:81px;
        margin-left:20px;
        line-height: 39px;
        font-size: 14px;
        color: #e2e2e2;
    }
    .like_all{
        display:flex;
        align-items:center;
        width:70px;
        margin-left:305px;
        .add_ico{
            display:inline-block;
            width:16px;
            height:16px;
            margin-right:6px;
            background:url(${require('@/assets/img/playlist.png')}) -24px 0 no-repeat;
        }
        :hover{
            color:#fff
            text-decoration:underline;
            .add_ico{
                background-position:-24px -20px;
            }
        }
    }
    .line{
        margin:13px 9px 0 9px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
    }
    .clear{
        display:flex;
        align-items:center;
        width:43px;
        .clear_ico{
            width:13px;
            height:16px;
            margin:2px 6px 0 0;
            background:url(${require('@/assets/img/playlist.png')}) -51px 0 no-repeat;
        }
        :hover{
            color:#fff
            text-decoration:underline;
            .clear_ico{
                background-position:-51px -20px;
            }
        }
    }
    .song_title{
        width:346px;
        height: 39px;
        margin-left:56px;
        text-align: center;
        line-height: 39px;
        color: #fff;
        font-size: 14px;
    }
    .close{
        width:30px;
        height:30px;
        margin-top:6px;
        background:url(${require('@/assets/img/playlist.png')}) -195px 9px no-repeat;

    }
`
export const CBContainer = styled.div`
    display:flex;
    background:url(${require('@/assets/img/playlist_bg.png')}) -1014px 0 repeat-y;
`
export const SongList = styled.div`
    position:relative;
    overflow-y:scroll;
    overflow-x:hidden;
    width:553px;
    height:260px;
    .item{
    display:flex;
    width:553px;
    height:28px;
    cursor: pointer;
    color:#ccc;
    :hover{
        color:#fff;
        background-color: rgba(0,0,0,0.3);
        .control{
            button{
                display:block;
            }
        }
    }
    &.item_active{
        color:#fff;
        background-color: rgba(0,0,0,0.3);

    }
   
       
    .title{
    width: 246px;
    margin-left:30px;
    height: 28px;
    line-height:28px;
    color: inherit;
    }
    .control{
    display:flex;
    width:100px;
    color: inherit;
    
    button{
        display:none;
        height:16px;
        margin:7px 0 0 10px;
        cursor: pointer;
        background:url(${require('@/assets/img/playlist.png')}) 0 0 no-repeat;
    }
    .delete_ico{
            width:13px;
            background-position: -51px 0;
            :hover{
                background-position: -51px -20px;
            }
    }
    .download_ico{
            width:14px;
            background-position: -57px -50px;
            :hover{
                background-position: -80px -50px;
            }
    }
    .share_ico{
            width:14px;
            background-position: 0 0;
            :hover{
                background-position: 0 -20px;
            }
    }
    .add_ico{
            width:16px;
            background-position: -24px 0;
            :hover{
                background-position: -24px -20px;
            }
    }
    }
    .info{
    color: inherit;
    display:flex;
    .author{
        display:inline-block;
        width:80px;
        height:28px;
        padding-left:10px;
        line-height:28px;
        font-size: 12px;
        color: inherit;
    }
    .duration_time{
        width:35px;
        height:28px;
        line-height:28px;
        padding-left:10px;
    }
    .from_list{
        display:inline-block;
        width:14px;
        height:16px;
        margin:7px 0 0 29px;
        background:url(${require('@/assets/img/playlist.png')}) -80px 0 no-repeat;
    }
    .mask{
        position: absolute;
        width: 558px;
        height: 260px;
        top:0;
        left:0;
        background: #121212;
        opacity: 0.5;
    }
`
export const LyricList = styled.div`
    position:relative;
    overflow-y:scroll;
    overflow-x:hidden;
    width:460px;
    height:260px;
    scroll-behavior: smooth;
    .lyric_line{
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        transition: color 0.7s linear;
        font-size: 12px;
        &.lyric_active{
            color: #fff;
            font-size: 14px;
        }
    }
    .mask{
        position:absolute;
        width:460px;
        height:260px;
        left:0;
        top:0;
        background: #121212;
        opacity: 0.01;
        z-index:3;
        visibility: visible;
    }

`


    

