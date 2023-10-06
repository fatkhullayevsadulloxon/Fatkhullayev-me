<template>
    <section
        class="container bg-white-100 items-center rounded-[20px] mt-20 p-4 md:py-12 md:px-8 mb-10 flex md:flex-row flex-col gap-12 justify-center">
        <img :src="doctorinfo.image" class="w-[350px] h-[260px]" alt="">
        <div class="flex flex-col gap-5 max-w-[650px] w-full">
            <div class="doctorinfo__headings">
                <h4 class="text-green font-poppins font-bold text-2xl">{{ doctorinfo.title }}</h4>
                <h3 class="text-3xl mt-2 text-dark font-poppins font-bold">{{ doctorinfo.short_description }}</h3>
            </div>
            <ul class="flex flex-col space-y-3">
                <li v-for="infochek in doctorinfocheck" :key="infochek"
                    class="flex font-poppins items-center gap-2 text-dark font-bold text-sm">
                    <img src="https://sarafscreening.com/svg/icon-checked.svg" alt="">
                    {{ infochek.title }}
                </li>
            </ul>
            <NuxtLink to="about-doctor" class="flex">
                <Button variant="outline2" title="Learn more"></Button>
            </NuxtLink>
        </div>
    </section>
</template>
<script setup lang="ts">
import client from '../api/api';

const props = defineProps<{
    doctorinfo: Object,
    doctorinfocheck: Object,
}>()


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
<style lang="css" scoped></style>