/**
 * @author mengke
 * @email 2628963547@qq.com
 * @create date 2022-08-31 10:17:32
 */

// 优点：这种方式实际上是用了 setTimeout，没有形成进程阻塞，不会造成性能和负载问题。
// 缺点：虽然不像 callback 套那么多层，但仍不怎么美观，

// 而且当我们需要在某过程中需要停止执行（或者在中途返回了错误的值），还必须得层层判断后跳出，
// 非常麻烦，而且这种异步并不是那么彻底，还是看起来别扭
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const t1 = new Date();
sleep(3000).then(() => {
  const t2 = new Date();
  console.log(t2 - t1);
});
