import styled from "styled-components";
export const CBNewAlbumWrapper = styled.div`
    margin-top:30px;
    .content{
        position:relative;
        padding:28px 30px 0 30px;
        width: 690px;
        height: 180px;
        border: 1px solid #d3d3d3;
        margin: 20px 0 37px;
        background-color: #f5f5f5;
        .page{
            display:flex !important;
            justify-content:space-between;

        }

        .btn{
            position:absolute;
            width:17px;
            height:17px;
            background:url(${require('@/assets/img/sprite_02.png')});
            top:50%;
            transform:translateY(-120%);
            cursor:pointer;
        }
        .left{
            background-position:-260px -75px;
            left:10px;
        }
        .right{
            background-position:-300px -75px;
            right:10px;
        }
    }
`
