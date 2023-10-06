<template>
    <div class="flex items-center gap-3">
        <a href="https://www.facebook.com/sarafscreening/" class="hover:bg-green rounded-full p-2 transition">
            <img src="../public/assets/images/facebook-icon.svg" alt="" width="20" height="20">
        </a>
        <a href="https://twitter.com/sarafscreening" class="hover:bg-green rounded-full p-2 transition">
            <img src="../public/assets/images/twitter-icon.svg" alt="" width="20" height="20">
        </a>
        <a href="https://www.youtube.com/channel/UC01vVZLtkiDaUr5LDPnRWsw" class="hover:bg-green rounded-full p-2 transition">
            <img src="../public/assets/images/youtube-icon.svg" alt="" width="20" height="20">
        </a>
        <a href="https://www.instagram.com/sarafscreening/" class="hover:bg-green rounded-full p-2 transition">
            <img src="../public/assets/images/instagram-icon.svg" alt="" width="20" height="20">
        </a>
        <a href="https://t.me/hbs_akademiya" class="hover:bg-green rounded-full p-1 transition">
            <img src="../public/assets/images/telegram.svg" alt="" width="30" height="30">
        </a>
    </div>
</template>
<script setup lang="ts">

const custompropsnetwork = defineProps<{
    img: String,
    href: String
}>()

</script>
<style lang="css" scoped>
a {
    background-color: rgba(243, 244, 246, .1);
}
</style>