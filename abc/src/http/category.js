import instance from "./http";
import {SUCCESS} from "../lib/base";

function categoryIndex() {
    return new Promise((resolve, reject) => {
        instance.delete('/admin/category/index').then(res => {
            if (res.code === SUCCESS) {
                resolve(res);
            }
        }).catch(error=>{
            reject(error);
        })
    })

}
export {categoryIndex};