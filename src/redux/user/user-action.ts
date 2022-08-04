import { TypeAction } from './user-type';



import { Dispatch } from 'redux';
import { Action } from './user-interfaces';
import axios from 'axios';


const UserStartLogin = () => {
    console.log('@Runing@')
    return {
        type: TypeAction.USER_SUCCESS_LOGIN
    }
}


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
        dispatch(UserStartLogin() as any)
        try {
            axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
                .then((res: any) => {
                    if (res.status === 200) {
                        dispatch(UserSuccessLogin(res.data))
                        console.log(res.data,`res.data`)
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