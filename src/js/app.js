// alert("hello world");
// alert(require("./people.js"));
//入口文件和出口文件只能有一个  需要打包其他文件,需要在入口文件中引入...一并打包到出口文件
//output:出口文件一般只有一个,通常命名为bundle.js 会将入口文件及相关联的文件内容全部打包到出口文件
//webpack app.js bundle.js 运行打包命令
//webpack app.js bundle.js --watch 持续监听并且运行(不用每次运行)
require("../css/style.css");
let people = require ("./people.js");
let $ =require("jquery");


$.each(people,function(key,value){
	$("body").append(`<h1>${people[key].name}</h1>`);
	console.log(value);
})
// console.log(people[0].name);


//style-loader: 作用是在html中添加style标签 让html识别
//css-loader :让打包文件可以获取到CSS的样式 并且在入口文件中引入


//webpack-dev-server : 作用是搭建服务器,将项目运行在服务器中.



//npm init --yes
//cnpm install webpack --save -dev.
//webpack app.js bundle.js