import styled from 'styled-components'

const headerHeight = "74px"; // header 높이

export const HeaderContainer = styled.div`
    width: 100%;
    position:fixed;
    background-color: #fff;
    top: 0;
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid #ccc;
    z-index:100;
`
export const HeaderLogoContainer = styled.div`
    width: 250px;
    height: ${headerHeight};
    position: relative;
    img{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
export const MainMenu = styled.div`
    display: flex;
    width: 100%;
    > ul{
        display: flex;
        li:nth-child(-n+3){
            :hover{ font-weight: bold; }
        }
        > li{
            margin: 25px;
            position: relative;
            ul{
                width: 100%;
                position: absolute;
                top:10%;
                left: 0;
                white-space: nowrap;
                li{
                    margin: 25px 0 25px 0;
                    font-size:14px;
                    text-align:left; 
                    color:#9c9c9c;                               
                }
                li:hover{ 
                    font-weight: bold; 
                    color:black;
                }  
            }
        }
    }
`
export const UserMenu = styled.div`
    white-space: nowrap;
    position: relative;
    height: ${headerHeight};
    ul{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-10%, -50%);
        display: flex;
        li{
            margin:0 10px 0 10px;
            font-size:14px;
        }
    }
`
