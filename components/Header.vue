<script setup lang="ts">

</script>


<template>
    <header class="p-3">
        <div class="container header__container flex items-center justify-between">
            <NuxtLink to="/">
                <h3 class="uppercase text-white font-poppins font-bold text-xl">Fatkhullayev</h3>
            </NuxtLink>

            <ul class="flex">
                <li class="ms-10">
                    <NuxtLink class="text-white font-normal	font-poppins hover:text-green-400 transition hover:border-green-400" to="/">
                        Home
                    </NuxtLink>
                </li>
                <li class="ms-10">
                    <NuxtLink class="text-white font-normal	font-poppins hover:text-green-400 transition hover:border-green-400" to="/about">
                        About
                    </NuxtLink>
                </li>
                <li class="ms-10">
                    <NuxtLink class="text-white font-normal	font-poppins hover:text-green-400 transition hover:border-green-400" to="/portfolio">
                        Portfolio
                    </NuxtLink>
                </li>
            </ul>
            <GlobalButton to="/contact">Bog'lanish</GlobalButton>
        </div>
    </header>
</template>

<style scoped>
</style>
