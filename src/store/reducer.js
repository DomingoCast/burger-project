const initialState = {
    burgerState:{
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
        },
        totalCost: 0,
        checkout: true,
        buttonEnabler:{
            salad: false,
            cheese: false,
            meat: false,
        }
    },
    orderState: {
        totalPrice: null,
        quantity: null,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT':
            return{
                ...state,
                burgerState: {
                    ...state.burgerState,
                    ingredients: action.data.ingredients,
                    totalCost: action.data.totalCost,
                    checkout: false,
                    buttonEnabler:{
                        salad: true,
                        cheese: true,
                        meat: true,
                    },
                }
            }
        case 'SET_CLEAN':
            return{
                ...state,
                initialState,
            }
        case 'ADD_ORDER':
            return{
                ...state,
                orderState: action.orderState,

            }

    }
    return state
}

export default reducer
