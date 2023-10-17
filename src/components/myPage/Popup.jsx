import React, { memo, useState } from 'react';
import { PopupContainer } from '../../styled/MyPageStyles';
import { AiOutlineClose } from 'react-icons/ai';
import useMyPageStore from '../../store/myPage-store';
import useOrderStore from '../../store/order_store';
const Popup = memo(() => {
  const { popupState, selectedData } = useMyPageStore(state => state);
  const { handlePopupState } = useMyPageStore(state => state);
  const { handleExchange } = useMyPageStore(state => state);
  const [productStateValue, setProductStateValue] = useState(selectedData.state)
  const formatOrderTime = (orderTime) => {
    const date = new Date(orderTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}.${month}.${day}. ${hours}:${minutes}`;
  }
  const handleSelectChange = (e) => {
    setProductStateValue(e.target.value);
  };
  const handleExchangeClick = () => {
    if (productStateValue === "--선택--") {
      setProductStateValue(selectedData.state);
      alert("상태를 선택하지않았습니다.")
    } else {
      handleExchange(selectedData, productStateValue);
      handlePopupState();
    }

  };
  console.log(productStateValue);
  return (
    <PopupContainer>
      <h3>취소/교환/반품 신청</h3>
      <div
        onClick={handlePopupState}>
        <i><AiOutlineClose /></i>
      </div>
      <div>
        <table>
          <colgroup>
            <col width={135} />
            <col width={560} />
            <col width={60} />
            <col width={135} />
            <col width={110} />
          </colgroup>
          <thead>
            <tr>
              <th>주문일자</th>
              <th>상품정보</th>
              <th>수량</th>
              <th>주문번호</th>
              <th>주문금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatOrderTime(selectedData.orderTime)}</td>
              <td className='productImage'>
                <img src={selectedData.titleImage} alt="" />
                {selectedData.productName}/{selectedData.productOption}
              </td>
              <td>{selectedData.amount}</td>
              <td>{selectedData.orderNumber}</td>
              <td>{selectedData.price.toLocaleString()}원</td>
            </tr>
          </tbody>
        </table>
        <p>상품상태 변경</p>
        <table className='w500'>
          <colgroup>
            <col width={150} />
            <col width={350} />
          </colgroup>
          <tbody>
            <tr>
              <th>상태</th>
              <td>
                <select
                  name=""
                  id=""
                  value={productStateValue}
                  onChange={handleSelectChange}
                >
                  <option value="--선택--">--선택--</option>
                  <option value="취소">취소</option>
                  <option value="교환">교환</option>
                  <option value="반품">반품</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p>사유</p>
        <table className='w700'>
          <colgroup>
            <col width={150} />
            <col width={550} />
          </colgroup>
          <tbody>
            <tr>
              <th>사유</th>
              <td>
                <select name="" id="">
                  <option value="">--선택하세요--</option>
                  <option value="">고객변심</option>
                  <option value="">상품 불만족</option>
                  <option value="">상품 불량</option>
                  <option value="">배송오류</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>상세사유</th>
              <td><textarea className='textarea'></textarea></td>
            </tr>
          </tbody>
        </table>
        <p>추가정보</p>
        <table className='w100per'>
          <colgroup>
            <col width={200} />
          </colgroup>
          <tbody>
            <tr>
              <th>취소/교환/반품 확인사항</th>
              <td>
                - 수령하신 주소로 롯데택배 회수 접수됩니다. 최초 수령하신 주소지로 1~2일내로 택배기사 방문하시면 보내주시면 됩니다.<br />
                - 취소/교환/반품 사유를 상세히 기재하여 주시면 감사하겠습니다.<br />
                - 교환배송비는 신용카드결제 또는 무통장 입금해주셔야 하며, 반품배송비는 결제가 되지 않은 경우 주문금액에서 차감 후 환불처리 됩니다.<br />
                - 신청 후 게시판 또는 전화로 이중요청하지 않으셔도 됩니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='btn_wrap'>
        <button onClick={handleExchangeClick}>확인</button>
      </div>
    </PopupContainer >

  );
});

export default Popup;