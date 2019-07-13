export const actions = {
  // nuxtServerInit必须声明在根模块
  //   参数1是action上下文，参数2是组件上下文
  nuxtServerInit({ commit }, ctx) {
    console.log(ctx);

    const token = ctx.app.$cookies.get("token");
    if (token) {
      console.log("nuxtServerInit: token:" + token);
      commit("user/SET_TOKEN", token);
    }
  }
};
