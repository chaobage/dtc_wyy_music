import styled from "styled-components";
export const CBAlbumCoverWrapper = styled.div`
    position:relative;
    width:${props => props.width}px;
    .cover{
        width:100%;
        .mask{
            position:absolute;
            width:100%;
            height:${props => props.size}px;
            display:inline-block;
            top:0;
            right:0;
            background:url(${require('@/assets/img/coverall.png')}) 0 ${props => props.bgp};
        }
        .play_icon{
            position:absolute;
            display:none;
            width:${props => props.size/4}px;
            height:${props => props.size/4}px;
            right: ${props => props.size*0.2}px;
            top: ${props => props.size*0.73}px;
            background-position:0 -85px;
            :hover{
                 background-position:0 -110px;
            }
        }
        :hover{
            .play_icon{
                display:inline-block;
            }
        }
        

    }
    .title{
        padding-top:7px;
        a{
            display:block;
            width:${props => props.width}px;
            cursor: pointer;
            line-height: 18px;
        }
        .text_nowrap{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }
        .song_name{
            color: #000; 
            font-size:12px;
            line-height:18px;
        }
        .song_author{
            color: #666;
            font-size:12px;
            line-height:18px;
        }
    }
`