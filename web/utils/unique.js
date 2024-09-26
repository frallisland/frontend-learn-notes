/**
 * @author mengke
 * @email 2628963547@qq.com
 * @create date 2022-08-27 20:49:24
 * @description 数组去重
 */
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr));
