<template>
  <div
    class="video-bg"
    v-if="videoRect"
    :style="{top: `${videoRect.top + scrollTop}px`, height: `${videoRect.height}px`}"
  ></div>
</template>

<script>
/**
 * home 页面 video 背景
 */
export default {
  data() {
    return {
      scrollTop: 0
    };
  },
  computed: {
    videoRect() {
      return this.$store.state.home.videoRect;
    }
  },
  mounted() {
    this.scrollTop = window.document.documentElement.scrollTop;
  }
};
</script>

<style lang="less" scoped>
.video-bg {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  z-index: -1;
}
</style>
