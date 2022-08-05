<template>
  <div class="page-login">
    <LoginHeader>欢迎登录</LoginHeader>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a
            @click="activeName = 'account'"
            :class="{ active: activeName === 'account' }"
            >账户登录</a
          >
          <a
            @click="activeName = 'qrcode'"
            :class="{ active: activeName === 'qrcode' }"
            >扫码登录</a
          >
        </nav>
        <!-- 表单 -->
        <LoginForm v-if="activeName==='account'"></LoginForm>
        <!-- 二维码 -->
        <div v-if="activeName === 'qrcode'" class="qrcode-box">
          <img src="@/assets/images/qrcode.jpg" alt="" style="width: 50%;" />
          <p>打开 <a href="javascript:;">狗子鲜App</a> 扫码登录</p>
        </div>
      </div>
    </section>
    <LoginFooter />
  </div>
</template>
<script>
import LoginHeader from "./Conp/LoginHeader";
import LoginForm from "./Conp/LoginForm";
import LoginFooter from "./Conp/LoginFooter";

import { ref } from "vue";
export default {
  name: "Login",
  components: { LoginHeader, LoginForm, LoginFooter },
  setup() {
    const activeName = ref("account");
    return { activeName };
  },
};
</script>

<style scoped lang="less">
.login-section {
  background: url(http://erabbit.itheima.net/img/login-bg.696efec3.png)
    no-repeat center / cover;
  height: 488px;
  position: relative;
  .wrapper {
    width: 380px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        &:first-child {
          border-right: 1px solid #f5f5f5;
          text-align: left;
        }
        &.active {
          color: @xtxColor;
          font-weight: bold;
        }
      }
    }
  }

  // 二维码容器
.qrcode-box {
  text-align: center;
  padding-top: 40px;
  p {
    margin-top: 20px;
    a {
      color: @xtxColor;
      font-size: 16px;
    }
  }
}
}
</style>