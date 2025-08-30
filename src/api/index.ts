// define all APIs in the project
import {get, post, put, del} from '../utils/request'
import {ILoginParams} from '../types/api'

const login = (params: ILoginParams) => {
    return get('/login', params);
}


export {login}


