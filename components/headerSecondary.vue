<template>
    <header class="py-6 header w-full left-0 top-0 h-[92px] z-20">
        <div class="container header__container flex items-center justify-between  relative z-10 mx-auto">
            <NuxtLink to="/">
                <img src="https://sarafscreening.com/images/DARKLOGO.png" alt="" width="128" height="34">
            </NuxtLink>
            <nav class="header__nav flex items-center">
                <ul class="flex items-center me-20">
                    <li class="ms-5">
                        <NuxtLink class="text-dark font-poppins text-sm hover:text-green transition" to="/#functionality">
                            Functionality
                        </NuxtLink>
                    </li>
                    <li class="ms-5">
                        <NuxtLink class="text-dark font-poppins text-sm hover:text-green transition" href="/#how-app-works">
                            How app works
                        </NuxtLink>
                    </li>
                    <li class="ms-5">
                        <NuxtLink class="text-dark font-poppins text-sm hover:text-green transition" href="/#why-saraf">
                            Why Saraf
                        </NuxtLink>
                    </li>
                    <li class="ms-5">
                        <NuxtLink class="text-dark font-poppins text-sm hover:text-green transition" href="/#faq">
                            F.A.Q.
                        </NuxtLink>
                    </li>
                </ul>
                <div class="flex items-center">
                    <button class="me-5">
                        <img src="https://sarafscreening.com/svg/app-store.svg" alt="">
                    </button>
                    <button>
                        <img src="https://sarafscreening.com/svg/google-icon.svg" alt="">
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped>
.header {
    backdrop-filter: blur(14px) !important;
     background-color: #f6f7f9 !important;
}
</style>