import styled from 'styled-components'

export const JoinContainer = styled.div`
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:148px 0 74px 0;
    .container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 580px;
        max-width: 100%;
        min-height: 1200px;
        .sign-up-container {
            h3{
                font-size: 18px;
                display:block;
                font-weight:600;
                text-align:center;
            }
            position: absolute;
            top: 0;
            height: 100%;
            left: 0;
            width: 100%;
            z-index: 2;
            .social-container {
                margin: 20px 0;
                display: flex;
                flex-wrap:wrap;
                justify-content:space-between;
                width:400px;
                a{
                    display: block;
                    position: relative;
                    margin: 5px 0;
                    img{
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%,-50%); 
                        width: 20px;
                        height: 20px;
                        vertical-align:middle;
                    }
                    span {
                        font-size: 14px;
                        font-weight:600;
                        margin-left: 20px;
                    }
                }
                .kakao {
                    background:#fae101;
                    width: 400px;
                    height: 50px;
                    line-height:50px;
                }
                .naver, .google {
                    width: 190px;
                    height: 50px;
                    line-height:50px;
                    border:1px solid #ccc;
                }
            }
        }
        h4{
            font-size:18px;
            padding:10px 0;
            font-weight:600;
            display: block;
            width: 400px;
            border-bottom:1px solid #000;
            text-align:left;
        }
        .join-info{
            text-align:left;
            width: 400px;
            display: flex;
            flex-wrap:wrap;
            justify-content:space-bet   ween; 
            align-items:center;
            border-bottom:1px solid #ccc;
            padding:20px 0;
            margin-bottom: 20px;
            input {
                padding: 12px 15px;
                margin: 5px 0;
                width: 300px;
                border:1px solid #ccc;
            }
            label {
                font-size: 14px;
                font-weight:600;
                width: 100px;
            }
            .gender_label{
                width: 400px;
                /* display:block; */
            }
            .w100 {
                width:100px;
            }
        }
    }
    
    a {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    button {
        border-radius: 20px;
        background-color: #030303;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease -in;
    }
    button:active {
        transform: scale(0.95);
        background-color:rgba(0, 0, 0, 0.22)
    }
    form {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }
`