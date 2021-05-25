<template>
  <div class="Header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.Header {
  width: 375;
  height: 44px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  line-height: 44px;
  align-items: center;
  text-align: center;
  .left,
  .right {
    width: 44px;
    height: 44px;
    background: orange;
  }
  .middle {
    flex: 1;
    height: 44px;
    text-align: center;
    background: pink;
  }
}
</style>