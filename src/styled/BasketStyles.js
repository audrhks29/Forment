import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const BasketContainer = styled.div`
    .inner{
        ${settingInner} 
    }
    button {
        display: block;
        border-radius: 20px;
        background-color: #030303;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        width: 300px;
        height: 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in; 
        margin:auto;
    }
    button:active {
        transform: scale(0.95);
        background-color:rgba(0, 0, 0, 0.22)
    }
    .color_red{
        color:red;
        font-size:14px;
        margin-left:10px;
    }
    .deco_line-through{
        text-decoration: line-through;
    }
`
export const BasketTopContainer = styled.div`
    width:100%;
`

export const BasketMiddleContainer = styled.div`
    width:100%;
    min-height:189px;
    border-top:2px solid #000;
    border-bottom:2px solid #000;
    padding:40px 0;
    .item_box{
        display: flex;
        margin-bottom:40px;
        img{
            margin-left:20px;
            width:150px;
        }
        .product_info{
            width:100%;
            padding:20px;
            align-self: center;
            :nth-child(3){
                color:#9c9c9c;
            }
        }
        .btn_wrap{
            align-self: center;
            button{
                width:200px;  
            }
        }
    }
    .item_box:last-child{
        margin:0;
    }
    
`
export const BasketBottomContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    padding:40px 200px ;
    justify-content:space-around;
    text-align:center;
    p{
        align-self:center;
    }
`

