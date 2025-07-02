<script setup lang="ts">
import {RouterView} from 'vue-router';
</script>

<template>
  <RouterView />
  <footer class="footer">
    <p>Author: Yurleis Zuluaga, 2025</p>
</footer>
</template>

<style scoped>
.footer {
    margin-top: 20px;
    text-align: center;
    font-size: 0.8em;
    color: #999;
}
</style>
