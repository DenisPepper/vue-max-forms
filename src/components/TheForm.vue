<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input
        @focus="setupUsername"
        @blur="assertUsername"
        v-model.trim.lazy="userName"
        id="user-name"
        name="user-name"
        type="text"
        ref="userNameRef"
      />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input v-model.number="userAge" id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="referrer" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input v-model="interest" id="interest-news" name="interest" type="checkbox" value="news" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input v-model="interest" id="interest-tutorials" name="interest" type="checkbox" value="tutorials" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input v-model="interest" id="interest-nothing" name="interest" type="checkbox" value="nothing" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input v-model="how" id="how-video" name="how" value="courses" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input v-model="how" id="how-blogs" name="how" value="blogs" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input v-model="how" id="how-other" name="how" value="other" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input v-model="confirm" type="checkbox" name="confirm" id="confirm" />
      <label for="confirm">Confirm ?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
const init = {
  userName: '',
  userAge: null,
  referrer: 'wom',
  interest: [],
  how: null,
  confirm: false,
};

export default {
  data() {
    return {
      userName: init.userName,
      userAge: init.userAge,
      referrer: init.referrer,
      interest: init.interest,
      how: init.how,
      confirm: init.confirm,
    };
  },
  methods: {
    clear() {
      this.userName = init.userName;
      this.userAge = init.userAge;
      this.referrer = init.referrer;
      this.interest = init.interest;
      this.how = init.how;
      this.confirm = init.confirm;
    },
    submit() {
      const data = {
        userName: this.userName,
        userAge: this.userAge,
        referrer: this.referrer,
        interest: this.interest,
        how: this.how,
        confirm: this.confirm,
      };
      console.log(data);
      this.clear();
    },
    setupUsername() {
      const element = this.$refs.userNameRef;
      element.classList.remove('input--invalid');
    },
    assertUsername() {
      const element = this.$refs.userNameRef;
      if (this.userName.length < 5) {
        element.classList.add('input--invalid');
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.input--invalid {
  color: red;
  outline: 0.5rem solid red;
}
</style>
