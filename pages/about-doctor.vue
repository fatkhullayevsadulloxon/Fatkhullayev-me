<template>
    <div class="animate__animated animate__fadeIn">
        <HeaderSecondary></HeaderSecondary>
        <DoctorInfo :doctorinfo="doctorinfo" :doctorinfocheck="doctorinfocheck"></DoctorInfo>
        <div class="max-w-[782px] w-full mx-auto">
            <h3 class="text-dark leading-136 text-2xl font-semibold mb-3 font-poppins"> About Dr Farrukh Habib </h3>
            <p class="doctor-info__desc whitespace-break-spaces text-dark text-base md:text-lg leading-[140%] mb-16" v-html="doctorinfo.about"></p>
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">

import client from '../api/api';


let doctorinfo = ref({})
let doctorinfocheck = ref([])



const getDoctorInfo = async () => {
    try {
        const { data } = await client.get(`landing/ReviewerDetail/`)
        doctorinfo.value = data
        doctorinfocheck.value = data.items
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getDoctorInfo()
})

</script>
<style lang="css" scoped>
    
    .doctor-info__desc {
        font-family: 'Poppins' !important;
    }

</style>