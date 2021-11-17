import * as type from "../types";

const DefaultState = {
    isLoading: false,
    data: [],
    error: null,
}

const RegisterReducer = (state,action) => {

    switch(action.type) {
        case type.ADD_USER :
            return {
                isLoading: false,
                data: [...state.data,action.payload],
                error: null,
            }

        
        default: 
            return DefaultState;
    }

}

export default RegisterReducer;