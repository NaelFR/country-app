import { ref } from "vue";

const visitedCountries = ref<Country[]>(
  JSON.parse(localStorage.getItem("visitedCountries") || "[]")
);

export interface Country {
  name: {
    common: string;
  };
  latlng: number[];
  id: string;
  cca3: string;
}

function addToVisitedCountries(country: Country) {
  visitedCountries.value.push(country);

  localStorage.setItem(
    "visitedCountries",
    JSON.stringify(visitedCountries.value)
  );
}

function removeCountry(countryToRemove: Country) {
  visitedCountries.value = visitedCountries.value.filter(
    (country) => country.cca3 !== countryToRemove.cca3
  );

  localStorage.setItem(
    "visitedCountries",
    JSON.stringify(visitedCountries.value)
  );
}

export function useCountries() {
  return {
    visitedCountries,
    addToVisitedCountries,
    removeCountry,
  };
}
