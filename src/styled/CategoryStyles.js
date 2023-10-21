import styled from 'styled-components'
export const CategoryContainer = styled.div`
    ul{
        padding:50px 0;
        display: flex;
        li{
            margin:0 15px;
            font-size:14px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            .img_box{
                width:90px;
                height:90px;
                margin-bottom:10px;
                img{
                    width:100%;
                }
            }
            span{
                text-align:center;
                font-size:14px;
                color:#9c9c9c;
            }
        }
        .on {
            .img_box{
                border:1px solid black;
                border-radius:50%;
            }
        }   
    }
`