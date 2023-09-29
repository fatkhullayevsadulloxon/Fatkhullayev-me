<script setup lang="ts">
const props = defineProps < {
    careertitle: String,
    careerdate: String,
    careername: String,
    careerlocation: String,
    careerlink: String,
} > ()
</script>

<template>
    <div class="career mt-4 border-l-4 border-white-800 pl-4">
        <h4 class="text-md text-white font-poppins font-bold">{{ careertitle }}</h4>
        <div class="flex items-center text-white font-poppins mt-1">
            <a class="text-white border-b border-white hover:opacity-50 active:opacity-30 transition" target="_blank" :href="careerlink">{{careername}}</a>
            <span class="ms-1 me-1">•</span>
            <p class="text-white"> {{ careerlocation }}</p>
        </div>
        <p class="text-white font-poppins mt-1">{{ careerdate }}</p>
    </div>
</template>


<style scoped>

</style>
