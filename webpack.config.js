const path =require("path");
module.exports = {
	//配置入口文件
	entry:"./src/js/app.js",    //入口文件
	output:{					//出口文件
		path:__dirname+"/dist",
		// path:path.resolve(__dirname),   把文件打包放在bundle.js文件中
		filename:"bundle.js"    
	},
	module:{ //配置模块信息
		loaders:[
			{
				test:/\.css/,
				loader:"style-loader!css-loader"
			},
			{
				test:/\.js/,
				loader:"babel-loader", //把浏览器不能识别的代码转化为能识别的
				exclude:/node_modules/,
				query:{
					presets:["es2015"]
				}
			}
		]
	}
}