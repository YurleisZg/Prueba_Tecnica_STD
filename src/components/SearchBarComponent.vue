<template>
<div class="search-bar">
        <input id="search" v-model="search" placeholder="Buscar por nombre" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const search = ref('');

</script>

<style scoped>
</style>