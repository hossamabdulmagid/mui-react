import { convertTypeAcquisitionFromJson } from 'typescript'
import { TypeAction } from './user-type'

const initialState = {
    user: {
        displayName: '',
        token: '',
        email: '',
        password: '',

    },
    loading: false,
    error: '',
}

type Action = {
    type: string,
    payload?: object,
}


const userReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
        case TypeAction.USER_START_LOGIN:
            return {
                ...state,
                loading: true,
            }

        case TypeAction.USER_SUCCESS_LOGIN:
            return {
                ...state,
                loading: false,
                user: { ...action.payload },
            }
        case TypeAction.USER_ERROR_LOGIN:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        default: return state;
    }
}


export default userReducer;