<template>
<div class="scoped">
    <form @submit.prevent="saveNewUser">
        <input type="number" v-model="newUser.id" placeholder="Identificación" required />
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
import type { User } from '../models/user';
import { saveUser } from '../services/userService';

const newUser = ref<User>({
    id: 0,
    name: '',
    email: '',
    birthDate: '',
    createdAt: '',
    role: ''
});


const saveNewUser = () => {
    saveUser(newUser.value);
    alert('Usuario guardado exitosamente');
    location.reload();
};
</script>

<style scoped>
.scoped {
    margin: 20px;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    padding: 10px;
    background-color: #104ac8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>