<template>

   
   <div>

   <Home></Home>


    <van-tabbar
      v-model="active"
      active-color="#f90033"
      inactive-color="#333">
      <van-tabbar-item icon="wap-home" to='/'>首页</van-tabbar-item>
      <van-tabbar-item icon="map-marked" to='/address'>目的地</van-tabbar-item>
      <van-tabbar-item icon="diamond">定制游</van-tabbar-item>
      <van-tabbar-item icon="browsing-history">发现</van-tabbar-item>
      <van-tabbar-item icon="manager">个人中心</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

import Home from './Home'

export default {
  data() {
    return {
       active: 0
    }
  },
  components:{
    Home,
  }

}
</script>

<style>

</style>