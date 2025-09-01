// define all APIs in the project
import {get, post, put, del} from '../utils/request'
import {ILoginParams} from '../types/api'

const login = (params: ILoginParams) => {
    return post('/api/users/login', params);
}


export {login}


