<template>
    <div>
        <Header></Header>
        <section class="hero mt-[120px]">
            <div class="container hero__container flex items-center justify-between">
                <div class="hero__left">
                    <h3
                        class="animate__animated animate__slideInDown bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-blue-400 font-bold text-5xl lg:text-7xl lg:max-w-[30rem] mb-5 tracking-[1.25px] !font-poppins flex items-center">
                        <img src="../public/assets/images/Microsoft-Fluentui-Emoji-3d-Waving-Hand-3d-Default.svg" alt=""
                            width="70">
                        <span>Salooom!</span>
                    </h3>
                    <h3 class="animate__animated animate__slideInRight text-white text-3xl lg:max-w-[30rem] tracking-[1.25px] !font-poppins"><span
                            class="font-bold">Fatkhullayev Sa'dulloxon</span> Frontend usta</h3>
                    <p class="text-white animate__animated animate__slideInLeft font-poppins max-w-[400px] tracking-[1px] mt-2 mb-3">Web saytlarni <span
                            class="font-bold">frontend</span> qismini ishlab chiqaman. Web sahifamni yaratishdan ko'zlangan
                        maqsad, qilgan barcha <span class="font-bold">loyihalarimni</span> bir joyga jamlash va
                        <span class="font-bold">maqolalar</span> yozib borishdan iborat!</p>
                    <GlobalButton class="animate__animated animate__slideInRight" to="/portfolio">Portfolio</GlobalButton>
                </div>
                <Card/>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'Fatkhullyav - Home',
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        { rel: "canonical", href: "https://akumarujon.uz" }
    ]
})


</script>
<style lang="css" scoped>
.gradient {
    width: 723.056px;
    height: 723.056px;
    transform: rotate(-17.376deg);
    flex-shrink: 0;
    border-radius: 723.056px;
    opacity: 0.8;
    background: linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #41B883 100%);
    filter: blur(100px);
    position: absolute;
    margin-left: -300px;
    margin-top: -300px;
}

.home {
    border-radius: 24px;
    border: 2px solid rgba(255, 255, 255, 0.50);
    background: linear-gradient(107deg, rgba(255, 255, 255, 0.05) 3.44%, rgba(255, 255, 255, 0.02) 64.82%);
    backdrop-filter: blur(15px);
    width: 90%;
    height: 90%;
    flex-shrink: 0;
    z-index: 5;
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%)
}
</style>