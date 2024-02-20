<template>
  <section>
    <base-card>
      <h1>Register as a coach now!</h1>
      <coach-form @save-data="submitData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/itemCoach/CoachForm.vue'
export default {
  components: {
    CoachForm
  },
  methods: {
    submitData(data) {
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    }
  }
}
</script>
