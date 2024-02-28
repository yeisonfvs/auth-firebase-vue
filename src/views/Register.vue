<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
// import { useRouter } from 'vue-router';

const userStore = useUserStore();
// const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert('llena los campos');
  }
   await userStore.registerUser(email.value, password.value);
  // router.push('/')
};
</script>

<template>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Ingrese email" v-model.trim="email" />
    <input
      type="password"
      placeholder="Ingrese contraseña"
      v-model.trim="password"
    />
    <button :disabled="userStore.loadingUser" type="submit">Crear usuario</button>
  </form>
</template>

<style></style>
