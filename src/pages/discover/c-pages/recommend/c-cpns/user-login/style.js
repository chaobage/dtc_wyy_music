import styled from "styled-components";

export const CBUserLoginWrapper = styled.div`
    width:250px;
    height:126px;
    background:url(${require('@/assets/img/index.png')}) 0 0 no-repeat;
    .login_note{
        width:205px;
        height:76px;
        line-height:22px;
        color: #666;
        margin:0 22.5px;
        padding:16px 0;
    }
    .login_btn{
        display:inline-block;
        width:100px;
        height:31px;
        line-height:31px;
        margin:0 75px;
        text-align:center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background:url(${require('@/assets/img/index.png')}) 0 -195px no-repeat;
    }
`