<template>
  <div class="user">
    <user-header>
      <div slot="left">
        <div class="back" @click="back"></div>
      </div>
      <div slot="middle" class="title" @click="changeColor">
        <div :class="isactive === true ? 'active' : 'noactive'">我喜欢的</div>
        <div :class="isactive === false ? 'active' : 'noactive'">最近听的</div>
      </div>
    </user-header>
    <div class="random_play">
      <span class="r_left"></span>
      <span class="r_right">随机播放全部</span>
    </div>
    <div class="content" v-show="isactive">
      <img src="@/assets/image/default.png" alt="" />
      <p>暂无收藏歌曲</p>
    </div>
    <ul class="content_right" v-show="!isactive">
      <li class="item">
        <h3 class="sing_name">兰花草 (Live)</h3>
        <p class="author">宋亚轩·歌曲合辑</p>
      </li>
    </ul>
  </div>
</template>
<script>
import UserHeader from "@/common/Header";
export default {
  name: "User",
  components: {
    UserHeader,
  },
  data() {
    return {
      isactive: true,
    };
  },
  methods: {
    back: function () {
      window.history.back();
    },
    changeColor: function () {
      this.isactive = !this.isactive;
    },
  },
};
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  .back {
    width: 22px;
    height: 22px;
    margin: 11px auto;
    background-image: url("data:image/png;base64,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");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .title {
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    padding: 7px 0;
    display: flex;
    justify-content: space-evenly;
    line-height: 30px;
    font-size: 14px;
  }
  .random_play {
    margin: 30px auto 0;
    width: 135px;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 7px 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #ccc;
    .r_left {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("data:image/png;base64,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");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .r_right {
      display: inline-block;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }
  .content {
    position: fixed;
    width: 375px;
    top: 50%;
    transform: translateY(-50%);
    img {
      display: block;
      width: 86px;
      height: 90px;
      margin: 0 auto;
    }
    p {
      text-align: center;
      margin-top: 30px;
    }
  }
  .content_right {
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 64px;
      box-sizing: border-box;
      padding: 10px 0;
      box-sizing: border-box;
      border:1px solid black;
      .sing_name {
        font-size: 16px;
        height: 20px;
        color: #ffffff;
      }
      .author {
        margin: 4px 0 0;
        font-size: 14px;
        color: #595959;
        height: 20px;
      }
    }
  }
}
.active {
  background: #333333;
  color: #fff;
  width: 50%;
}
.noactive {
  width: 50%;
  background: #222222;
  color: #656565;
}
</style>