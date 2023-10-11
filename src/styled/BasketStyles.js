import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const BasketContainer = styled.div`
    background: #f6f5f7;
    .inner{
        ${settingInner} 
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        h3{
            display:block;
            width:100%;
        }
    }
    .checkBox_container{
        border-bottom: 1px solid #000;
        padding-bottom:10px;
        display: flex;
        align-items:center;
        justify-content:space-between;
        .selectAll_checkBox{
            label{
                font-size:14px;
                margin-left:5px;
            }
        }
        button{
            width:100px;
            height:30px;
            background-color: #000;
            color: #fff;
        }
    }
`

export const BasketLeftContainer = styled.div`
    background-color:white;
    width:70%;
    padding:20px;
    .item_box_none{
        width:100%;
        height:200px;
        text-align:center;
        line-height:200px;
    }
    .item_box{
        width: 100%;
        display: flex;
        justify-content:space-between;
        border-bottom: 1px solid #ccc;
        .product_info{
            width:65%;
            padding:20px 0;
            display: flex;
            align-items:center;
            img{
                margin-left:20px;
                height:120px;
            }
            .product_info_content{

                margin-left:20px;
                :nth-child(2){
                    color:#9c9c9c;
                    font-size:13px;
                }
            }
        }
        .product_info_amount{
            display:flex;
            align-items:center;
            button{
                width:25px;
                height:25px;
                border:1px solid #000;
            }
            input{
                width:60px;
                height:25px;
                color:#000;
                border:1px solid #000;
            }
        }
        .product_info_price{
            align-self: center;
            font-weight:600;
        }
        .closeBox{
            padding-top:20px;
            cursor: pointer;
        }
        
    }
    .item_box:last-child{
        margin:0;
        border:none;
    }
    
`
export const BasketRightContainer = styled.div`
    background-color:white;
    width:27%;
    height:200px;
    h4{
        font-weight:700;
        padding:20px 20px;
        font-size:18px;
    }
    .orderBox{
        
        padding:0 20px;
    }
    table{
        width:100%;
        font-weight:600;
        tr{
            height:40px;
            th{
                width:200px;
                text-align:left;
                vertical-align: middle;
                color:#9c9c9c;
            }
            td{
                text-align:right;
                vertical-align: middle;
            }
        }
        tr:last-child{
            border-top:1px solid #000;
            font-size:18px;
            th{
                color:black;
            }
        }
    }
    button{
        margin-top:30px;
        width:100%;
        background-color: #000;
        color:white;
        height:60px;
        font-weight:600;
    }
`

