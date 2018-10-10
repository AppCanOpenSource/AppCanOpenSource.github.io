const microConfig = {
	eureka: "http://192.16.8.182:8761", //注册中心
  	monitor: "http://192.16.8.182:8764", //监控中心
    zipkin: "http://192.16.8.182:9411", //链路跟踪
  	generator: "http://192.16.8.182:8762/index", //代码生成器
  	swagger: "http://192.16.8.182:8765"
}

// const microConfig = {
// 	eureka: "http://172.16.30.50:8761", //注册中心
//   	monitor: "http://172.16.30.50:8764", //监控中心
//   	zipkin: "http://172.16.30.50:9411", //链路跟踪
//   	generator: "http://172.16.30.50:8762/index", //代码生成器
//   	swagger: "http://172.16.30.50:8765"
// }

window.localStorage.microConfig = JSON.stringify(microConfig);
