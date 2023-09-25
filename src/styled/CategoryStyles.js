import styled from 'styled-components'
export const CategoryContainer = styled.div`
    ul{
        padding:30px 0;
        display: flex;
        li{
            margin-left:20px;
            font-size:14px;
            cursor: pointer;
        }
        .on {border-bottom:1px solid black; }   
    }
`