import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    position:fixed;
    background-color: #fff;
    top: 0;
`
export const MainMenu = styled.div`
    display: flex;
    width: 100%;
    > ul{
        display: flex;
        > li{
            padding: 25px;
            font-size:20px;
            position: relative;
            ul{
                width: 100%;
                position: absolute;
                top: 100%; /* 부모 li 아래에 위치하도록 설정 */
                left: 50%;
                transform: translate(-30%, 0);
                li{
                    padding: 25px 0 25px 0;
                    font-size:16px;
                    text-align:left;
                    cursor: pointer;
                }
            }
        }
        a{
            li{
                padding: 25px;
                font-size:20px;
            }
        }
    }
    
    
`