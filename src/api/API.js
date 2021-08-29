import axios                                        from './axiosRequest';
import {jsdecrypt, jsdecryptLong, jsencrypt, jsencryptLong} from '../utils/jsEncrypt';

function login(){
    let data = jsencryptLong({
        username: 'lipan',
        password: 'lipan',
    });
    console.log(data);
    console.log(jsdecryptLong(data));
    // axios({url: '/api/login', method: 'post', data: {username: 'lipan', password: 'lipan'}});
    return axios.post('/api/login', data);
}

function async(){
    return axios.get('/api/lipan/async');
}

export default {login, async};
