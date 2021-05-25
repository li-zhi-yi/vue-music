<template>
    <div class="recommend">
        <div class="title">热门歌曲推荐</div>
        <ul class="sing-menu">
            <!-- <router-link tag="li"></router-link> -->
            <router-link tag="li" class="menu-item" to="">
                <img class="left" src="http://qpic.y.qq.com/music_cover/lLIjmibUF1NrQu3XaJd7ickbjA83cp38tWmMiaLrYXKe25FphsnS9mgFw/300?n=1" alt="">
                <div class="right">
                    <span class="sing-word">闲</span>
                    <div class="introduce">《游戏神曲》挑战自我 决战巅峰</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Recommend'
}
</script>
<style lang="scss" scoped>
.recommend{
    width: 100%;
    .title{
        height: 65px;
        font-size: 20px;
        text-align:center;
        color:#FFCD32;
        line-height:65px;
    }
    .sing-menu{
        width: 100%;
        box-sizing: border-box;
        padding:0 20px;
        .menu-item{
            display:flex;
            align-items: center;
            .left{
                width: 60px;
                height: 60px;
                margin-right:20px;
            }
            .right{
                flex:1;
                height: 50px;
                border:1px solid purple;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
             .sing-word{
                 display:inline-block;
                 text-align:left;
                 font-size: 20px;
                 margin-bottom:10px;
             }   
             .introduce{
                 font-size: 14px;
                 height: 20px;
                 line-height:20px;
                 color: rgba(255,255,255,0.3);
             }
            }
        }
    }
}
</style>