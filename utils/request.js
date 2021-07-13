// 发送Ajax请求

import config from "./config";

// 封装功能函数
// 1. 功能明确
// 2. 函数内部保留固定代码（静态的）
// 3. 将动态的数据抽取形成形参，由使用者根据自身的情况动态的传入实参
// 4. 设置形参的默认值（ES6）


// 封装功能组件
// 1. 功能点明确
// 2. 组件内部保留静态的代码
// 3. 将动态的数据抽取成 props 参数，由使用者根据自身的情况以标签属性的形式动态传入 props 数据
// 4. 设置组件的必要性及数据类型
// props: {
//   msg: {
//     required: true,
//     default: 默认值,
//     type: String
//   }
// }

export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: { 'content-type': 'application/json' },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // console.log("请求成功", res);
        resolve(res.data);
      },
      fail: (err) => {
        // console.log("请求失败", err);
        reject(err);
      }
    });
  });
}