import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const BrandContainer = styled.div`
    .inner{
        ${settingInner} 
    }
`
export const BrandItemContainer = styled.ul`   
    display:flex;
    flex-wrap:wrap;
    li{
        margin-right:70px;
        margin-bottom:40px;
        a{
            display:block;
            .imgBox{
                overflow:hidden;
                width:420px;
                height:500px
                }
                img{
                    width:420px;
                    height:500px;
                    transition: transform 0.5s ease;
                }
            }
            .imgBox:hover{
                img{ transform:scale(1.1); }
            }
            h4{
                font-weight:600;
                text-align:center;
                margin:5px 0;
                text-decoration:underline;
            }
            span{
                display: block;
                text-align:center;
                font-size:14px;
            }
        }  
    li:nth-child(3n){ margin-right:0; }
`
