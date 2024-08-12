export const createAuthSlice = (set) => ({
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        profileSetup: false,
        image: null,
        color: 0,
    },
    setUserInfo: (userInfo) => set((state) => ({
        userInfo: {
            ...state.userInfo,
            ...userInfo,
        },
    })),
});
