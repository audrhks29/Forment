import React, { memo } from 'react';
import useMyPageStore from '../../store/myPage-store';

const Menu = memo(() => {
  const { onList } = useMyPageStore(state => state);
  const { handleChangeList } = useMyPageStore(state => state);
  const menus = [
    {
      title: '나의 쇼핑 정보',
      items: [
        { text: '주문내역', id: 1 },
        { text: '취소/교환/반품 내역', id: 2 },
      ],
    },
    {
      title: '나의 쇼핑 활동',
      items: [
        { text: '회원정보 수정', id: 3 },
        { text: '리뷰관리', id: 4 },
      ],
    },
  ];
  return (
    <div className='menu_bar'>
      {
        menus.map((menu, index) => (
          <div className='menu' key={index}>
            <p className='menu_title'>{menu.title}</p>
            <ul>
              {
                menu.items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleChangeList(item.id)}
                    className={item.id == onList ? "on" : ""}
                  >
                    {item.text}
                  </li>
                ))
              }
            </ul>
          </div>
        ))}
    </div>
  );
});

export default Menu;