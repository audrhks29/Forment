import React, { memo } from 'react';
import useOrderStore from '../../store/order_store';
import useMyPageStore from '../../store/myPage-store';

const OrderHistory = memo(() => {
  const { orderData } = useOrderStore(state => state);
  const { popupState, handlePopupState } = useMyPageStore(state => state);
  const formatOrderTime = (orderTime) => {
    const date = new Date(orderTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}.${month}.${day}. ${hours}:${minutes}`;
  }
  return (
    <div className='history'>
      <p className='title'>주문내역</p>
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
          {
            orderData &&
            orderData.map((item, index) => {
              const { amount, productName, productOption, orderTime, price, orderNumber } = item;
              return (
                <tr key={index}>
                  <td>
                    {formatOrderTime(orderTime)}
                    <button
                      onClick={() => handlePopupState(item)}
                    >
                      취소/교환/반품 신청
                    </button>
                  </td>
                  <td>{productName}/{productOption}</td>
                  <td>{amount}</td>
                  <td>{orderNumber}</td>
                  <td>{price.toLocaleString()}원</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
});

export default OrderHistory;