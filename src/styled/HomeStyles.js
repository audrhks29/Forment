import styled from 'styled-components'

export const HomeContainer = styled.div`
margin-top: 74px;
display: flex;
  .img_box{
    width: 65%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text_box{
    width: 35%;
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align:center;
    h3{
      font-size:32px;
      font-style:italic;
      padding-bottom:20px;
    }
    p{
      font-size:18px;
    }
    a{
      display: flex;  
      padding:50px 0 0 180px;
      i{
        width: 20px;
        height: 20px;
        font-size:20px;
        margin-right:20px;
      }
    }
  }
`