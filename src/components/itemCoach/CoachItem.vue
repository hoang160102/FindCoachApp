<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ price }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :title="area" :type="area">{{ area }}</base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="contactCoach">Contact</base-button>
      <base-button link :to="viewDetails">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: ['id', 'firstName', 'lastName', 'areas', 'desc', 'price'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    viewDetails() {
      return `${this.$route.path}/${this.id}`;
    },
    contactCoach() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
