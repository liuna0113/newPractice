<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
               <p>{{item.title}}</p> 
							<p>
                <span>发布时间:{{item.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="mui-pull-right">点击: 1次</span>
              </p>
						</div>
					</a>
				</li>
			</ul>
  </div>
</template>
<script>
import axios from "axios";
import dateformatter from "../../filters/dataformatter.js"
export default {
  data(){
    return {
      newsList:[]
    }
  },
  created(){
    axios({
      url:"http://vue.studyit.io/api/getnewslist"
    }).then( res =>{
      if(res.data.status == 0){
        this.newsList=res.data.message
      }
    })
  },
  filters:{
    dateformatter
  }
}
</script>
<style lang="scss" scoped>
 .mui-media-object{
   width: 30px;
   height: 30px;
 }
</style>

