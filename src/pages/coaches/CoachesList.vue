<template>
  <coach-filter @change-filter="setFilters"></coach-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :desc="coach.description"
          :price="coach.hourlyRate"
        >
        </coach-item>
      </ul>
      <strong v-else>No coaches found</strong></base-card
    >
  </section>
</template>

<script>
import CoachItem from '../../components/itemCoach/CoachItem.vue';
import CoachFilter from '../../components/itemCoach/CoachFilter.vue'
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coachesList'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
