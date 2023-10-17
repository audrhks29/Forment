import React, { memo } from 'react';
import useOrderStore from '../../store/order_store';

const ExchangeHistory = memo(() => {
  const { orderData } = useOrderStore(state => state);
  const formatOrderTime = (orderTime) => {
    const date = new Date(orderTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${year}.${month}.${day}. ${hours}:${minutes}`;
  }
  const exchangeData = orderData.filter(item => (item.state === "취소" || item.state === "교환" || item.state === "반품"))
  return (
    <div className='history'>
      <p className='title'>취소/교환/반품내역</p>
      <table>
        <colgroup>
          <col width={135} />
          <col width={360} />
          <col width={60} />
          <col width={135} />
          <col width={110} />
          <col width={100} />
        </colgroup>
        <thead>
          <tr>
            <th>주문일자</th>
            <th>상품정보</th>
            <th>수량</th>
            <th>주문번호</th>
            <th>주문금액</th>
            <th>취소/교환/반품</th>
          </tr>
        </thead>
        <tbody>
          {
            exchangeData &&
            exchangeData.map((item, index) => {
              const { amount, productName, productOption, orderTime, orderNumber, price, state } = item;
              return (
                <tr key={index}>
                  <td>{formatOrderTime(orderTime)}</td>
                  <td>{productName}/{productOption}</td>
                  <td>{amount}</td>
                  <td>{orderNumber}</td>
                  <td>{price.toLocaleString()}원</td>
                  <td>{state}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
});

export default ExchangeHistory;