import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const ProductContainer = styled.div`
    .inner{
        ${settingInner}
    }
    .productLength{
        padding:10px;
        font-size:14px;
    }
`
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
export const ProductItemContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    .itemBox{
        margin:0 20px 20px 0;
        div:nth-child(1){
            margin:0;
            display:block;
            position:relative;
            overflow: hidden;
            width:335px;
            height: 400px;
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
            padding: 5px 0;
            li { 
                padding:3px 0;
                overflow: hidden;
            }
            li:nth-child(2){ font-weight:bold; }
            li:nth-child(3){
                font-size:13px;
                color:#9c9c9c;
            }
            .color_red{
                text-decoration: line-through;
                color:red;
                font-size:13px;
                margin-left:10px;
            }
        }
    }
    .itemBox:nth-child(4n){ margin-right:0; }
`
export const ReviewContainer = styled.div`
    margin :0;
    display :flex;
    justify-content:space-between;
    height :33px;
    padding: 2px 5px;
    span {
        font-size:13px;
        color:#9c9c9c;
        margin-top:auto;
    }
    div{ 
        margin:0;
        i{ 
            font-size:25px; 
            margin:auto 0 0 10px;
            color:#9c9c9c;
            cursor: pointer;
        }
    }
`

export const ProductDetailContainer = styled.div`
    .inner{
        ${settingInner}
    }
    .product_itemBox{
        padding:74px 0 0 0;
        width:100%;
        display: flex;
        justify-content:space-between;
        .product_imgBox{
            img{
                width: 550px;
            }
        }
        .product_descBox{
            width:780px;
            .product_price, .benefits_info, .fragranceNote, .fragranceInfo, .desc{
                padding:10px 0;
            }
            .benefits_info, .fragranceNote{
                width:100%;
                border-bottom:1px solid #ccc;
                font-size:14px;
                td{
                    height:25px;
                }
                th{
                    width:100px;
                    color:#9c9c9c;
                    text-align:left;
                }
            }
            .desc{
                dd{
                    margin-bottom:1.5rem;
                }
            }
        }
    }
    strong{
        font-size:18px;
        font-weight:700;
    }
    .style-line-through{
        text-decoration: line-through;
        font-size:14px;
        color:#9c9c9c;
    }
    .fragranceInfo{
        font-size:13px;
    }
    .desc{
        font-size:14px;
        color:#9c9c9c;
    }
`