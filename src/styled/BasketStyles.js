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
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in; 
        margin:auto;
    }
    button:active {
        transform: scale(0.95);
        background-color:rgba(0, 0, 0, 0.22)
    }
`
export const BasketTopContainer = styled.div`
    width:100%;
`

export const BasketMiddleContainer = styled.div`
    width:100%;
    min-height:400px;
    border-top:2px solid #000;
`
export const BasketBottomContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`

