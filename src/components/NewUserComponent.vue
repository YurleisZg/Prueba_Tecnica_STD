<template>
<div class="scoped">
    <button @click="$router.push('/')" class="back-button">Regresar</button>
    <h1 class="title">Agregar Nuevo Usuario</h1>
    <p class="description">Por favor, complete el siguiente formulario para agregar un nuevo usuario.</p>

    <form @submit.prevent="saveNewUser">
        <label for="id">Identificación</label>
        <input type="number" v-model="newUser.id" placeholder="Identificación" required/>
        <label for="name">Nombre</label>
        <input type="text" v-model="newUser.name" placeholder="Nombre" required />
        <label for="email">Correo Electrónico</label>
        <input type="email" v-model="newUser.email" placeholder="Correo Electrónico" required />
        <label for="birthDate">Fecha de Nacimiento</label>
        <input type="date" v-model="newUser.birthDate" placeholder="Fecha de Nacimiento" required />
        <label for="createdAt">Fecha de Creación</label>
        <input type="date" v-model="newUser.createdAt" placeholder="Fecha de Creación" required />
        <label for="role">Cargo</label>
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
    margin-bottom: 6px;
}
button {
    padding: 10px;
    background-color: #104ac8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}
.description {
    text-align: center;
    margin-bottom: 20px;
}
.back-button {
    background-color: #dadde3;
    color: #0c0c0c;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
}
</style>