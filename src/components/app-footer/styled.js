import styled from "styled-components";
export const  FooterWrapper = styled.div`
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    color: #666;
    height: 172px;
    .content{
        display:flex;
        justify-content:between;
        align-items:center;
    }

`
export const FootLeft = styled.div`
    width:520px;
    padding-top:15px;
    font-size: 12px;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    .link{
        font-size:12px;
        height:24px;
        line-height:24px;
        a{
            color: #999;
        }
        span{
            margin:0 8px 0 10px;
            color: #999;
        }
        span:last-of-type {
            display:none;
        }
    }
    .copyright{
        height:24px;
        line-height:24px;
        span{
            margin-right:14px;
           
            color:#666;

        }
    }
    .report{
        height:24px;
        line-height:24px;
        span{
            color:#666;
            margin-right:14px;
        }
    }
    .info{
        height:24px;
        line-height:24px;
        .police_logo{
            display:inline-block;
            width:14px;
            height:14px;
            padding:0 2px;
            background-image:url(${require("@/assets/img/police.png")});
            background-size:cover;
        }
    }
`

export const FootRight = styled.ul`
    display:flex;
    .item{
        display:flex;
        flex-direction:column;
        justify-content:center;

        &:nth-child(n+2){
            margin-left:30px;
        }
        .link{
            display:block;
            width:50px;
            height:45px;
            text-indent:-9999px;
            background:url(${require('@/assets/img/foot_enter_new.png')}) no-repeat;   
            background-size: 110px 552px;
        }
        :nth-child(1) .link{
            background-position: -63px -456.5px;
        }
        :nth-child(2) .link{
            background-position: -63px -101px;
        }
        :nth-child(3) .link{
            background-position: 0 0;
        }
        :nth-child(4) .link{
            background-position: -60px -50px
        }
        :nth-child(5) .link{
            background-position: 0 -101px;
        }
        
        .title{
            height:14px;
            line-height:14px;
        }
    }
`