<template>
    <div class="scoped">
        <SearchBarComponent v-model="search"/>

        <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th>Fecha de Nacimiento <button class="button" @click.stop="sortBy('birthDate')">Ordenar</button></th>
                <th>Fecha de Creación <button class="button" @click.stop="sortBy('createdAt')">Ordenar</button></th>
                <th>Cargo <button class="button" @click.stop="sortBy('role')">Ordenar</button></th>
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
        <tfoot>
            <tr>
                <td colspan="6" class="table-footer">Total Usuarios: {{ filteredUsers.length }}</td>
            </tr>
            <tr>
                <td v-if="sortField" colspan="6" class="table-footer">Ordenado por: {{ fieldDisplayName(sortField) }} ({{ ascending ? 'Mayor a menor' : 'Menor a mayor' }})
                <button class="button-clear" @click="clearSort" v-if="sortField">Eliminar Filtro</button>
                </td>
            </tr>
        </tfoot>
    </table>
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

const fieldDisplayName = (field: string) => {
    switch (field) {
        case 'birthDate':
            return 'Fecha de Nacimiento';
        case 'createdAt':
            return 'Fecha de Creación';
        case 'role':
            return 'Cargo';
        default:
            return field.charAt(0).toUpperCase() + field.slice(1);
    }
};

const clearSort = () => {
    sortField.value = '';
    ascending.value = true;
    users.value = getUsers(); 
};
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
      text-align: center;
}
th, td {
    border: 1px solid #d6cbcb;
    padding: 12px;
    font-size: 1em;
}
th {
    background-color: #f1f3f6;
    padding: 10px;
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
    color: #1a1919;
}
.button {
    background-color: #f2f2f2d2;
    border-color: #f6f5f5d2;
    padding: 5px 10px;
    padding-top: 2px;
    border-radius: 5px;
    cursor: pointer;
}
.button:hover {
    background-color: #f1f3f6;
}

.button-clear {
    background-color: #f2f2f2d2;
    font-family: Arial, Helvetica, sans-serif;
    border-color: #f6f5f5d2;
    color: #ae2519;
    font-size: 1em;
    padding: 5px 12px;
    padding-top: 6px;
    border-radius: 6px;
    cursor: pointer;
    float: right;
}

@media (max-width: 768px) {
    .scoped {
        padding: 20px;
    }
    
    table {
        font-size: 0.9em;
    }
    
    th, td {
        padding: 8px 4px;
        font-size: 0.8em;
    }
    
    .button {
        padding: 3px 6px;
        font-size: 0.8em;
    }
    
    .button-clear {
        padding: 3px 8px;
        font-size: 0.8em;
    }
}

@media (max-width: 480px) {
    .scoped {
        padding: 10px;
    }
    
    table {
        font-size: 0.8em;
    }
    
    th, td {
        padding: 6px 2px;
        font-size: 0.7em;
    }
    
    .button {
        padding: 2px 4px;
        font-size: 0.7em;
    }
    
    .button-clear {
        padding: 2px 6px;
        font-size: 0.7em;
    }
    
    .table-footer {
        font-size: 0.8em;
    }
}

</style>