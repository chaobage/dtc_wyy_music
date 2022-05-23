import styled from "styled-components";

export const CBRcmTopRankingWrapper = styled.div`
    width:230px;
    padding:20px 0 0 19px;
    .header{
        display:flex;   
        height:100px;
        .img{
            position:relative;
            .img_cover{
                position:absolute;
                width:80px;
                height:80px;
                top:0;
                right:0;
                background:url(${require('@/assets/img/sprite_cover.png')}) -145px -57px no-repeat;

            }
        }
        .info{
            margin:6px 0 0 10px;
            .title{
                font-size:14px;
                font-weight:700;
                width:170px;
               
            }
            .btn {
                a{
                    display:inline-block;
                    width:22px;
                    height:22px;
                    margin-right:10px;
                    background:url(${require('@/assets/img/index.png')})
                }
                .icon_play{
                    margin-right:6px;
                    background-position:-267px -205px;
                    :hover{
                        background-position:-267px -235px;
                    }
                }
                .icon_collect{
                    background-position:-300px -205px;
                    :hover{
                        background-position:-300px -235px ;
                    }
                }
            }
            
            
        }     
    }
    .ranking_list{
        li{
            display:flex;
            width:225px;
            height:32px;
            :hover{
                .operate{
                    display:block;
                }
            }
        }
        li:nth-child(-n+3) .rank{
            color: #c10d0c;
        }
        .info{
            display:flex;
            position:relative;
            width:180px;
            height:32px;
        }
        .title{
            height:32px;
            width:180px;
            font-size:12px;
            line-height:32px;
            color:#000;
            flex:1;
        }
        .rank{
            width:35px;
            height:32px;
            margin-left:-5px;
            line-height:32px;
            font-size: 16px;
            color:#666;
            text-align:center;
        }
        
        
        .operate{
            display:none;
            width:77px;
            margin-top:7px;
            right:0;
            button{
                width:17px;
                height:17px;
                margin-right:10px;
            }
        }
        .icon_play{
            background:url(${require('@/assets/img/index.png')}) -267px -268px no-repeat;
            :hover{
                background-position:-267px -288px;
            }
        }
        .icon_add_to{
            background:url(${require('@/assets/img/sprite_icon2.png')}) 0 -698px no-repeat;
            margin-right:6px !important;
            :hover{
                background-position:-22px -698px;
            }
        }
        .collect{
            background:url(${require('@/assets/img/index.png')}) -297px -268px no-repeat;
            :hover{
                background-position:-297px -288px;
            }
        }
        }
        

    }
    .view_all{
        height:32px; 
        padding-right:32px;    
        text-align: right; 
        a{
            color: #000;
            text-align: right;
            line-height: 32px;
        }
    }
`