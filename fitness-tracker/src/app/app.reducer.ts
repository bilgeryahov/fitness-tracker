export interface State {
    isLoading: boolean
}

const initial_state: State = {
    isLoading: false
};

export function appReducer(state = initial_state, action) {
    switch (action.type) {
        case 'START_LOADING': 
            return {
                isLoading: true
            };
        case 'STOP_LOADING':
            return {
                isLoading: false
            };
        default:
            return state;
    }
}
