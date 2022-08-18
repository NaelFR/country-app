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
import { useCountries } from "../store";
import { computed } from "@vue/reactivity";

const { visitedCountries } = useCountries();

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const center = ref(visitedCountries.value[0].latlng || [46, 2]);
let zoom = ref(4);

const markers = computed(() =>
  visitedCountries.value.map((country) => ({
    id: country.cca3,
    coordinates: country.latlng,
  }))
);

function zoomUpdated(newZoom: number) {
  zoom.value = newZoom;
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
