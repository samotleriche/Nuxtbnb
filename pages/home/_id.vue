<template>
<div>
  <div style="display: flex;">
    <img v-for="image in home.images" :key="image" :src="image" width="200" height="auto" alt="a description">
      
  </div>
  <div>
    {{ home.title }} <br>
    ${{ home.pricePerNight }} / night <br>
    <img src="/images/marker.svg" width="20" alt="">
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }} <br>
    <img src="/images/star.svg" width="20" alt=""> {{ home.reviewValue }} <br>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br>
    {{ home.description }}
    <div style="height:800px; width:800px" ref="map">

    </div>
  </div>
</div>
  
</template>

<script>
import homes from '~/data/homes'

export default {
  head(){
    return {
      title: this.home.title,
      script: [{
        src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA7Q_C4vqa9rJLQxPYdn4mXeU73Oki8Fyo&libraries=places&callback=initMap",
        hid: "map",
        defer: true,
        skip: process.client && window.mapLoaded
      },
      {
        innerHTML: "window.initMap = function(){ window.mapLoaded = true}",
        hid: "map-init",
      }
      ],
    }
  },
  data(){
    return {
      home: {}
    }
  },
  mounted() {
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng),
      disableDefaultUI: true,
      zoomControl: true,
    }
    const map = new window.google.maps.Map(this.$refs.map, mapOptions)
    const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map);
  },
  created() {
    const home = homes.find((home) => home.objectID == this.$route.params.id)
    this.home = home
  }

}
</script>

<style>

</style>