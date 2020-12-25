<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-around">
    <div v-for="home in homes" :key="home.objectID" style="margin: auto; width: 200px">
      <HomeCard :home="home"/>
    </div>
  </div>
</template>
<script>
import homes from '~/data/homes'

export default {
  data() {
    return {
      homes: homes.slice(0,3)
    }
  }
  
}
</script>