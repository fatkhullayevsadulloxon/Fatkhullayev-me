<script setup lang="ts">
</script>

<template>
    <div class="aboutcard">
        <div class="p-3">
            <slot></slot>
        </div>
    </div>
</template>


<style scoped>
.aboutcard {
    border: 2px solid rgba(255, 255, 255, 0.50);
    background: linear-gradient(107deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%);
    backdrop-filter: blur(15px);
    width: 300px !important;
}
</style>
