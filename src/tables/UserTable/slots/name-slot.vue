<!-- eslint-disable vue/valid-attribute-name -->
<template>
    <div>
        <div class="slot_name">{{ record.name }}</div>
        <div class="slot_email">{{ record.email }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    record: {
        name: string;
        email: string;
    };
}>();

</script>



<style scoped>
.slot_name {
    color: #25213B
}

.slot_email {
    color: #6E6893
}
</style>