import styled from "styled-components";
export const DiscoverWrapper = styled.div`
    .top{
        margin:0 auto;
        background-color: #C20C0C;
        border-bottom: 1px solid #a40011;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        .banner{
            display:flex;
            padding-left: 180px;
            .item {
                height:34px;
                a{
                    display:block;
                    width:100%;
                    height:100%;
                    color:#fff;
                    em{
                        display:inline-block;
                        height:20px;
                        line-height:21px;
                        padding: 0 13px;
                        margin: 7px 17px 0;
                    }
                    &.active em , em:hover{
                        border-radius: 20px;
                        background: #9B0909;
                    }
                }
            }
        }
    }
`