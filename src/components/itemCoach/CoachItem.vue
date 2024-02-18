<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ price }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="viewDetails">View Details</router-link>
      <router-link :to="contactCoach">Contact</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'desc', 'price'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    viewDetails() {
      return `/coaches/${this.id}`;
    },
    contactCoach() {
      return `/coaches/${this.id}/contact`;
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
