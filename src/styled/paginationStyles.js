import styled from 'styled-components'

export const PaginationContainer = styled.ul`
    display: flex;
    justify-content:center;
    margin-top:20px;
    li{
        text-align:center;
        padding: 10px;
        font-size:14px;
        cursor:pointer;
    }
    .pagingOn{
        font-weight:bold;
    }
`