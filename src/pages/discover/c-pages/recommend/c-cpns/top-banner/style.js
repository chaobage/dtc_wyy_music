import styled from "styled-components";

export const TopBannerWrapper = styled.div`
    background:url(${props =>  props.backgroundImage})  center center/6000px;
    .banner{
        display:flex;
        justify-content: space-between;
        height:285px;
        background-color:red;
        position:relative;
    }

`
export const BannerLeft = styled.div`
    width:730px;
    height:285px;
    .banner_item{
        
        img{
            width:730px;
            height:285px;
        }
    }
    .banner_dot{
        li{
            
            width:24px;
            height:24px;
            button{
              height:100%;
              width:100%;
              background: url(${require("@/assets/img/banner_sprite.png")}) no-repeat;
              background-position:3px -343px;
              opacity:1;
              transition: all 0s;
            } 

            &.slick-active button{
                width:100%;
                height:100%;
                background: url(${require("@/assets/img/banner_sprite.png")}) no-repeat;
                background-position:-16px -343px;
                

            }
        }
        
        

    }

`

export const BannerRight = styled.div`
    position:relative;
    width:250px;
    height:285px;
    background: url(${require("@/assets/img/download.png")}) no-repeat;
    .download{
        display: block;
        width: 250px;
        height: 56px;
        margin: 186px 0 0 0;   
    }
    p{
        margin-top:10px;
        text-align: center;
        color: #8d8d8d;
    }
    ::before{
        position:absolute;
        lef:0;
        top:0;
        content:'';
        display:inline-block;
        height:285px;
        width:100%;
        box-shadow: -10px 0 6px black;
        opacity:0.1;

    }
    ::after{
        position:absolute;
        right:0;
        top:0;
        content:'';
        display:inline-block;
        height:285px;
        width:100%;
        box-shadow: 10px 0 6px black;
        opacity:0.1;

    }

`
export const BannerControl = styled.div`
    .left,.right{
        position:absolute;
        width: 37px;
        height: 63px;
        background: url(${require("@/assets/img/banner_sprite.png")}) 0 9999px no-repeat;
        top:50%;
        transform:translateY(-50%);
    }
    .left{
        background-position: 0 -360px;
        left:-68px;
        :hover{
            background-position: 0 -430px;
        }
    }
    .right{
        background-position: 0 -508px;
        right:-68px;
        :hover{
            background-position: 0 -578px;
        }

    }
`