<template>
<div class="scoped">
    <form @submit.prevent="saveUser">
        <input type="text" v-model="newUser.name" placeholder="Nombre" required />
        <input type="email" v-model="newUser.email" placeholder="Correo Electrónico" required />
        <input type="date" v-model="newUser.birthDate" placeholder="Fecha de Nacimiento" required />
        <input type="date" v-model="newUser.createdAt" placeholder="Fecha de Creación" required />
        <input type="text" v-model="newUser.role" placeholder="Cargo" required />
        <button type="submit">Guardar Usuario</button>
    </form>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const newUser = ref({
    name: '',
    email: '',
    birthDate: '',
    createdAt: '',
    role: ''
});

const saveUser = () => {
    console.log('User saved:', newUser.value);
};
</script>

<style scoped>
</style>