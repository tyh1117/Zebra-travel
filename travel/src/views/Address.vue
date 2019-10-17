
<template>
<div>  
   <h1>目的地</h1>

  <van-sidebar v-model="activeKey">
    <van-sidebar-item  
    v-for='(item,index) in list' 
    :key='index'
    :title="item.label"/>
  </van-sidebar>



  <footNav></footNav>
</div>
  
</template>

<script>
 import footNav from '../components/nav'
 import Vue from 'vue';
 import { Sidebar, SidebarItem } from 'vant';

  Vue.use(Sidebar);
  Vue.use(SidebarItem);
  export default {
     components:{
       footNav,
     },
     data() {
       return {
         list:[],
         activeKey: 0
       }
     },
     created() {
       this.$axios.get('api/v3/m1/area/group?scene=6&platform=4').then((res)=>{
         this.list=res.data.data.list
         console.log(this.list)
       })
     }
  }
</script>

<style>

</style>