import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const ProductContainer = styled.div`
    margin-top:74px;
    .inner{
        ${settingInner}
        box-sizing: border-box;
    }
`

export const ProductItemContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    div{
        margin:0 10px 20px 0;
        div:nth-child(1){
            margin:0;
            display:block;
            position:relative;
            overflow: hidden;
            width:272px;
            height: 320px;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 130%; /* 이미지의 최대 너비 설정 */
                max-height: auto; /* 이미지의 최대 높이 설정 */
            }
        }
        ul{
            border-bottom:1px solid #cdcdcd;
            li{
                padding: 2px 5px;
            }
            li:nth-child(1){
                font-size:13px;
                color:#9c9c9c;
            }
            li:nth-child(2){
                font-weight:bold;
            }
            span{
                text-decoration: line-through;
                color:red;
                font-size:13px;
                margin-left:10px;
            }
        }
    }
    div:nth-child(5n){
        margin-right:0;
    }
        
`