<template>
<div class="search-bar">
        <input id="search" :placeholder="placeholder" v-model="internalValue" @input="updateSearch" />
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '🔍 Buscar por nombre'
  }
});

const emit = defineEmits(['update:modelValue']);
const internalValue = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  internalValue.value = val;
});

const updateSearch = () => {
  emit('update:modelValue', internalValue.value);
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}
.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;   
  box-sizing: border-box;
  font-size: 16px;
}

@media (max-width: 768px) {
  .search-bar input {
    padding: 12px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .search-bar {
    margin-bottom: 15px;
  }
  .search-bar input {
    padding: 14px;
    font-size: 16px;
  }
}

</style>