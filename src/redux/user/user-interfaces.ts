import { TypeAction } from './user-type'

interface LoginStart {
    type: TypeAction.USER_START_LOGIN
}



interface LoginSuccess {
    type: TypeAction.USER_SUCCESS_LOGIN
    payload: object
}


interface LoginError {
    type: TypeAction.USER_ERROR_LOGIN
    payload: string
}



export type Action = LoginStart | LoginSuccess | LoginError
