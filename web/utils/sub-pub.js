/**
 * @author mengke
 * @email 2628963547@qq.com
 * @create date 2022-08-28 00:11:50
 * @description 手写发布订阅
 */
const eventHub = {
  map: {},
  on: (name, fn) => {
    // 入队
    eventHub.map[name] = eventHub.map[name] || [];
    eventHub.map[name].push(fn);
  },
  // trigger
  emit: (name, data) => {
    const q = eventHub.map[name];
    if (!q) {
      return;
    }
    q.map((f) => f.call(undefined, data));
    return undefined;
  },
  off: (name, fn) => {
    const p = eventHub.map[name]; //alias 设计模式
    if (!p) {
      return;
    }
    const index = p.indexOf(fn);
    if (index < 0) {
      return;
    }
    p.splice(index, 1);
  },
};

eventHub.on("click", f1); // 监听事件,把f1放到任务队列中（先进先出）
eventHub.off("click", f1); // 取消监听事件
setTimeout(() => {
  eventHub.emit("click", "frank"); // 触发事件
}, 3000);
