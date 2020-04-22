document.write("<script language=javascript src='js/axios.min.js'></script>");
document.write("<script language=javascript src='public/api.js'></script>");
class Axios {

    static async get(options){
        var res = await axios({
            url:options.url,
            method: 'get',
            baseURL:baseApi,
        });
        return res.data;
    }

    static async post(options){
        var res = await axios({
            url:options.url,
            method: 'post',
            baseURL:baseApi,
            data:options.params,
        });
        return res.data;
    }

    static async delete(options){
        var res = await axios({
            url:options.url,
            method: 'delete',
            baseURL:baseApi,
            data:options.params,
        });
        return res.data;
    }
}