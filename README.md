# [React] 20230918 포멘트 쇼핑몰 사이트
**초기 로그인**

**ID : user**

**PW : 1234**
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">   <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">

### v1.0.1
   <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">를 이용한 페이지 배포

### v1.0.0
   <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">   <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/zustand-999999?style=flat-square&logo=react&logoColor=black">

## 2. Version Update
### v1.0.2
   1. CLS 점수 개선
### v1.0.1
   1. <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">를 이용한 페이지 배포
   2. 데이터 수정

### v1.0.0
   1. 포멘트 쇼핑몰 사이트 코딩

## 3. 사용 데이터
   
   | 데이터 구분               | 버전   | 주소                                                                                                                                                           |
   | ------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | 상품 데이터               | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/e0b00ba1865c98b8fde594f9c763cc9742db4446/productData.json)            |
   | 정기배송 데이터           | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/ab74919bb77cf4c6497b593cb46e7cf6/raw/acf48ce5759ee372b46f779e2a7a518d1b7cda02/deliveyData.json)            |
   | 브랜드 데이터             | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/30351509c570ca1b6abd18b39d59bd52/raw/82f4cc520fea1d1a7cacda31ce1f0c3287a8b0a9/brandData.json)              |
   | 이벤트 데이터             | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/573624cbe2a9d995141725530b36980b/raw/a8bf3563ef4c2ab6d183b3c2ee21f32e5183ea10/eventData.json)              |
   | 캠페인 데이터             | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/be58bc1e4bf7c162ac113de06391d4be/raw/3135ea4ee356a939ed1143c80d8e4d349fd50b68/campaginData.json)           |
   | 공지사항 데이터           | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/1be23a49866f8d85b9d57c519256dec4/raw/a83180f474d2d0c80fdbfb251d9575b24c554b47/noticeData.json)             |
   | FAQ 데이터                | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/161cb16bd1759a0609ae0d5fe4cd8d6d/raw/4b68d44e401ebcdc5b8f346f6411057e5abfe685/faqData.json)                |
   | 상품 옵션 데이터          | v1.0.0 | [링크](https://gist.githubusercontent.com/audrhks29/be6ae36bcb49942a0480aecf238cdb73/raw/919061d2b0accf458c9f62803b8016a30fa8f338/productOptionData.json)      |
   | 상품 세트 데이터          | v1.0.0 | [링크](https://gist.githubusercontent.com/audrhks29/c5cc0a999cdc547ff64acb0ae1c9c905/raw/c99fcd6340d47fca7fd1025a2ebc395a22d6c134/productSetData.json)         |
   | 상품 디테일 이미지 데이터 | v1.0.1 | [링크](https://gist.githubusercontent.com/audrhks29/caa13ccf491746f824fe181d779aed55/raw/b98fe8341e2793656bb27734a27631092a06823d/productDetailImageData.json) |

   ## 4. 문제해결
   1. <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black">를 이용한 페이지 배포 시에 페이지에서 이미지가 불러와 지지 않는 문제 
  - 원인 : 배포 시에는 상대경로를 읽지 못하는 경우가 발생
  - 해결방법 : 절대경로로 수정
   ## 5. 개선
   ### 1. CLS(누적레이아웃) 개선
   1. 정의 : 웹사이트에서 로딩이 끝난 줄 알고 무언가를 클릭하려고 했는데, 다른 요소가 로딩되어서 원래 클릭하려돈 요소를 클릭하지 못하게 되었거나, 예기치 못한 작동을 하게 하는 것, 생명주기 동안 발생하는 모든 예기치 않은 이동에 대한 지표를 계산하는 것
   2. CLS점수 
   
      0.1 이하인 경우 좋음, 0.25 이하인 경우 보통이며 그 외에는 개선이 필요한 나쁜 점수로 보고된다.
      ![image](https://github.com/audrhks29/Forment/assets/130128690/a994c509-357c-4c61-8960-5b448456f52f)
      ### 1. 문제
      ![2023-11-22 22 19 15](https://github.com/audrhks29/Forment/assets/130128690/91f1ebb9-bc7c-4522-89b7-636acfda760d)

      ![2023-11-22 22 19 52](https://github.com/audrhks29/Forment/assets/130128690/3944a43f-4e0a-4c89-8095-3fb4aee0aa84)
      UseEffect의 API 호출 결과로 인하여 Footer가 하단으로 내려가며 사용자경험을 방해하게된다.

      ![개선전_전제품및프래그런스](https://github.com/audrhks29/Forment/assets/130128690/18551937-e026-4e91-878a-72b8ac56d7d3)

      0.834의 CLS점수로 개선이 필요하다.
      ### 2. 해결방법
         스켈레톤 UI의 사례처럼 동적으로 뜰 것으로 예상되는 공간을 미리 확보하였다.
         ```js
         {
            !isLoading
            ? <ProductItems />
            : <ProductSkeleton />
         }
         ```
         로딩중이지 않을 때는 원래 랜더링 되어야할 <ProductItems/> 컴포넌트를 랜더링 하며, 로딩중일 때는 만들어 둔 <ProductSkeleton/> 컴포넌트를 랜더링 하였다.
         ```js
         // ProductSkeleton.js

         const ProductSkeleton = memo(() => {
         const previewArr = Array.from(Array(20), (_, index) => ({ id: index + 1 }));
         return (
            <ProductSkeletonContainer>
               {
                  previewArr.map((item) => {
                     return (
                        <div className='itemBox' key={item.id}>
                        <div></div>
                        <ul>
                           <li></li>
                           <li></li>
                           <li></li>
                        </ul>
                        <div className='reviewContainer'></div>
                        </div>
                     )
                  })
               }
            </ProductSkeletonContainer>
            );
         });
         export default ProductSkeleton;
         ```
         <ProductItems/> 컴포넌트에 텍스트를 삭제하여 빈 공간을 만든 후, style에 각각의 너비와 높이, 애니메이션을 지정하였다.
         ```js
         // skeletonStyles.js
         
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
         ```
         ### 3. 해결
         ![skeleton](https://github.com/audrhks29/Forment/assets/130128690/7b8713d7-06be-4ec5-8c5d-59139d54a9c5)
         로딩중에 skeleton 적용으로 레이아웃이 밀리지 않는 모습

         ![개선후_전제품및프래그런스](https://github.com/audrhks29/Forment/assets/130128690/95149a95-dc54-4912-9440-bce2e7f5afd3)
         CLS점수또한 0.1점 미만으로 개선하였다.

         ### 4. 기타
         위와 같은 방법으로 CLS점수가 매우 나쁘게 나온 Fragrance, Brand, Campaign, Notice, Faq 페이지의 CLS를 개선하였다.
      


      
