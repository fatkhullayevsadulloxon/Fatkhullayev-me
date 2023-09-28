<script setup lang="ts">

</script>
<template>
    <div class="menu rounded-md">
        <div class="general-block p-4">
            <p class="text-white font-poppins text-xs tracking-[1px] uppercase">General</p>
            <div class="mt-2">
                <div class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/link-icon.png" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Havolani nusxalash</p>
                </div>
                <NuxtLink to="/contact"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/email-icon.png" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Emailni yuborish</p>
                </NuxtLink>
                <a target="_blank" href="https://github.com/fatkhullayevsadulloxon"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/coding-icon.png" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Kodlarni ko'rish</p>
                </a>
            </div>
            <p class="text-white font-poppins text-xs tracking-[1px] uppercase mt-2">Boshqa</p>
            <div class="mt-2">
                <a target="_blank" href="https://t.me/Fatkhullayev_me"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/telegram-icon.svg" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Telegram</p>
                </a>
                <a target="_blank" href="https://www.instagram.com/sadulloxonfatkhullayev/"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/insta-icon.svg" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Instagram</p>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/sadulloxon-fatkhullayev-074682293/"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/linkedin-icon.svg" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Linkedin</p>
                </a>
                <a target="_blank" href="https://github.com/fatkhullayevsadulloxon"
                    class="general-element flex items-center p-2 hover:bg-zinc-900 transition cursor-pointer rounded-md">
                    <img src="../public/assets/images/github-icon.svg" alt="" width="20" height="20">
                    <p class="general-element__desc font-poppins text-white ms-1">Github</p>
                </a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.menu {
    border: 2px solid rgba(255, 255, 255, 0.50);
    background: linear-gradient(107deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%);
    backdrop-filter: blur(15px);
    width: 400px !important;
}
</style>


