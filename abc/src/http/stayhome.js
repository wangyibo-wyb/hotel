import instance from "./http";
import {SUCCESS} from "../lib/base";

function stayhomeRead(sid) {
    return new Promise((resolve, reject) => {
        instance.get('/api/stayhome/' + sid).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

function stayhomeUpdate(sid,data) {
    return new Promise((resolve, reject) => {
        instance.put('/api/stayhome/' + sid,data).then(res=>{
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })
}

export {stayhomeRead,stayhomeUpdate};