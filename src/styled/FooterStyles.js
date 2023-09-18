import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    padding: 60px 70px;
    margin: 0 auto;
    justify-content:space-around;
    line-height:1.8;
    border-top:1px solid #ccc;
    img{
        margin-bottom:30px;
    }
    div:nth-child(1){
        p:nth-child(2){
            color:black;
            font-weight:bold;
        }
    }
    div{
        p{
            color: #9c9c9c;
            font-size:14px;
        }
        strong{
            font-size:24px;
            margin-bottom:5px;
            color:black;
        }
    }
    
    
`