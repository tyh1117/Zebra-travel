<template>
  <div class="home">
      <!-- 搜索 -->
      <van-search placeholder="请输入搜索关键词" shape='round' />
     <!-- 轮播 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="banner">
        <van-swipe-item v-for='(item,index) in list.banner.list'
        :key='index'
        >
         <img :src="item.img+'?imageView2/1/w/670/h/264/format/jpg/interlace/1/q/100'">
        </van-swipe-item>
      </van-swipe>
 
   <!-- 首页导航 -->
    <van-grid :column-num="5"  :border='false'>
        <van-grid-item
          v-for="(item,index) in list.theme_list"
          :key="index"
          :icon="item.img"
          :text="item.title"
        />
      </van-grid>

    
  </div>
</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

export default {
  components: {
  },
  data() {
    return {
      list:{},
    }
  },
  created() {
    this.$axios.get('api/v3/m1/homepage?platform=4').then((res)=>{
      this.list=res.data.data
      console.log(this.list)
    })
   
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin:10px 5%;
  width: 90%;
  img {
    width: 100%;
    height: 132px;
    border-radius: 10px;
  }
}


</style>>