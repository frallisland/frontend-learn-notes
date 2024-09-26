// 实现 const [a, b]={a:1, b:2}
// 修改对象原型的迭代器
Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};
const [a, b] = { a: 1, b: 2 };
console.log(a, b);
