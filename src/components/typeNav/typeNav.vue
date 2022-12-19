<template>
  <div class="type-nav">
    
            <div class="container">
                <h2 class="all">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <div class="sort">
                    <div class="all-sort-list2">
                        <div class="item" v-for="(c1,index) in getCategoryList" :key="c1.categoryId">
                            <h3 @mouseenter="changeIndex(index)" :class="currentIndex==index?'cur':''" @mouseleave="leaveIndex">
                                <a href="">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                <div class="subitem">
                                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dt>
                                            <a href="">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a href="">{{c3.categoryName}}</a>
                                            </em>
                                            
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
  mounted(){
    this.$store.dispatch('getcategoryList')
  },
  computed:{
    getCategoryList(){
        return this.$store.state.home.categoryList
    }
  },
  data(){
    return {
        currentIndex:-1
    } 
  },
  methods:{
    changeIndex(index){
        this.currentIndex=index
    },
    leaveIndex(){
        this.currentIndex=-1
    }
  }
}
</script>

<style>
.outer .type-nav {
  border-bottom: 2px solid #e1251b;
}
.outer .type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.outer .type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.outer .type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.outer .type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.outer .type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.cur{
    background: skyblue;
}
.outer .type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list {
  /* display: none; */
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.outer .type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}

</style>