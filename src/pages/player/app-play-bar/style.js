import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
    z-index:+9999;
    position:fixed;
    height:53px;
    right:0; 
    left:0;
    bottom:0;
    background-position:0 0;
    background-repeat:repeat;
    .content{
        display:flex;
        height:47px;
        margin-top:6px;

    }


`
export const CBPlayerControl = styled.div`
    width:137px;
    padding-top:6px;
    display:flex;
    button{
        cursor:pointer;
    }
    .prev,.next{
        width:28px;
        height:28px;
        margin:5px 8px 0 0;
    }
    .prev{
        background-position: 0 -130px;
    }
    .play{
        width:36px;
        height:36px;
        margin-right:8px;
        background-position:0  ${props => props.isPlaying ? '-165px' : '-204px'} ;
    }
    
    .next{
        background-position: -80px -130px;
    }
`

export const CBPlayerInfo = styled.div`
    display:flex;
    .cover_container{
        position:relative;
        width:34px;
        height:34px;
        margin:6px 15px 0 0;
        img:{
            border-radius:5px;  
        }
        .cover{
            position:absolute;
            display:inline-block;
            left:0;
            top:0;
            width:34px;
            height:34px;
            background-position: 0 -80px;
        }
    }
    .sons_info{
        height:28px;
        a{
            display:inline-block;
            height:28px;
            line-height: 28px;
            vertical-align:top;  
            text-shadow: 0 1px 0 #171717; 


        }
        .songName{
            max-width: 300px;
            color: #e8e8e8;
        }
        .mv{
            width:19px;
            height:17px;
            margin:6px 0 0 3px ;
            background-position: 0 -57px;
            :hover{
            background-position: -20px -57px;
            }
        }
        .singer_name{
            margin-left:15px;
            color: #9b9b9b;
            max-width: 220px;
        }
        .from_list{
            width:14px;
            height:15px;
            margin:7px 0 0 13px;
            background-position: -110px -103px;
            :hover{
                background-position: -130px -103px;
            }
        }
    }
    .progress{
        display:flex;
        width:581px;
    }
    .ant-slider{
        position:relative;
        margin:0;
        padding:0;
        width:466px;
    
        .ant-slider-rail{
            height:9px;
            background:url(${require('@/assets/img/progress_bar.png')}) right 0;
        }
        .ant-slider-track{
            height:9px;
            background:url(${require('@/assets/img/progress_bar.png')}) left -66px;
            z-index:+1;
        }
        .ant-slider-step{
            height:9px;
            background:url(${require('@/assets/img/progress_bar.png')}) right -30px;
        }

        .ant-slider-handle{
            position:absolute;
            top:-2px;
            border:0;
            width:22px;
            height:24px;
            background:url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
            z-index:+2;
            :focus{
                box-shadow:none;
            }
            :hover{
                background-position: 0 -280px;
            }
        }

    }
    .time{
        color: #797979;
        height:14px;
        font-size:12px;
        margin-left:10px;
        line-height:8px;
        em{
            color: #a1a1a1;
        }
    }
`

export const CBPlayerOperate = styled.div`
    display:flex;
    .left{
        width:87px;
        button{
            width: 25px;
            height: 25px;
            margin:11px 2px 0 0;
            cursor:pointer;
        }
    }
    .picture_lyrics{
        background:url(${require('@/assets/img/picture_lyrics.png')}) 0 0 no-repeat ; 
        :hover{
            background-position:0 -25px;
        }
    }
    .collect{
        background-position: -88px -163px;
        :hover{
            background-position:-88px -189px;
        }
    }
    .share{
        background-position: -114px -163px;
        :hover{
            background-position:-114px -189px;
        }
    }
    .right{
        width:126px;
        height:36px;
        padding-left:13px;
        background-position:-147px -238px;
        display:flex;
        button{
            cursor:pointer;
        }
        .volume{
            width: 25px;
            height: 25px;
            margin: 11px 2px 0 0;
            background-position: -2px -248px;
        }
        .mode{
            width: 25px;
            height: 25px;
            margin: 11px 2px 0 0;
            background-position:${
                props => {
                    switch (props.playMode) {
                        case 0:
                            return '-4px -344px;'
                        case 1:
                            return '-66px -248px;'
                        default:
                            return '-66px -344px;'
                    }
                }
            }
            :hover{
                background-position:${
                    props => {
                        switch (props.playMode) {
                            case 0:
                                return '-33px -344px;;'
                            case 1:
                                return '-93px -248px;'
                            default:
                                return '-93px -344px;'
                        }
                    }
                }
            }
        }
        .add_to_list{
            height: 25px;
            width:59px;
            margin: 11px 2px 0 0;
            padding-left:21px;
            background-position: -42px -68px;
            line-height: 27px;
            text-align: center;
            color: #666;
            text-shadow: 0 1px 0 #080707;
        }
    }
`