import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState, api) => ({
    userData: [
        {
            id: 1,
            user_name: "이명관",
            user_id: "user",
            user_password: "1234",
            user_email: "audrhks29@gmail.com",
            user_birthday: "1998년11월29일",
            user_gender: "male",
            user_friend: ""
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
    handleLogout: () => {
        const logoutConfirm = confirm("로그아웃 하시겠습니까?")
        if (logoutConfirm) {
            set({ loginUserData: [], loginState: false })
            localStorage.setItem('loginState', JSON.stringify(false));
            localStorage.setItem('loginUserData', JSON.stringify([]));
            alert("로그아웃에 성공하였습니다.")
        }
    }
});

const useUserStore = create(devtools(useAppState))
export default useUserStore;

