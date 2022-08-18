<template>
  <header class="bg-green-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none"
      >
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            />
          </a>
        </div>
        <div class="ml-auto">
          <span class="text-white text-2xl font-bold">Country app</span>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <SearchCountry />
    <div>
      <div class="relative w-full h-96">
        <MapComponent />
      </div>
      <VisitedCountriesList />
    </div>
  </main>
</template>

<script setup lang="ts">
import MapComponent from "./components/MapComponent.vue";
import SearchCountry from "./components/SearchCountry.vue";
import VisitedCountriesList from "./components/VisitedCountriesList.vue";
</script>

<style></style>
