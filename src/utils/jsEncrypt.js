import {JSEncrypt}             from 'jsencrypt';
import {PublicKey, PrivateKey} from './constant';

export function encrypt(data){
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置公钥
    encryptor.setPublicKey(PublicKey);
    // console.log(decrypt(encryptor.encrypt(data)));
    // 加密数据
    return encryptor.encrypt(data);
}

export function decrypt(data){
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置私钥
    encryptor.setPrivateKey(PrivateKey);
    // 解密数据
    return encryptor.decrypt(data);
}
