import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const NoticeItemContainer = styled.div`
    .inner{
        ${settingInner} 
    }
`
export const NoticeTable = styled.table`
    width:1400;
    border:1px solid #ccc;
    font-size:14px;
    color:#555;
        tr{       
            th{
                font-weight:bold;
                text-align:center;
                border-right: 1px solid #ccc;
                vertical-align:middle;
                padding:10px;
            }
           
            td{
                text-align:center;
                border-top: 1px solid #ccc;
                border-right: 1px solid #ccc;
                padding:7px;
                vertical-align:middle;
            }
            td:nth-child(2){
                text-align:left;
                text-indent:10px;
            }
            th:last-child, td:last-child{
                border-right:none;
            }
        }

`