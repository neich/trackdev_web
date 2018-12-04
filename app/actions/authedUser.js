import {SET_AUTHED_USER, LOGOUT_AUTHED_USER} from '../constants/Constants'
import {loginRequestAPI, logoutRequestAPI} from '../utils/api'
import {setError} from './error'
import { push } from 'react-router-redux'


export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        user:{
            id:user.id,
            type:user.user_type,
            name:user.name
        }
    }
}

export function performLogout(){
    return {
        type: LOGOUT_AUTHED_USER
    }
}

export function handleLogoutAction(){
    return (dispatch) =>{
        return logoutRequestAPI().then((response)=>{
            dispatch(performLogout())
            dispatch(push('/'))
        }).catch((error)=> dispatch(setError(error.message)))
    }
}

export function handleLoginAction(userEmails,type){
    return async (dispatch) =>{
        try {
            const response = await loginRequestAPI(userEmails, type);
            if (response.message) {
                console.log('user no exist!!!!!!!');
                dispatch(setError(response.message));
            }
            else if (response.error && response.error.message) {
                console.log('password invalid!!!!!!');
                dispatch(setError(response.error.message));
            }
            else {
                console.log('ha anat be!!!!!!!');
                dispatch(setAuthedUser(response));
                dispatch(push('/'));
            }
            return response
        }
        catch (error) {
            return dispatch(setError(error.message));
        }
    }
}