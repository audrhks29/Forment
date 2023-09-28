import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const TestItemContainer = styled.div`
    .inner{
        ${settingInner} 
    }
    strong{
        font-weight:bold;
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
    table{ 
        text-align:center;
        border:1px solid #ccc;
        tr{
            th{
                font-weight:bold;
                border-right: 1px solid #ccc;
                padding:10px;
                vertical-align:middle;
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
`
