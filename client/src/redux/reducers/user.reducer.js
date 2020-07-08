import {
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    REGISTER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    SIGNOUT,
} from '../actions/actions'

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    errorMsg: '',
    registerErrorMsg: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNOUT:
            return INITIAL_STATE

        case SIGNIN:
            return {
                ...state,
                isLoading: true,
                errorMsg: '',
                registerErrorMsg: '',
            }

        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                errorMsg: '',
                registerErrorMsg: '',
            }

        case SIGNIN_FAIL:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMsg: action.payload,
            }

        case REGISTER:
            return {
                ...state,
                isLoading: true,
                errorMsg: '',
                registerErrorMsg: '',
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                errorMsg: '',
                registerErrorMsg: '',
            }

        case REGISTER_FAIL:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMsg: '',
                registerErrorMsg: action.payload,
            }

        default:
            return state
    }
}

export default userReducer
