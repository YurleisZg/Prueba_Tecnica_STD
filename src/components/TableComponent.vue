<template>
    <div class="scoped">
        <SearchBarComponent v-model="search"/>
        <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th @click="sortBy('birthDate')">Fecha de Nacimiento </th>
                <th @click="sortBy('createdAt')">Fecha de Creación </th>
                <th @click="sortBy('role')">Cargo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.birthDate }}</td>
                <td>{{ user.createdAt }}</td>
                <td>{{ user.role }}</td>
            </tr>
        </tbody>
    </table>
        <div class="table-footer">
            <p v-if="users.length === 0">No hay usuarios disponibles.</p>
            <p v-else>Total: {{ users.length }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import type { User } from '../models/user';
import { getUsers } from '../services/userService';
import SearchBarComponent from './SearchBarComponent.vue';

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

onMounted(() =>{
    users.value = getUsers();
})

const filteredUsers = computed(() => {
    return users.value.filter(user => 
        user.name.toLowerCase().includes(search.value.toLowerCase()) 
    );
});

</script>

<style >  
.scoped {
    padding: 80px;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
}   

table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #d6cbcb;
    padding: 10px;
}
th {
    background-color: #e7eaec;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
tr:hover {
    background-color: #f1f1f1;
} 
.table-footer {
    margin-top: 20px;
    text-align: left;
    font-size: 0.9em;
    color: #424040;
}
.button {
    background-color: #d2d3d4d2;
    color: rgb(4, 4, 5);
    border-color: #afb0b0d2;
    padding: 3px 6px;
    padding-top: 2px;
    border-radius: 5px;

    cursor: pointer;
}
.button:hover {
    background-color: #8fabc9;
}
.button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(53, 77, 103, 0.5);
}

</style>