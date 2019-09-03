<template>
  <div class="content-box">
    <mt-header title="我的团队">
      <router-link
        to="/My"
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="main-box">
      <span class="team-leader">杜康啊</span>
      <div class="earning">
        <span class="earning-title">今日收益</span>
        <span>4,000</span>
      </div>
    </div>
    <div class="teammate">
      <div class="teammate-header">
        <span class="team-title">团队成员</span>
        <span class="create-time">2019-08-18</span>
      </div>
      <div class="teammate-table">
        <x-table :cell-bordered="false">
          <thead>
            <tr>
              <th>姓名</th>
              <th>ID</th>
              <th>电话</th>
              <th>购买商品金额</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>杜康</td>
              <td>bw2693</td>
              <td>13164151625</td>
              <td>5,000</td>
            </tr>
            <tr>
              <td>杜康</td>
              <td>bw2693</td>
              <td>13164151625</td>
              <td>5,000</td>
            </tr>
          </tbody>
        </x-table>
        <div class="all-earn">
          <span>团队总收益：</span>
          <span>11,700</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XTable } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    XTable
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
.content-box {
  padding: 0 0.75rem;
}
.main-box {
  position: relative;
  margin-top: 0.5rem;
  height: 6.5rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, #7a88ff, #7affaf);
  .team-leader {
    display: inline-block;
    padding: 0.25rem 1rem;
    background-color: gold;
    border-radius: 0.5rem 0 0.5rem 0;
    font-size: 0.6rem;
  }
  .earning {
    color: #fff;
    text-align: center;
    span {
      display: block;
    }
    .earning-title {
      font-size: 0.7rem;
      margin-bottom: 0.75rem;
      margin-top: 0.25rem;
    }
  }
}
.teammate {
  margin-top: 1rem;
  .teammate-header {
    display: flex;
    justify-content: space-between;
    .team-title {
      font-weight: 600;
      font-size: 0.8rem;
    }
    .create-time {
      font-size: 0.6rem;
      line-height: 1.2rem;
      color: #ccc;
    }
  }
  .teammate-table {
    margin-top: 0.5rem;
    th {
      font-size: 0.7rem;
      font-weight: 600;
    }
    td {
      font-size: 0.6rem;
    }
  }
  .all-earn {
    text-align: center;
    font-size: 0.7rem;
    margin-top: 0.5rem;
    span:nth-of-type(2){
      color: red
    }
  }
}
</style>