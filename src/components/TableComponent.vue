<template>
    <div class="scoped">
        <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th @click="sortBy('birthDate')">Fecha de Nacimiento <button>Ordenar</button> </th>
                <th @click="sortBy('createdAt')">Fecha de Creación <button>Ordenar</button> </th>
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

        <button>Agregar Nuevo Usuario</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import type { User } from '../models/user';
import { getUsers } from '../services/userService';

const users = ref<User[]>([]);
const sortField = ref<string>('');
const ascending = ref<boolean>(true);
const search = ref('');

const sortBy = (field: string) => {
    if (sortField.value === field) {
        ascending.value = !ascending.value;
    } else {
        sortField.value = field;
        ascending.value = true;
    }

    users.value.sort((a, b) => {
        const aValue = a[field as keyof User];
        const bValue = b[field as keyof User];

        return ascending.value
            ? aValue > bValue ? 1 : -1
            : aValue < bValue ? 1 : -1;
    });
};

const allUsers = getUsers();

watch(search, val => {
    users.value = allUsers.filter(user => 
        user.name.toLowerCase().includes(val.toLowerCase()) 
    );
})

onMounted(() =>{
    users.value = getUsers();
})

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
.search-bar {
    margin-bottom: 20px;
}
.search-bar input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;   
    box-sizing: border-box;
}
</style>