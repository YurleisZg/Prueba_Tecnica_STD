<template>
    <div class="scoped">
        <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th>Fecha de Nacimiento</th>
                <th>Fecha de Creación</th>
                <th>Cargo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.birthDate }}</td>
                <td>{{ user.createdAt }}</td>
                <td>{{ user.role }}</td>
            </tr>
        </tbody>
    </table>
        <p v-if="users.length === 0">No hay usuarios disponibles.</p>
        <p v-else>Total de usuarios: {{ users.length }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../models/user';

const users = ref<User[]>([]);

</script>

<style >  
.scoped {
    padding: 80px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
}   

table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
tr:hover {
    background-color: #f1f1f1;
} 
</style>