<template>
  <l-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  >
    <l-tile-layer :url="url"> </l-tile-layer>
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :lat-lng="marker.coordinates"
    >
    </l-marker>
  </l-map>
</template>

<script setup lang="ts">
import { ref } from "vue";
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const center = ref([49.1193089, 6.1757156]);
let zoom = ref(12);

const markers = [
  { id: 1, coordinates: [49.11491, 6.17881] },
  { id: 2, coordinates: [49.13329, 6.15437] },
  { id: 3, coordinates: [49.10216, 6.15885] },
  { id: 4, coordinates: [49.13601, 6.19963] },
  { id: 5, coordinates: [49.105563, 6.182234] },
];

function zoomUpdated(newZoom: number) {
  zoom.value = newZoom;
  console.log(markers);
}
function centerUpdated(newCenter: number[]) {
  center.value = newCenter;
}
</script>

<style>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
