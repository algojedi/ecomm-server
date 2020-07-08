import {
    UPDATE_COLLECTIONS,
    UPDATE_COLLECTIONS_FAIL,
    UPDATE_COLLECTIONS_SUCCESS,
} from '../../actions/actions'

const INITIAL_STATE = {
    collections: null,
    isLoading: false,
    errorMsg: undefined,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return { ...state, isLoading: true }
        case UPDATE_COLLECTIONS_FAIL:
            return { ...state, isLoading: false, errorMsg: action.payload }
        case UPDATE_COLLECTIONS_SUCCESS:
            return { ...state, errorMsg: undefined, isLoading: false, collections: action.payload }
        default:
            return state
    }
}

export default shopReducer
