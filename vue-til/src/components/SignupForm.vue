<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="usename">id:</label>
      <input type="text" id="usename" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname:</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from "@/api/index";
export default {
  data() {
    return {
      // form value
      username: "",
      password: "",
      nickname: "",
      //log
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      console.log("폼 제출");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };

      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `회원가입 성공! ${data.username}님 환영합니다.`;
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style></style>
