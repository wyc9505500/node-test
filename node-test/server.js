var connect = require('connect');
var bodyParser = require('body-parser');
var cors = require('cors'); 

var list = [
    {id:1,name:"张三",age:20,emil:"9505500QQ.com"},
    {id:2,name:"李四",age:22,emil:"9505500QQ.com"},
]

var app = connect()
    .use(bodyParser.json()) 
	.use(bodyParser.urlencoded({extended: true}))
	.use(cors())
	.use('/getdata',function(req,res,next){  //查
        var data = {
			"code":200,
			"result":list,
		};
        res.end(JSON.stringify(data));
		next();
	})

	.use('/add',function(req,res,next){  //增
		var data = {"code":200};
		if(req.method=='POST'){
			var obj = {};
			obj = req.body;
			list.unshift(obj)
		}
        res.end(JSON.stringify(data));
		next();
	})

	.use('/del',function(req,res,next){  //删
		var data = {"code":200};
		if(req.method=='DELETE'){
			var index = req.body
			list.splice(index,1);
		}
        res.end(JSON.stringify(data));
		next();
	})

	.use('/allDelete',function(req,res,next){  //删
		var data = {"code":200};
		if(req.method=='DELETE'){
			var obj = req.body
		    list = obj;
		}
        res.end(JSON.stringify(data));
		next();
	})

	.use('/modify',function(req,res,next){  //改
		var data = {"code":200};
		if(req.method=='POST'){
			 list = req.body;
		}
        res.end(JSON.stringify(data));
		next();
	})
	
	
    .listen(3000);//设置请求node端口地址
console.log('Server started on port 3000.');//启动自己打上node服务显示