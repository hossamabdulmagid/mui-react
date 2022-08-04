import { TypeAction } from './user-type'

interface LoginStart {
    type: TypeAction.USER_START_LOGIN
    payload: string
}



interface LoginSuccess {
    type: TypeAction.USER_SUCCESS_LOGIN
    payload: object
}


interface LoginError {
    type: TypeAction.USER_ERROR_LOGIN
}



export type Action = LoginStart | LoginSuccess | LoginError
