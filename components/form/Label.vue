<template>
    <label class="text-sm leading-130 font-medium text-dark font-poppins">
        {{ title }}
        <slot></slot>
    </label>
</template>
<script setup lang="ts">
const labelprops = defineProps < {
    title: String,
} > ()

</script>
<style lang="css" scoped>
    
</style>