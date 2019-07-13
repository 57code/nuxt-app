export default function({ $axios, store }) {
    // onRequest是$axios模块提供的帮助方法
    $axios.onRequest(config => {
      if (store.state.user.token) {
        // 将令牌附加到请求头
        config.headers.Authorization = "Bearer " + store.state.user.token;
      }
      return config;
    });

    // 
  }