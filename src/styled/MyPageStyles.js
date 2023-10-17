import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const MyPageContainer = styled.div`
    background: #f6f5f7;
    position: relative;
    .inner{
        ${settingInner} 
        flex-wrap:wrap;
        
    }
`

export const MyPageTopContainer = styled.div`
    .user_info{
        background-color:#fff;
        width: 100%;
        /* border: 1px solid #dfdfdf; */
        display:flex;
        align-items:center;
        padding:30px 50px;
        .userInfo_left{
            width:45%;
            font-size:26px;
            strong{
                font-weight:600;
            }
            span{
                font-size:15px;
            }
        }
        .userInfo_right{
            width:55%;
            ul{
                display:flex;
                justify-content:space-between;
                li{
                    width:120px;
                    text-align:center;
                }
            }
        }
    }
        
`

export const MyPageBottomContainer = styled.div`
    margin-top:30px;
    background-color:#fff;
    padding:30px 50px;
    display:flex;
    justify-content:space-between;
    .menu_bar{
        .menu_title{
            color:#9c9c9c;
            font-weight:bold;
        }
        .menu{
            width:250px;
            border-bottom:1px solid #ccc;
            padding:20px 0;
            p{
                margin-bottom:20px;
            }
            li{
                padding:10px 0;
                cursor: pointer;
            }
            li.on{
                font-weight:600;
            }
        }
        .menu1{
            padding-top:0px;
        }
        .menu2{
            border:none;
        }
    }
    .history{ 
        width: 1000px;
        .title{
            padding-bottom:10px;
            font-weight:600;
            border-bottom: 1px solid #000;
        } 
        table{
            width: 100%;
            font-size:14px;
            color:#9c9c9c;
            text-align:center;
            thead{
                tr{
                    border-bottom:1px solid #ccc;
                    th{
                        font-weight:600;
                        padding:10px 0;
                    }
                }
            }
            tbody{
                tr{
                    border-bottom:1px solid #ececec;
                    td{
                        padding:5px 0;
                        vertical-align:middle;
                    }
                }
                tr:last-child{
                    border:none;
                }
                button{
                    margin-top:5px;
                    background-color: #ececec;
                    width:100%;
                    height:30px;
                }
            }
        }
    }
`

export const PopupContainer = styled.div`
    background-color: #fff;
    position:fixed;
    top:50%;
    left:50%;
    width:1000px;
    height:750px;
    transform:translate(-50%,-50%);
    z-index:110;
    padding:0 40px;
    h3{
        position:relative;
    }
    i{
        position:absolute;
        top:3%;
        right:3%;

    }
    p{
        margin-top:10px;
        font-size:14px;
        text-indent:5px;
        font-weight:600;
    }
    img{
        width:100px;
        vertical-align:middle;
        margin-right:10px;
    }
    table{
        width: 100%;
        font-size:13px;
        color:#9c9c9c;
        text-align:center;
        border: 1px solid #ededed;
        tr{
            border-bottom:1px solid #ededed;
            th{
                font-weight:600;
                padding:10px 0;
                color:black;
                background-color: #cecece;
            }
            td{
                padding:5px 10px;
                vertical-align:middle;
            }
        }
        tr:last-child{
            border:none;
        }
        .productImage{
            display:flex;
            align-items:center;
            text-align:left;
        }
    }
    .w500{
        width:500px;
        tr{
            td{
                text-align:left;
                padding:5px 10px;
            }
        }
    }
    .w700{
        width:700px;
        tr{
            td{
                text-align:left;
                padding:5px 10px;
            }
        }
    }
    .w100per{
        tr{
            th{
                vertical-align:middle;
            }
            td{
                text-align:left;
                padding:5px 10px;
            }
        }
    }
    .textarea{
        width: 100%;
        height: 80px;
        padding: 10px;
        box-sizing: border-box;
        border: solid 2px #1E90FF;
        border-radius: 5px;
        font-size: 16px;
        overflow: auto; /* 스크롤바가 필요한 경우 자동으로 표시 */
        overflow-wrap: break-word; /* 긴 단어 또는 URL이 textarea 내에서 줄 바꿈 */
        resize: both;
    }
    .btn_wrap{
        width: 120px;
        height:40px;
        line-height: 40px;
        background-color: black;
        text-align:center;
        border:1px solid black;
        margin-top:20px;
        margin-left:auto;
        button{
            cursor: pointer;
            color: white;
            margin-right:auto;
        }
    }
`

export const Background = styled.div`
    background-color: rgba(0,0,0,0.7);
    width:100%;
    position:absolute;
    top: 0; 
    z-index:100;
    height: ${document.documentElement.scrollHeight}px; /* 동적으로 높이 설정 */
`