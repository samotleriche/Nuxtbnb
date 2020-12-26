<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-around">
    <div v-for="home in homes" :key="home.objectID" style="margin: auto; width: 200px">
      <nuxt-link :to="`/home/${home.objectID}`" prefetch><HomeCard :home="home"/></nuxt-link>
    </div>
  </div>
</template>
<script>
import homes from '~/data/homes'

export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'This is a homepage!',
        hid: 'description'
      }]
    }
  },
  data() {
    return {
      homes: homes.slice(0,3)
    }
  }
  
}
</script>