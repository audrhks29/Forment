import styled, { keyframes } from 'styled-components'

const skeletonGradient = keyframes`
  0% {background-color: rgba(165, 165, 165, 0.1);}
  50% {background-color: rgba(165, 165, 165, 0.3);}
  100% {background-color: rgba(165, 165, 165, 0.1);}
`

export const ProductSkeletonContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  .itemBox{
    margin:0 20px 20px 0;
    div:nth-child(1){
      width: 335px;
      height: 400px;
      animation: ${skeletonGradient} 1.8s infinite ease-in-out;
    }
    ul{
      border-bottom:1px solid #cdcdcd;
      margin: 5px 0;
      li { 
        height: 25px;
        margin-bottom:5px;
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
      }
      li:nth-child(1){width: 70%;}
      li:nth-child(2){width: 40%;}
      li:nth-child(3){width: 80%;}
    }
    .reviewContainer{
      animation: ${skeletonGradient} 1.8s infinite ease-in-out;
      height :33px;
    }
  }
  .itemBox:nth-child(4n){ margin-right:0; }
`

export const BrandSkeletonContainer = styled.div`   
  display:flex;
  flex-wrap:wrap;
  li{
    margin-right:70px;
    margin-bottom:40px;
    display:block;
      .imgBox,h4,span{
        animation: ${skeletonGradient} 1.8s infinite ease-in-out;
      }
      .imgBox{
        width:420px;
        height:500px;  
      }
      h4{
        display:block;
        width:60%;
        height:24px;
        margin:5px auto;
      }
      span{
        margin:auto;
        display:block;
        width:40%;
        height:21px;
      }
    }
  li:nth-child(3n){ margin-right:0; }
`

export const CampaignSkeletonContainer = styled.div`
      width: 940px;
      height: 346px;
      display: flex;
      .imgBox {
        width: 500px;
        height:344px;
        margin-right: 60px;
      }
      .txtWrap{
        width: 440px;
        top:50%;
        left: 520px;
        transform: translateY(-50%);
        .t1{
          width: 80%;
          margin-bottom:30px;
          height:36px;
        }
        .t2{
          width: 70%;
          height: 22px;
          margin-bottom:4px;
        }
        .t3{
          width:40%;
          height: 22px;
        }
        
      }
  .t1,.t2,.t3,.imgBox {
    animation: ${skeletonGradient} 1.8s infinite ease-in-out;
  }
`

export const NoticeTableSkeletonContainer = styled.table`
  width:1400px;
  border:1px solid #ccc;
    tr{     
      th{
        border-right: 1px solid #ccc;
        padding:10px 7px;
        height:42px;
        div{
          animation: ${skeletonGradient} 1.8s infinite ease-in-out;
          height:100%;
        }
        .t2{
          width:10%;
          margin:auto;
        }
      }
      td{
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding:7px;
        height:36px; 
        div{
          animation: ${skeletonGradient} 1.8s infinite ease-in-out;
          height:100%;
        }
      }
      .t1, .t3, .t4{
        margin: auto;
      }
      .t1{width:50%}
      .t2{width:45%}
      .t3{width:60%}
      .t4{width:50%}
      th:last-child, td:last-child{
        border-right:none;
      }
    }

`