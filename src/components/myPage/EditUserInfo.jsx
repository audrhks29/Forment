import React, { memo, useEffect, useState } from 'react';
import { EditUserInfoContainer } from '../../styled/MyPageStyles';
import useUserStore from '../../store/user-store';

const EditUserInfo = memo(() => {
  const { loginUserData } = useUserStore(state => state)
  const { userData } = useUserStore(state => state)
  const { handleEditUserInfo } = useUserStore(state => state)
  const { user_name, user_id, user_password, user_email, user_birthday, user_gender, grade } = loginUserData
  const [userPassword, setUserPassword] = useState(user_password)
  const [userEmail, setUserEmail] = useState(user_email)
  const [userBirthday, setUserBirthday] = useState(user_birthday)
  const [userGenderKorean, setUserGenderKorean] = useState("")
  useEffect(() => {
    if (user_gender == "male") setUserGenderKorean("남성")
    else setUserGenderKorean("여성")
  }, [])
  const handleEditUserInfoClick = () => {
    handleEditUserInfo(userPassword, userEmail, userBirthday)
  }
  console.log(loginUserData);
  console.log(userData);
  return (
    <EditUserInfoContainer>
      <p className="title">회원정보 수정</p>
      <div className="edit">
        <table>
          <colgroup>
            <col width={130} />
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td>{user_name}</td>
            </tr>
            <tr>
              <th>회원등급</th>
              <td>{grade}</td>
            </tr>
            <tr>
              <th>아이디</th>
              <td>{user_id}</td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>
                <input
                  type="date"
                  value={userBirthday}
                  onChange={(e) => setUserBirthday(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td>{userGenderKorean}</td>
            </tr>
          </tbody>
        </table>
        <div className='btn_wrap'>
          <button
            onClick={handleEditUserInfoClick}
          >
            수정
          </button>
        </div>
      </div>
    </EditUserInfoContainer>
  );
});

export default EditUserInfo;