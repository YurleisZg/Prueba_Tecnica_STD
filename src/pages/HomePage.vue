<template>
    <div class="scoped">
        <h1 class="title">Bienvenido</h1>
        <p class="description">Aquí puedes ver la lista de usuarios y agregar nuevos.</p>
        <TableComponent />
        <div class="button-container">
           <button @click="gotoNewUser">Agregar Nuevo Usuario</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TableComponent from '../components/TableComponent.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const gotoNewUser = () => {
    router.push({name: 'NewUser'});
};

</script>

<style scoped>
.scoped {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 800px;
    margin: auto;
}
.title {
    font-size: 2em;
    color: #333;
    text-align: center;
}
.description {
    font-size: 1.2em;
    color: #666;
    text-align: center;
}

.button-container {
    text-align: center;
    margin-top: 20px;
}
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>