<template>
  <div class="home">
    <home-header>
        <div slot="middle">炸鸡音乐</div>
        <div slot="right">
            <router-link tag="span" to="/user">我的</router-link>
        </div>
    </home-header>
    <div class="item">
      <div v-for="item in list" :key="item.id" @click="handleClick(item.id)">
        <router-link
          tag="span"
          :class="isactive === item.id ? 'active' : ''"
          :to="'/' + item.page"
          >{{ item.text }}</router-link
        >
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HomeHeader from "@/common/Header";
export default {
  name: "Home",
  components: {
    HomeHeader,
  },
  data() {
    return {
      isactive: 1,
      list: [
        {
          page: "recommend",
          text: "推荐",
          id: 1,
        },
        {
          page: "singer",
          text: "歌手",
          id: 2,
        },
        {
          page: "rank",
          text: "排行",
          id: 3,
        },
        {
          page: "search",
          text: "搜索",
          id: 4,
        },
      ],
    };
  },
  methods: {
    handleClick: function (index) {
      this.isactive = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  .item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      width: 25%;
      height: 44px;
      text-align: center;
      border: 1px solid black;
      box-sizing: border-box;
      padding:10px 0;
      span {
        display: inline-block;
        width: 28px;
        height: 23px;
        // border: 1px solid black;
      }
    }
  }
}
.active {
  color: #ffcd32;
  border-bottom: 1px solid #ffcd32;
}
</style>