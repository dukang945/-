<template>
  <div>
    <mt-header title="个人信息">
      <router-link
        to="/My"
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </router-link>

    </mt-header>
    <mt-cell title="头像">
      <div
        class="user-img"
        @click="uploadHeadImg"
      >
        <img
          src="../assets/logo.png"
          alt=""
          width="40px"
        >
        <input
          type="file"
          style="display:none"
          id="hiddenInput"
          @change="handleFile"
        >
      </div>
    </mt-cell>
    <mt-cell
      title="姓名"
      to=""
      is-link
      value="123"
    >
    </mt-cell>
    <mt-cell
      title="我的专属推荐码"
      to=""
      is-link
    >
    <img src="" alt="">
    </mt-cell>
    <mt-cell
      title="更多"
      to=""
      is-link
    >
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userImg: "../assets/logo.png"
    };
  },
  methods: {
    uploadHeadImg() {
      this.$el.querySelector("#hiddenInput").click();
    },
    handleFile(e) {
      console.log(e);
      this.userImg = e.target.files[0].name;
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-cell{
  // border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
</style>