<script setup lang="ts">
const props = defineProps<{
    to: String
}>()
</script>

<template>
    <NuxtLink :to="to"
        class="bg-green-400 contact-link text-white px-7 py-2 font-poppins font-bold transition rounded-md hover:bg-green-500 ">
        <slot></slot>
    </NuxtLink>
</template>

<style>
.contact-link:hover {
    border-radius: 100px !important;
    transition: all 0.4s;
}

.contact-link {
    /* border-radius: 100px !important; */
    transition: all 0.4s;
}
</style>

