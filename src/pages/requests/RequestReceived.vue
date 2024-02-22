<template>
  <base-dialog :show="!!error" title="An error occured" @close="handleError">
    <p>{{ error }}</p>
</base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <div v-if="isLoading ">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasRequests && !isLoading">
        <requests-item
          v-for="request in requests"
          :key="request.id"
          :coachId="request.coachId"
          :email="request.email"
          :message="request.message"
        ></requests-item>
      </ul>
      <h3 v-else>You haven't received any requests</h3>
    </base-card>
  </section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: {
    RequestsItem,
  },
  data() {
    return {
      isLoading: true,
      error: null
    }
  },
  computed: {
    requests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
      async loadRequests() {
        this.isLoading = true
        try {
          await this.$store.dispatch('requests/loadRequests')
        }
        catch(error) {
          this.error = error.message || 'Failed to fetch'
        }
        this.isLoading = false
      },
      handleError() {
        this.error = null
      }
    },
  created() {
    this.loadRequests()
  }
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
