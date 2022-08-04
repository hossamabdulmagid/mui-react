import { TypeAction } from './user-type';



import { Dispatch } from 'redux';
import { Action } from './user-interfaces';
import axios from 'axios';
import { any } from 'zod';

const UserStartLogin = () => ({
    type: TypeAction.USER_START_LOGIN
})

const UserSuccessLogin = (data: any) => ({
    type: TypeAction.USER_SUCCESS_LOGIN,
    payload: data
})

const UserErrorLogin = (error: any) => ({
    type: TypeAction.USER_ERROR_LOGIN,
    payload: error
})
export const DoLogin = () => {
    return (dispatch: Dispatch<Action>) => {

        try {
            // dispatch(UserStartLogin(): any)



            axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
                .then((res: any) => {
                    if (res.status === 200) {
                        dispatch(UserSuccessLogin(res.data))
                    }
                })
                .catch(error => {
                    dispatch(UserErrorLogin(error))
                })

        } catch (err) {
            console.log(err);
        }
    }
}