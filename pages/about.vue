<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
const { text, copy, copied, isSupported } = useClipboard({})

useHead({
    title: 'Fatkhullayev - About'
})

</script>

<template>
    <div>
        <Header />
        <section class="about mt-14 animate__animated animate__fadeIn">
            <div class="container">
                <h1
                    class="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-blue-400 font-bold text-5xl lg:max-w-[30rem] mb-5 tracking-[1.25px] font-poppins">
                    About me</h1>
                <h3 class="font-poppins text-xl tracking-[1.25px] text-white">Bio</h3>
                <blockquote class="about__bio">
                    <div class="about__desc mt-5">
                        <p
                            class="border-l-4 pl-4 text-md text-white leading-8 font-poppins max-w-[700px] border-white-800 tracking-[0.5px]">
                            Fatkhullayev Sa'dulloxon o'zbek dasturchisi. Farg'ona viloyatidanman yoshim 17 da. Dasturlashni
                            2021-yil javascript dasturlash tilini o'rganishdan boshlaganman. Hozirda frontend dasturchi
                            sifatida faoliyat yuritaman. <span class="not-italic font-bold uppercase">Najot ta'lim</span>
                            hamda <span class="not-italic font-bold uppercase">it park</span> o'quv markazlarini bitirganman
                            va shu paytgacha jamoamiz bilan bir necha loyihalarni ishga tushirishga ham ulgurganmiz.</p>
                        <button
                            @click="copy(' Fatkhullayev Sa\'dulloxon o\'zbek dasturchisi. Farg\'ona viloyatidanman yoshim 17 da.Dasturlashni 2021 - yil javascript dasturlash tilini o\'rganishdan boshlaganman. Hozirda frontend dasturchi sifatida faoliyat yuritaman.Najot ta\'lim hamda it park o\'quv markazlarini bitirganman va shu paytgacha jamoamiz bilan bir necha loyihalarni ishga tushirishga ham ulgurganmiz.')"
                            class="flex items-center mt-4 hover:bg-[#121212] p-2 rounded-md transition">
                            <img src="../public/assets/images/copy-icon.png" alt="" width="20" height="20">
                            <p v-if="!copied" class="text-white font-poppins ms-1">Nusxalash</p>
                            <p v-if="copied" class="text-white font-poppins ms-1">Nusxalandi</p>
                        </button>
                    </div>
                </blockquote>
                <h3 class="font-poppins text-xl tracking-[1.25px] text-white mt-5">Career</h3>
                <div class="flex items-center justify-between">
                    <Career careertitle="Frontend Mentor" careerdate="oct 2022 – Aug 2022" careername="It-center" careerlocation="Fergana, besharik" careerlink="https://t.me/ITCenterBeshariq"/>
                    <Career careertitle="Assisent mentor" careerdate="sept 2023 – continues" careername="UIC Academy" careerlocation="Tashkent, Mirzo ulug'bek" careerlink="https://uic.academy/"/>
                    <Career careertitle="Fronend Vuejs" careerdate="sept 2023 – continues" careername="UIC group" careerlocation="Tashkent, Mirzo ulug'bek" careerlink="https://uic.group/"/>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="css" scoped></style>