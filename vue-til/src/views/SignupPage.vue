<template>
  <div>
    <h1>회원가입</h1>
    <p>회원가입 페이지입니다.</p>
    <p>회원가입을 하시면, 로그인 후에 사용하실 수 있습니다.</p>

    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
export default {
  components: {
    SignupForm,
  },
};
</script>

<style></style>
