import styled from 'styled-components'
import { settingInner } from './CommonStyles';

export const DeliveryContainer = styled.div`
    .inner{
        ${settingInner}
        display: flex;
        justify-content:space-between;
    }
`
export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    img{ width: 500px; }
    position: relative;
`
export const TxtWrap = styled.div`
    position: absolute;
    padding: 60px;
    .e1{
        font-size:30px;
        font-weight:700;
        margin-bottom:20px;
    }
    .e2{
        font-size:18px;
        margin-bottom:40px;
    }
    .e3{
        font-size:18px;
        font-style:italic;
        font-weight:600;
    }
`
export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    img{ width: 500px; }
`

export const DeliveryItemContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 850px;
    .itemBox{
        margin:0 30px 30px 0;
        div:nth-child(1){
            margin:0;
            display:block;
            position:relative;
            overflow: hidden;
            width:410px;
            height: 500px;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 130%; 
                max-height: auto; 
            }
        }
        ul{
            border-bottom:1px solid #cdcdcd;
            li { padding: 2px 5px; }
            li:nth-child(2){ font-weight:bold; }
            li:nth-child(3){
                font-size:13px;
                color:#9c9c9c;
            }
            span{
                text-decoration: line-through;
                color:red;
                font-size:13px;
                margin-left:10px;
            }
        }
    }
    .itemBox:nth-child(2n){ margin-right:0; }
`