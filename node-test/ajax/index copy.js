document.write("<script language=javascript src='js/axios.min.js'></script>");
document.write("<script language=javascript src='public/api.js'></script>");

class Axios {
    
 static get(options){
    return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:"get",
                baseURL:baseApi,
            }).then(res=>{
                if(res.data.code==200){
                    resolve(res.data);
                    console.log("成功渲染数据")
                }else{
                    reject(res.data)
                }
            }).catch((res)=>{
                alert("错误"+res)
            })
    })
 }

 static post(options){
    return new Promise((resolve,reject)=>{
        axios({
            url:options.url,
            method:"post",
            baseURL:baseApi,
            data:options.params,
        }).then(res=>{
            if(res.data.code==200){
                resolve(res.data);
                console.log(res)
            }else{
                reject(res.data)
            }
        }).catch((res)=>{
            alert("错误"+res)
        })
    })
 }

static delete(options){
    return new Promise((resolve,reject)=>{
        axios({
            url:options.url,
            method:"delete",
            baseURL:baseApi,
            data:options.params,
        }).then(res=>{
            if(res.data.code==200){
                resolve(res.data);
            }else{
                reject(res.data)
            }
        }).catch((res)=>{
            alert("错误"+res)
        })
    })
}
}