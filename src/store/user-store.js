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
    handleLogin: (inputUsername, inputPassword, navigate) => {
        const state = getState();
        const foundUser = state.userData.find((user) =>
            user.user_id === inputUsername && user.user_password === inputPassword
        );
        if (foundUser) {
            navigate('/'); // navigate 함수를 사용합니다.
            set({ loginUserData: foundUser });
            set({ loginState: true });
        } else {
            alert('아이디와 패스워드를 다시 확인해주세요');
        }
    },
    handleLogout: () => {
        set({ loginUserData: [] })
        set({ loginState: false })
    }
});

const useUserStore = create(devtools(useAppState))
export default useUserStore;

