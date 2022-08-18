<template>
  <div class="max-w-[980px] mx-auto">
    <ul>
      <li
        class="flex"
        v-for="visitedCountry in visitedCountries"
        :key="visitedCountry.id"
      >
        <span>{{ visitedCountry.name.common }}</span>
        <button
          @click="removeCountry(visitedCountry)"
          class="form-input ml-auto border-red-300 bg-red-200 rounded-md"
        >
          Supprimer
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useCountries } from "../store";
const { visitedCountries, removeCountry } = useCountries();
</script>
