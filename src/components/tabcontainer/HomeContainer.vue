<template>
  <div>
    <mt-swipe :show-indicators="false" class="swipe">
      <mt-swipe-item v-for="(item,index) in swipePics" :key="index"> 
        <img :src="item.img" alt=""> 
      </mt-swipe-item>
    </mt-swipe>
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4">
									<router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
									</router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">留言</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return{
      swipePics:[]
    }
  },
  created(){
    axios({
      url:"http://vue.studyit.io/api/getlunbo"
    }).then( res => {
      if(res.data.status==0){
        this.swipePics = res.data.message;
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .swipe{
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
