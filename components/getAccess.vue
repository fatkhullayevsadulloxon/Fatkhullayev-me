<template>
    <div class="max-w-[700px] ms-14">
        <h3 class="text-dark text-base md:text-3xl font-bold leading-136 font-poppins">{{ title }}</h3>
        <p class="font-poppins text-white-200 mt-5">{{ desc }}</p>
        <ul class="flex flex-col mt-5 space-y-3">
            <li class="flex font-poppins items-center gap-2 text-dark font-bold text-sm">
                <img src="https://sarafscreening.com/svg/icon-checked.svg" alt="">
                {{ check1 }}
            </li>   
            <li class="flex font-poppins items-center gap-2 text-dark font-bold text-sm">
                <img src="https://sarafscreening.com/svg/icon-checked.svg" alt="">
                {{check2}}

            </li>
            <li class="flex font-poppins items-center gap-2 text-dark font-bold text-sm">
                <img src="https://sarafscreening.com/svg/icon-checked.svg" alt="">
                {{ check3 }}
            </li>
        </ul>
        <div class="flex mt-3">
            <Button variant="secondary" title="Get acces now"></Button>
        </div>
    </div>
</template>
<script setup lang="ts">

const props = defineProps < {
    title: String,
    desc: String,
    check1: String,
    check2: String,
    check3: String,
} > ()

</script>
<style lang="css" scoped></style>