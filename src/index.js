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
        this._callbacks = {}
        this._callbackID = 1
        this._eventMap = {}
        console.log("init")
    }
    // 配置
    config(param={}){
        console.log("config " + param)
    }
    invoke(cmd, params, callback){
        if (!cmd || typeof cmd !== 'string') {
            return;
        };
        if (typeof params !== 'object') {
            params = {};
        };
        let callbackID = this._callbackID++
        var msgObj = {'cmd':cmd, 'params':params}
        if (typeof callback === 'function') {
            this._callbacks[callbackID] = callback;
            msgObj['callbackID'] = callbackID
          };
        console.log("msg"+JSON.stringify(msgObj));
        // 判断环境，执行不同的 native bridge
    }
    on(event, callback){
        if (!cmd || typeof cmd !== 'string') {
            return;
        };
        if (!callback || typeof callback === 'function') {
            return;
        }
        this._eventMap[event] = callback
    }
}
export  const bridge = new JSBridge()