<template>
  <div>
    <typeNav></typeNav>
    <listContainer></listContainer>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor v-for="(item,index) in floorList" :key="item.id" :floor="item"></floor>
    
    <brand></brand>
   
  </div>
 
</template>

<script>
import typeNav from '../../components/typeNav/typeNav.vue'
import listContainer from '../../components/listContainer/listContainer.vue'
import recommend from '../../components/recommend/recommend.vue'
import rank from '../../components/Rank/rank.vue'
import like from '../../components/Like/like.vue'
import floor from '../../components/Floor/floor.vue'
import brand from '../../components/Brand/brand.vue'

export default {
  mounted(){
    this.$store.dispatch('getFloorList')
    
  },
  computed:{
    floorList(){
      return this.$store.state.home.floorList
    }
  
  },
 
components:{
    typeNav,
    listContainer,
    recommend,
    rank,
    like,
    floor,
    brand
}

}
</script>

<style>

</style>