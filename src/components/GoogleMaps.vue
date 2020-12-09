<template>
  <div id="cd-google-map" style="width:100%;height:400px;border-radius:0.3em;"></div>
</template>

<script>
import googleMapsInit from '@/utils/googleMapsInit'
import * as mapStyles from '@/utils/mapStyles'
export default {
  name: 'GoogleMaps',
  props: {
    coordinates: {
      type: String,
      required: true
    },
    zoom: {
      type: Number,
      default: 6
    }
  },
  async mounted () {
    let styles = mapStyles.styles
    if (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      styles = mapStyles.nightStyles
    }

    const position = this.coordinates.split(',', 2)
    const latlng = {
      lat: parseFloat(position[0]),
      lng: parseFloat(position[1])
    }
    const mapOptions = {
      zoom: this.zoom,
      center: latlng,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: false,
      styles
    }
    const google = await googleMapsInit()

    const map = new google.maps.Map(this.$el, mapOptions)

    new google.maps.Marker({
      position: latlng,
      map,
      title: "Tsavo Seed"
    });
  }
}
</script>