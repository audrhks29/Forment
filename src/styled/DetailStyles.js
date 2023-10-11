import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const DetailContainer = styled.div`
    .inner{
        ${settingInner} 
    }
    .detail_table{
        border: 1px solid #dfdfdf;
        width:100%;
        font-size:14px;
        tr{
            border-bottom:1px solid #dfdfdf;
            th{
                border-right: 1px solid #dfdfdf;
                padding:10px 0 10px 18px;
                text-align:left;
                background-color: #fbfafa;
                font-weight:600;
                width:130px;
            }
            td{
                padding:8px 10px;
            }
        }
        .viewsBox{
            td{
                padding:10px 30px;
                strong{
                    font-weight:600;
                }
            }
        }
        .contentBox{ 
            td{
                div{
                    padding:0 20px;
                    table{ 
                        text-align:center;
                        border:1px solid #ccc;
                        tr{
                            th{
                                font-weight:bold;
                                border-right: 1px solid #ccc;
                                padding:10px;
                                vertical-align:middle;
                                width:600px;
                            }
                            td{
                                border-top: 1px solid #ccc;
                                border-right: 1px solid #ccc;
                                padding:10px;
                                vertical-align:middle;
                            }
                            th:last-child, td:last-child{
                                border-right:none;
                            }
                        }
                    }
                    .color_red{
                        color:red;
                    }
                    h4{
                        font-size:18px;
                        font-weight:bold;
                    }
                    ol {
                        list-style: decimal; 
                        margin-left: 1.5em; 
                        padding: 0; 
                    }
                    ul {
                        list-style-type: disc; /* 기본 마커 스타일 (bullets) */
                        margin-left: 1.5em; /* 왼쪽 여백 초기화 */
                        padding-left: 0; /* 내부 여백 초기화 */
                    }
                    span{
                        font-size:12px;
                    }
                }
            }
            
        }
    }
    .moveNotice{
        width: 100%;
        margin-top:40px;
        border: 1px solid #dfdfdf;
        font-size:12px;
        tr{
            border-bottom: 1px solid #dfdfdf;
            th{
                padding:10px 0 10px 18px;
                text-align:left;
                background-color: #fbfafa;
                font-weight:600;
                width:130px;
                border-right: 1px solid #dfdfdf;
            }
            td{
                padding:8px 10px;
            }
        }
    }
    
`