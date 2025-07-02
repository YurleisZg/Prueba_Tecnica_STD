<template>
    <div class="scoped">
        <h1 class="title">¡Bienvenido!</h1>
        <p class="description">Aquí puedes ver la lista de usuarios y agregar nuevos.</p>
        <TableComponent />
        <div class="button-container">
           <button @click="gotoNewUser"> + Agregar Nuevo Usuario</button>
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
    background-color: #ffffff;
    border-radius: 8px;
    max-width: 1100px;
    margin: auto;
}
.title {
    font-size: 2em;
    color: #104ac8;
    text-align: center;
}
.description {
    font-size: 1.2em;
    color: #666;
    text-align: center;
}

.button-container {
    text-align: right;
    padding-right: 20px;
}
button {
    padding: 12px 20px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #104ac8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
}
</style>