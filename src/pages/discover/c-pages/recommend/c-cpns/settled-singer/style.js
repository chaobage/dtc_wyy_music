import styled from "styled-components";

export const CBSettledSingerWrapper = styled.div`
    margin-top:15px;
    .list{
        margin:6px 0 14px 20px;
    }
    .item{
        display:flex;
        padding-top:14px;
        text-decoration:none;

    }
    .info{
        width:148px;
        padding-left:14px;
        border:1px solid #e9e9e9;
        border-left:0px;
        background: #f5f5f5;
        .name{
            color: #333;
            font-size: 14px;
            font-weight: bold;
            height:18.5px;
            width:120px;
            margin-top:8px;

        }
        .intro{
            width:120px;
            height:15.5px;
            color: #666;
            margin-top:8px;
            font-size: 12px;
        }
    }
    .recruit{
        display: inline-block;
        width:210px;
        height:31px;
        margin:0 20px;
        line-height: 31px;
        font-weight: bold;
        text-align: center;
        border:1px solid #C4C4C4;
        box-shadow:0 0 1px 0 inset #C4C4C4;
        border-radius:4px;
        background: #f5f5f5;
        
    }
`