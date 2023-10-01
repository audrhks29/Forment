import create from 'zustand';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
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
    loginUser: [],
    loginState: false
});

const useUserStore = create(devtools(useAppState))
export default useUserStore;

