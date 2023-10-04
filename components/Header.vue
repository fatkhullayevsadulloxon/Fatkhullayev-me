<template>
    <header class="header py-6">
        <div class="container header__container flex items-center justify-between">
            <NuxtLink to="/">
                <img src="https://sarafscreening.com/images/HBSLogo.webp" alt="" width="128" height="34">
            </NuxtLink>
            <nav class="header__nav flex items-center">
                <ul class="flex items-center me-20">
                    <li class="ms-5">
                        <a class="text-white font-poppins text-sm hover:text-green transition" href="#functionality">
                            Functionality
                        </a>
                    </li>
                    <li class="ms-5">
                        <a class="text-white font-poppins text-sm hover:text-green transition" href="#how-app-works">
                            How app works
                        </a>
                    </li>
                    <li class="ms-5">
                        <a class="text-white font-poppins text-sm hover:text-green transition" href="#why-saraf">
                            Why Saraf
                        </a>
                    </li>
                    <li class="ms-5">
                        <a class="text-white font-poppins text-sm hover:text-green transition" href="#faq">
                            F.A.Q.
                        </a>
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
    background-color: #d9d9d908 !important;
}
</style>