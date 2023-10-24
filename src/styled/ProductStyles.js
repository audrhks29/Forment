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
            .product_price,
            .benefits_info,
            .fragranceNote,
            .fragranceInfo,
            .desc,
            .selected_itemBox{
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
                li{
                    margin-bottom:1.5rem;
                }
            }
            .product_optBox{
                width:100%;
                font-size:14px;
                display:flex;
                flex-wrap:wrap;
                .select_option,.select_set{
                    padding:5px 0;
                    width:100%;
                    color:#9c9c9c;
                }
                .select_set{
                    margin-bottom:30px;
                }
                label{
                    display:inline-block;
                    width:100px;
                    
                    text-align:left;
                    line-height:40px;
                }
                select{
                    width: 450px;
                    align-self: center;
                    align-items: center;
                    height:40px;
                    color:#9c9c9c;
                } 
            }
            .selected_itemBox{
                border-top:1px solid #ccc;
                border-bottom:1px solid #ccc;
                width:100%;
                .selected_item{
                    display:flex;
                    padding:10px 0;
                    width: 100%;
                    border-bottom:1px solid #ccc;
                    position:relative;
                    ul{
                        width:600px;
                    }
                    strong{
                        font-size:16px;
                    }
                    .item_amount_count{
                        display: flex;
                        input[type="text"]{
                            width:40px;
                            height:40px;
                        }
                        .btn_wrap{
                            height:40px;
                            display: flex;
                            flex-direction: column;
                            justify-content:space-between;
                            button{
                                height:45%;
                                img{
                                    width: 100%;
                                    height:100%;
                                }
                            }
                            
                        }
                    }
                    .close_wrap{
                        position:absolute;
                        top:50%;
                        right:0;
                        transform:translateY(-50%);
                        cursor:pointer;
                        i{
                            font-size:20px;
                        }
                    }
                }
                .selected_item:nth-child(1){
                    padding-top:0;
                }
                .selected_item:nth-last-child(1) {
                    padding-bottom: 0;
                    border:none;
                }
            }
            .total_priceBox{
                width: 100%;
                padding:20px 0;
                text-align:right;
                span{
                    font-size:16px;
                }
            }
            .btn_Wrap{
                display:flex;
                justify-content:space-between;
                flex-wrap:wrap;
                width:100%;
                button{
                    height:50px;  
                }
                button:nth-child(1){
                    width: 11%;
                    border:1px solid #9c9c9c;
                    i{
                        font-size:25px;
                        line-height:50px;
                    }
                }
                button:nth-child(2){
                    width:44%;
                    border:1px solid #9c9c9c;
                }
                button:nth-child(3){
                    width:44%;
                    background-color: #000;
                    color:#fff;
                }
            }
        }
    }
    .product_infoBox{
        margin-top:60px;
        width:100%;
        img{
            width: 700px;
            display:block;
            margin: auto;
        }
        .btn_wrap{
            width:100%;
            button{
                font-size:18px;
                width:50%;
                height:70px;
                border:1px solid #000;
            }
            .on{
                background-color: #000;
                color: #fff;
                border:none;
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