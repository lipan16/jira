import {JSEncrypt}             from 'encryptlong';
import {PublicKey, PrivateKey} from './constant';

export function jsencrypt(data){
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置公钥
    encryptor.setPublicKey(PublicKey);
    // 加密数据
    return encryptor.encrypt(JSON.stringify(data));
}

export function jsdecrypt(data){
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置私钥
    encryptor.setPrivateKey(PrivateKey);
    // 解密数据
    return encryptor.decrypt(data);
}

export const jsencryptLong = data => { // 长文本加密
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置公钥
    encryptor.setPublicKey(PublicKey);
    // 加密数据
    return encryptor.encryptLong(JSON.stringify(data));
};

export const jsdecryptLong = data => { // 长文本解密
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置私钥
    encryptor.setPrivateKey(PrivateKey);
    // 解密数据
    return encryptor.decryptLong(data);
};
