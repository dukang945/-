<template>
  <div>
      <mt-header title="帮助中心">
      <router-link
        to="/My"
        slot="left"
      >
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <group>
      <cell
        title="如何联系我们？"
        is-link
        :border-intent="false"
        :arrow-direction="showContent1 ? 'up' : 'down'"
        @click.native="showContent1 = !showContent1"
      ></cell>

      <p
        class="slide"
        :class="showContent1?'animate':''"
      >blablabla...<br />blablabla...<br />blablabla...<br />blablabla...</p>

      <cell
        title="如何下载app？"
        is-link
        :border-intent="false"
        :arrow-direction="showContent2 ? 'up' : 'down'"
        @click.native="showContent2 = !showContent2"
      ></cell>

      <p
        class="slide"
        :class="showContent2?'animate':''"
      >blablabla...<br />blablabla...<br />blablabla...<br />blablabla...</p>

      <cell
        title="APP介绍"
        is-link
        :border-intent="false"
        :arrow-direction="showContent3 ? 'up' : 'down'"
        @click.native="showContent3 = !showContent3"
      ></cell>

      <p
        class="slide"
        :class="showContent3?'animate':''"
      >blablabla...<br />blablabla...<br />blablabla...<br />blablabla...</p>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from "vux";
export default {
  data() {
    return {
      showContent1: false,
      showContent2: false,
      showContent3: false
    };
  },
  components: {
    Cell,
    Group
  }
};
</script>

<style lang="scss" scoped>
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>