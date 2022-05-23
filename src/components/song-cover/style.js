import styled from "styled-components";

export const CBSongCoverWrapper = styled.div`
    width:140px;
    margin-bottom:30px;

    .container{ 
        position:relative;
        .img_cover{
            position:absolute;
            display:block;
            top:0;
            left:0;
            width:140px;
            height:140px;
            cursor:pointer;
        }
        .bottom{
            position:absolute;
            top:113px;
            width:140px;
            height:27px;
            display:flex;
            background: url(${require('@/assets/img/coverall.png')}) no-repeat 0 -537px;
            background-position: 0 -537px;
            .icon_headset{
                display:inline-block;
                width:14px;
                height:11px;
                background-position: 0 -24px;
                margin: 9px 5px 9px 10px;
            }
            .play_count{
                display:inline-block;
                line-height: 2.5;
                color: #ccc;
                font-size: 12px;
                cursor:default;
            }
            .icon_play{
                position:absolute;
                right:8px;
                top:5px;
                display:inline-block;
                width:16px;
                height:17px;
                background-position: 0 0;
                cursor:pointer;
            }
        }
        .cover{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
            z-index:-999;
        }
        
    }
    .intro{
        a{
            display:inline-block;
            width:140px;
            vertical-align:middle;
            color: #000;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            font-size:14px;
            line-height: 1.4;

        }
    }
`