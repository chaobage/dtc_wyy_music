import styled from "styled-components";
export const CBHotRecommendList = styled.ul`
    padding-top:20px;
    width:689px;
    display:flex;
    flex-wrap:wrap;
    .recommend_list {
        margin-right:42px;
    }
    .recommend_list:nth-child(4n){
        margin-right:0;

    }
`