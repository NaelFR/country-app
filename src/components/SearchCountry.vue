<template>
  <div class="my-8 max-w-[500px] mx-auto">
    <label for="country" class="sr-only">Rechercher un pays</label>
    <input
      type="country"
      name="country"
      id="country"
      class="form-input focus:ring-green-500 focus:border-green-500 shadow-md block w-full h-16 text-xl border-green-300 rounded-md"
      placeholder="Rechercher un pays"
      @input="debouncedSearch"
    />
  </div>
</template>
<script lang="ts" setup>
import { debounce } from "@/debounce";

async function searchCountry(event: Event) {
  const searchValue = (event.target as HTMLInputElement)?.value;
  if (searchValue.length < 3) {
    return;
  }

  const result = await fetch(
    `https://restcountries.com/v3.1/name/${searchValue}`
  );

  const data = await result.json();
  console.log("result", data);
}

let [debouncedSearch] = debounce(searchCountry, 300);
</script>
