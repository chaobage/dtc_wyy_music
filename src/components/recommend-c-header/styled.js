import styled from "styled-components";
export const RecommendWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    height:33px;
    padding:0 10px 2px 34px;
    border-bottom: 2px solid #C10D0C;
    background:url(${require('@/assets/img/sprite_02.png')}) -225px -156px no-repeat;
    .left{
        display:flex;
        .keywords{
            display:flex;
            margin:7px 0 0 20px;
            span{
                margin:0 10px;
            }
        }
        .title{
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            color: #333;
        }
    }
    .right{
        width:40px;
        height:15px;
        margin-top:9px;
        display:flex;
        i{
            margin:2px 0 0 2px;
            display:inline-block;
            width:12px;
            height:12px;
            background:url(${require('@/assets/img/sprite_02.png')}) 0 -240px no-repeat;
        }

    }
`
