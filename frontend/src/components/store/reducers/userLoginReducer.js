import {USER_LOGIN, USER_TOKEN} from "../../../constants";


export const initialState = {
    user: null,
    token: null,
    authenticated:false
}

export const userLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN: {
            return {
                user: action.payload.user.user,
                token: action.payload.user.access,
                authenticated: action.payload.authenticated
            }
        }
        case USER_TOKEN: {
            return {
                token: action.payload,
                authenticated: true
            }
        }
        default:
            return state
    }
}
