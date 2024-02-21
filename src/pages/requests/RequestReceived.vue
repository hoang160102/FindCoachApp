<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <h3 v-if="!hasRequests">You haven't received any requests</h3>
      <ul>
        <requests-item
          v-for="request in requests"
          :key="request.id"
          :coachId="request.coachId"
          :email="request.email"
          :message="request.message"
        ></requests-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: {
    RequestsItem,
  },
  computed: {
    requests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
