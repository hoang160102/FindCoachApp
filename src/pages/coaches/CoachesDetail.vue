<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ price }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ desc }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    price() {
      return this.selectedCoach.hourlyRate;
    },
    desc() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coachesList'].find(
      (coach) => {
        return coach.id === this.id;
      }
    );
  },
};
</script>
