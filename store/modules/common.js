const common = {
    namespaced: true,
    state: () => ({
        windowDimens: {
            width: 500,
            height: 500,
        },
        scrollTop: 0,
        isMobile: false,
        isTablet:false,
    }),
    getters: {
        getWindowDimens: (state) => state.windowDimens,
        getScrollTop: (state) => state.scrollTop,
        getIsMobile: (state) => state.isMobile,
        getIsTablet: (state) => state.isTablet,
    },
    mutations: {
        setWindowDimens: (state, { innerWidth, innerHeight }) => {
            state.windowDimens = {
                width: innerWidth,
                height: innerHeight,
            }

            state.isMobile = state.windowDimens.width <= 768;
            state.isTablet = state.windowDimens.width <= 800;
        },
        setScrollTop: (state, scrollTop) => {
            state.scrollTop = scrollTop;
        },
    },
};

export default common;