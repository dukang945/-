<template>
  <div class="content-box">
    <header @click="backToLevel">X</header>
    <h3 class="login-title">登录</h3>
    <mt-field
      placeholder="请输入用户名/邮箱/手机号"
      type="password"
      v-model="loginName"
      class="left-icon"
    >
      <img
        style="display:inline-block;vertical-align:middle;"
        src="../../assets/logo.png"
        width="24"
        height="24"
      >
    </mt-field>
    <mt-field
      placeholder="请输入密码"
      type="password"
      v-model="password"
      class="left-icon"
    >
      <img
        style="display:inline-block;vertical-align:middle;"
        src="../../assets/logo.png"
        width="24"
        height="24"
      >
    </mt-field>
    <mt-button
      size="large"
      class="do-login"
      type="primary"
    >登 录</mt-button>
    <div class="login-else">
      <span>手机号快速注册</span>
      <span>忘记密码?</span>
    </div>
  </div>
</template>

<script>
import { XInput, Group } from "vux";
export default {
  data() {
    return {
      loginName: "",
      password: ""
    };
  },
  components: {
    XInput,
    Group
  },
  methods: {
    backToLevel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-title {
  margin-top: 1rem;
}
.left-icon {
  padding-left: 1.5rem;
  border-bottom: 1px solid #ccc;
}
/deep/.left-icon .mint-field-other {
  position: absolute;
  width: 24px;
  left: 0.5rem;
  top: 0.7rem;
}
.do-login {
  margin-top: 1.5rem;
}
.login-else {
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  margin-top: .5rem;
  span:nth-of-type(1) {
    color: dodgerblue;
  }
}
</style>