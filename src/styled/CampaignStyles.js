import styled from 'styled-components'
import { settingInner } from './CommonStyles'
export const CampaignItemContainer = styled.div`
    .inner{
        ${settingInner} 
    }
    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        .swiper-slide {
            position: relative;
            margin:0 20px;
            width: 940px;
            display: flex;
            .imgBox {
                width: 500px;
                margin-right: 60px;
                img{
                    display: block;
                    width: 500px;
                }
            }
            .txtWrap{
                width: 440px;
                position: absolute;
                top:50%;
                left: 520px;
                transform: translateY(-50%);
                .t1{
                    font-size:24px;
                    font-weight:bold;
                    margin-bottom:30px;
                }
                .t3{
                    font-style:italic;
                }
            }
        }
    }
`