<template>
    <footer class="footer bg-dark mt-20">
        <div class="container">
            <div class="py-10 grid grid-cols-12 gap-6 justify-between">
                <div class="footer__left col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-5">
                    <NuxtLink to="/">
                        <img src="https://sarafscreening.com/images/HBSLogo.webp" alt="" width="128" height="34">
                    </NuxtLink>
                    <p class="font-poppins mt-7 mb-11 text-white text-sm leading-140">Saraf Screening is an IT company
                        specializing in screening cryptocurrency projects from a Shariah perspective. Our primary function
                        is to
                        provide guidance and insights to individuals interested in investing in cryptocurrencies while
                        adhering
                        to Islamic financial principles.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img class="absolute" src="../../public/assets/images/location-icon.png" alt="" width="40"
                                height="40">
                            <div class="ms-10">
                                <p class="font-poppins text-white text-xs">location</p>
                                <a class="text-base font-bold text-white font-poppins hover:text-green transition-300 max-sm:max-w-[166px] max-sm:w-full"
                                    target="_blank" href="https://www.google.com/maps?q=25.18822,55.25836">
                                    "3905, Single Business Tower, Dubai, UAE"
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <img src="../../public/assets/images/email-icon.png" alt="" width="40" height="40">
                            <div class="">
                                <p class="font-poppins text-white text-xs">Contact us at</p>
                                <a class="text-base font-bold text-white font-poppins hover:text-green transition-300 max-sm:max-w-[166px] max-sm:w-full"
                                    target="_blank" href="mailto:info@sarafscreening.com">
                                    info@sarafscreening.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="max-md:hidden md:col-span-2 lg:col-span-3"></span>
                <div class="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 flex-between flex-col gap-y-8">
                    <div class="mb-20">
                        <h3 class="font-poppins text-2xl text-white leading-8 mb-1">Download app</h3>
                        <p class="text-white text-sm font-poppins leading-5 mb-6">Download the appropriate app for your
                            device
                        </p>
                        <div class="flex items-center">
                            <button @click="$emit('openModal')" class="me-5">
                                <img src="https://sarafscreening.com/svg/google-icon.svg" alt="">
                            </button>
                            <button @click="$emit('openModal')">
                                <img src="https://sarafscreening.com/svg/app-store.svg" alt="">
                            </button>
                        </div>
                    </div>
                    <Network></Network>
                </div>
            </div>
            <hr class="absolute w-full bg-white-200 opacity-50 left-0">
            <FooterBottom></FooterBottom>
        </div>
    </footer>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped></style>