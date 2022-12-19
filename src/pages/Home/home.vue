<template>
  <div>
    <typeNav></typeNav>
    <listContainer></listContainer>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor></floor>
    <floor></floor>
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