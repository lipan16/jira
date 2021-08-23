import axios     from './axiosRequest';
import {encrypt} from '../utils/jsEncrypt';

function login(){
    // axios({url: '/api/login', method: 'post', data: {username: 'lipan', password: 'lipan'}});
    return axios.post('/api/login', encrypt({username: 'lipan', password: 'lipan'}));
}

function async(){
    return axios.get('/api/lipan/async');
}

export default {login, async};
