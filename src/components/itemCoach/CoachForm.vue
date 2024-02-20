<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model="firstName.val" @blur="clearValidity('firstName')"/>
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model="lastName.val" @blur="clearValidity('lastName')" />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !desc.isValid }">
      <label for="description">Description</label>
      <textarea rows="5" id="description" v-model="desc.val" @blur="clearValidity('desc')"></textarea>
      <p v-if="!desc.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly rate</label>
      <input type="number" id="rate" v-model="rate.val" @blur="clearValidity('rate')" />
      <p v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val" @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val" @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')" />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: {
        isValid: true,
        val: '',
      },
      lastName: {
        isValid: true,
        val: '',
      },
      desc: {
        isValid: true,
        val: '',
      },
      rate: {
        isValid: true,
        val: null,
      },
      areas: {
        isValid: true,
        val: [],
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
        this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.desc.val === '') {
        this.desc.isValid = false;
        this.formIsValid = false;
      }
      if (this.rate.val < 0 || !this.rate.val) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.desc.val,
        hourlyRate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
    clearValidity(input) {
        this[input].isValid = true
    }
  },
};
</script>

<style scoped>
.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 18px;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
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
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 18px;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

p {
    margin: 0.5rem 0;
    color: red;
}
</style>
