<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item style="background:#0089dc">1</mt-swipe-item>
      <mt-swipe-item style="background:#ffd705">2</mt-swipe-item>
      <mt-swipe-item style="background:#ff2d4b">3</mt-swipe-item>
    </mt-swipe>
    <div class="goods-list">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
    <div class="partition">
      <span class="pay-title">支付方式</span>
    </div>
    <div class="pay-way">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 10rem;
}
.goods-list {
  ul {
    display: flex;
    margin-top: 1rem;
    flex-flow: wrap;
    padding: 1rem;
    justify-content: space-between;
  }
  li {
    width: 5rem;
    height: 5rem;
    background-color: red;
    margin-bottom: 1rem;
  }
}
.partition{
  text-align: center;
    .pay-title{
        position: relative;
        color: #ccc;
        font-size: .8rem;
        text-align: center;
        &:before,&:after{
            content:'';
            width: 5.5rem;
            color: #ccc;
            border: .5px solid #ccc;
            position: absolute;
            top: 10px;
        }
        &::before{
          left: -6rem;
        }
        &:after{
            right: -6rem;
        }
    }
}
.pay-way{
  display: flex;
  justify-content: center;
  span{
    display: block;
    width: 4rem;
    height: 4rem;
    margin-right: .5rem;
    background-color:burlywood
  }
}
</style>