import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    height:75px;
    color:#fff;
    background-color: #242424;
    font-size:14px;

    .content{
        display:flex;
        justify-content:space-between;
        height:70px;
    }


    .divider{
        height:5px;
        background-color:#c20c0c;

    }
`

export const HeaderLeft = styled.div`
    display:flex;
    .logo{
        display: block;
        width: 176px;
        height:69px;
        background-position:0 0;
        text-indent:-9999px;
        padding-right:20px;
    }
    .select_list{
        display:flex;
        line-height:70px;

        .select_item {
            a{
                display:block;
                position:relative;
                padding:0 20px;
                color:#ccc;
            }
            :last-of-type a{
                position:relative;
                ::after{
                    position:absolute;
                    content:'';
                    width:28px;
                    height:19px;
                    background-image: url(${require("@/assets/img/sprite_01.png")});
                    background-position: -190px 0;
                    top:21px;
                    left:100px;
                }

            }
            &:hover a,.active {
                text-decoration:none;
                color:#fff;
                background-color:#000;
            }
            .active .icon{
                display:block;
                position:absolute;
                width:12px;
                height:7px;
                top: 64px;
                left:50%;
                transform:translateX(-50%);
                background-position: -105px -70px;
                background-size: 120px auto;
            }

        }
    }
`
export const HeaderRight = styled.div`
    display:flex;
    align-items:center;
    .search{
        width:158px;
        height:32px;
        border-radius: 32px;
        input{
        &::placeholder{
            font-size:12px;
        }
        }
    }
    .author_center {
        width:90px;
        height:32px;
        line-height:32px;
        padding-left:16px;
        border: 1px solid #4F4F4F;
        border-radius:20px;
        font-size:12px;
        color:#ccc;
        margin:0 16px 0 16px;
    }
    .login{
        color:#ccc;
        font-size:12px;
    }
`