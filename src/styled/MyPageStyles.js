import styled from 'styled-components'
import { settingInner } from './CommonStyles'

export const MyPageContainer = styled.div`
    background: #f6f5f7;
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

    }
`