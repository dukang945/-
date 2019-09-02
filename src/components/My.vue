<template>
  <div>
    <div class="personal-msg">
      <div class="head-img">
        <div class="img-box">
          <img
            src="../assets/logo.png"
            alt=""
          >
        </div>
        <span class="user-name">孙悟空</span>
      </div>

    </div>
    <div class="cell-list">
      <mt-cell
        title="个人信息"
        is-link
        to="/User"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="我的团队"
        is-link
        to="/Team"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="签到有奖"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="我的钱包"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="24"
        >
      </mt-cell>
      <mt-cell
        title="邀请好友"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="帮助中心"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="关于我们"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell
        title="设置"
        is-link
        to="/Index"
      >
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
      <mt-cell title="退出">
        <img
          slot="icon"
          src=""
          width="20"
          height="20"
        >
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personal-msg {
  width: 100%;
  height: 10rem;
  background-color: #000;
  position: relative;
  .head-img {
    position: absolute;
    left: 10%;
    top: 10%;
    display: flex;
    .img-box {
      width: 2rem;
      height: 2rem;
      display: flex;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;
      -ms-flex-align: center;
      align-items: center;
      flex: 2;
      img {
        width: 80%;
        height: 80%;
        text-align: center;
        margin: 0 auto;
        justify-content: center;
      }
    }
    .user-name {
      flex: 3;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      color: #fff;
    }
  }
}
.cell-list {
  margin-top: 1rem;
}
</style>