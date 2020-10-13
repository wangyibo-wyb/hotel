import instance from "./http";
import {SUCCESS} from "../lib/base";

function index() {
    return new Promise((resolve, reject) => {
        instance.get('/api/index').then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function detail(sid) {
    return new Promise ((resolve, reject) => {
        instance.get('/api/detail/' + sid).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function lists(params) {
    return new Promise ((resolve, reject) => {
        instance.get('/api/lists/',{params}).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function register(data) {
    return new Promise ((resolve, reject) => {
        instance.post('/api/user',data).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function login(data) {
    return new Promise ((resolve, reject) => {
        instance.post('/api/login',data).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function collection(collection) {
    return new Promise ((resolve, reject) => {
        instance.post('/api/collection',{collection}).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function userinfo() {
    return new Promise ((resolve, reject) => {
        instance.get('/api/user/1').then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function getCollection() {
    return new Promise ((resolve, reject) => {
        instance.get('/api/collection/1').then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}


export {index,detail,lists,register,login,collection,userinfo,getCollection}