<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your e-mail</label>
      <input type="email" id="email" v-model="email"/>
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      email: '',
      message: '',
      formIsValid: true
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true
      if (this.email === '' || !this.email.includes('@') || this.message === '') {
        this.formIsValid = false;
        return;
      }
      const request = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      }
      this.$store.dispatch('requests/requestMsg', request)
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
