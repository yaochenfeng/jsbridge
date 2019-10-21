// jsbridge是为H5和客户端交互通讯而产生的一个中间件，即一个JavaScript的SDK。负责
// 处理H5和客户端的方法调用、通信及H5页面自身的降级处理（非内嵌在客户端的情况）。
// 计划处理H5 、客户端 、weex 方法调用
// (function() {
//     // 桥初始化，初始化过程中会：主动探测UA，判断页面所属的生存环境，如果是在客户端中，
//     // 会探测获取客户端的平台类型和版本号，初始化消息队列，并主动探测网络类型，并同所属
//     // 环境主动握手交换双方所需的额外基础信息。
//
// })();

class JSBridge {
    // 构造函数
    constructor() {
        this.version = "0.0.1"
        console.log("init")
    }
}
export default new JSBridge()