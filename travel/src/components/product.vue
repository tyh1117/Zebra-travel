<template>

<div class="pbanner">
  <h3>{{datalist.title}}</h3>
    
    <div class="pitem" 
    v-for='(item,index) in datalist.list'
    :key="index">
       <img :src="item.img+'?imageMogr2/gravity/Center/thumbnail/!670x358r/crop/670x358'">
       <h4>{{item.title}}</h4>
       <p>{{item.subtitle}}</p> 
       <div class="tip-mark">{{item.tip_mark}}</div>
       <div class="price">￥{{item.price}}起</div>
       <van-tag round type="success"
       v-for='(item1,i) in item.mark'
       :key='i'>{{item1.name}}</van-tag>
    </div>


</div>
</template>

<script>
  import Vue from 'vue';
  import { Tag } from 'vant';

  Vue.use(Tag);
  export default {
    props:['datalist'],
    created() {
      console.log(this.datalist)
    }

  }
</script>

<style scoped lang="scss">
   .pbanner {
     padding: 20px;
     h3 {
       margin-bottom: 8px;
       font-size: 18px;
       font-weight: 700;
       color: #333;
     }
    .pitem {
       padding-bottom: 30px;
       position: relative;
       img {
         border-radius: 5px;
         margin-bottom: 10px;
         width: 100%;
       }
       h4 {
         font-size: 16px;
         color: #333;
         padding: 10px;
       }
       p {
         color: #333;
         line-height: 22px;
         padding:0 10px;
         width:100%;
         white-space:nowrap;
         overflow:hidden;
         text-overflow:ellipsis;
       }
       .tip-mark {
          padding: 2px;
          font-size: 12px;
          color: #FFFFFF;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 2px;
          display: inline-block;
          position: absolute;
          left: 10px;
          top:10px;
       }
       .price {
          padding: 2px;
          font-size: 15px;
          color: #FFFFFF;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 2px;
          display: inline-block;
          position: absolute;
          right: 10px;
          top: 10px;
       }
       .van-tag {
         margin: 0 10px;
       }
    }
   }
</style>

