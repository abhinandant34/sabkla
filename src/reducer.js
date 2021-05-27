export const initialState={
    cart:[],
};

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type)
    {
        case 'ADD_To_CART':
            return {
                ...state,
                cart: [...state.basket, action.item],
            };

            default:
                return state;       
    }
};

export default reducer;