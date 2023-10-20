import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
    userData: [
        {
            id: 1,
            user_name: "이명관",
            user_id: "user",
            user_password: "1234",
            user_email: "audrhks29@gmail.com",
            user_birthday: "1998-11-29",
            user_gender: "male",
            user_tel: "01088256093",
            user_friend: "",
            grade: "웰컴"
        }
    ],
    loginUserData: [],
    loginState: false,
    initializeLoginState: () => {
        const storedLoginData = localStorage.getItem('loginUserData');
        const storedLoginState = localStorage.getItem('loginState');
        if (storedLoginData && storedLoginState) {
            set({ loginState: JSON.parse(storedLoginState) });
            set({ loginUserData: JSON.parse(storedLoginData) });
        }
    },
    handleLogin: (inputUsername, inputPassword, navigate) => {
        const state = getState();
        const foundUser = state.userData.find((user) =>
            user.user_id === inputUsername && user.user_password === inputPassword
        );
        if (foundUser) {
            navigate('/');
            set({ loginUserData: foundUser });
            set({ loginState: true });
            localStorage.setItem('loginState', JSON.stringify(true));
            localStorage.setItem('loginUserData', JSON.stringify(foundUser));
            alert("로그인에 성공하였습니다.")
        } else {
            alert('아이디와 패스워드를 다시 확인해주세요');
        }
    },
    handleLogout: (navigate) => {
        const logoutConfirm = confirm("로그아웃 하시겠습니까?")
        if (logoutConfirm) {
            set({ loginUserData: [], loginState: false })
            localStorage.setItem('loginState', JSON.stringify(false));
            localStorage.setItem('loginUserData', JSON.stringify([]));
            alert("로그아웃에 성공하였습니다.")
            navigate('/');
        }
    },
    handleEditUserInfo: (userPassword, userEmail, userBirthday) => {
        const editConfirm = confirm("회원정보를 변경하시겠습니까?")
        if (editConfirm) {
            set((state) => {
                const updateUserData = state.userData.map(item => {
                    if (item.id == state.loginUserData.id) {
                        return {
                            ...item,
                            user_password: userPassword,
                            user_email: userEmail,
                            user_birthday: userBirthday,
                        };
                    }
                    return item;
                })

                return {
                    ...state,
                    loginUserData: {
                        ...state.loginUserData,
                        user_password: userPassword,
                        user_email: userEmail,
                        user_birthday: userBirthday,
                    },
                    userData: updateUserData
                }
            });
        }
    }
});

const useUserStore = create(devtools(useAppState))
export default useUserStore;

