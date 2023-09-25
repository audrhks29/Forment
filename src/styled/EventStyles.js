import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const EventItemContainer = styled.div`
    .inner{
        ${settingInner} 
        ul{
            display: flex;
            flex-wrap:wrap;
            li{
                margin:0 20px 20px 0;
                img{
                    width: 690px;
                }
            }
            li:nth-child(2n){
                margin:0
            }
        }
    }
`