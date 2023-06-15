const initialState = "hello world" as any

const tempSlice = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD':
            return state;
        default:
            return state;
    }
}

export default tempSlice