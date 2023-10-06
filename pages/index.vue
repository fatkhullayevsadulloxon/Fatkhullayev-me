<template>
    <div>
        <!-- <input @keyup.page-down="onPageDown" /> -->
        <transition>
            <div :class="openModalState ? '!visible' : ''"
                class="items-center p-3 fixed w-full h-full bg-[#17181A]/60 flex justify-center z-[100] top-0 left-0 invisible"
                >
                <Modal @onCloseModal="onCloseModal"></Modal>
            </div>
        </transition>
        <div class="transition-100 animate__animated animate__fadeIn">
            <section class="main max-md:bg-center transition-100 z-10">
                <div class="green-flash absolute left-0 top-1/3"></div>
                <Header @openModal="openModal" id="/"></Header>
                <Hero @openModal="openModal"></Hero>
                <CoinSlide @openModal="openModal"></CoinSlide>
            </section>
            <section id="functionality" class="function bg-dark py-16">
                <div class="container">
                    <h3 class="text-2xl leading-136 font-bold text-white mb-6 font-poppins">Functionality</h3>
                    <div class="flex items-center">
                        <FuncNav @homeIconCLick="homeIconCLick" @ExploreCLick="ExploreCLick" @listIconCLick="listIconCLick"
                            @communityCLick="communityCLick" :homeicon="clickState.homeicon"
                            :exploreicon="clickState.exploreicon" :watchlisticon="clickState.watchlisticon"
                            :communityicon="clickState.communityicon"></FuncNav>
                        <Transition mode="out-in" name="slide-up">
                            <FuncBlock v-if="clickState.homeicon">
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-1.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-2.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                            </FuncBlock>
                            <FuncBlock v-else-if="clickState.exploreicon">
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-1.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-2.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/main-3.webp" alt="" width="163"
                                        height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                            </FuncBlock>
                            <FuncBlock v-else-if="clickState.watchlisticon">
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/explore-1.webp" alt=""
                                        width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/explore-2.webp" alt=""
                                        width="163" height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/explore-3.webp" alt=""
                                        width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/explore-4.webp" alt=""
                                        width="163" height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812=""
                                        src="https://sarafscreening.com/images/functionality/explore-5.webp" alt=""
                                        width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                            </FuncBlock>
                            <FuncBlock v-else-if="clickState.communityicon">
                                <div class="transition-300">
                                    <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/com-1.webp"
                                        alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/com-2.webp"
                                        alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/com-3.webp"
                                        alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/com-4.webp"
                                        alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                                </div>
                                <div class="transition-300">
                                    <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/com-5.webp"
                                        alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                                </div>
                            </FuncBlock>
                        </Transition>
                    </div>

                </div>
            </section>
            <section id="getAccess"
                class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
                <div class="flex items-center justify-center">
                    <GetAccessImg></GetAccessImg>
                    <GetAccess @openModal="openModal" check3="Convenient, one-tap access to information on all popular crypto projects."
                        check2="Fast and free access to project statuses."
                        check1="Regular screening of leading crypto projects every six months"
                        desc="Saraf Screening empowers you to make informed investment decisions, aligning your choices with Shariah principles when considering crypto projects."
                        title="Check out the Shariah experts' quick take on the top crypto projects."></GetAccess>
                </div>
            </section>
            <section id="getAccess"
                class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
                <div class="flex items-center justify-center">
                    <GetAccess @openModal="openModal" desc="" check3="See the historycal data of all time" check2="Overview of all crypto projects"
                        check1="All breaking news about crypto world" title="Access fundamental news and informations to aid your investment decisions and select the most promising crypto project.
"></GetAccess>
                    <GetAccessImg></GetAccessImg>
                </div>
            </section>
            <section id="getAccess"
                class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
                <div class="flex items-center justify-center">
                    <GetAccessImg></GetAccessImg>
                    <GetAccess @openModal="openModal" check3="Instant notifications for any changes in your investment portfolio."
                        check2="Instant notifications for any changes in your investment portfolio."
                        check1="Instant notifications for any changes in your investment portfolio." desc=""
                        title="An All-in-One, Free App: Your Ultimate Guide for Shariah Compliance and Fundamental Analysis in Cryptocurrency Investments">
                    </GetAccess>
                </div>
            </section>
            <section class="bg-dark pt-6 pb-4 md:py-11 mt-20 relative app-work" id="how-app-works">
                <div class="absolute left-0 bottom-0 bg-green blur w-[148px] h-[148px]"></div>
                <div class="container mx-auto md:flex-row flex-col flex justify-between">
                    <AppWork></AppWork>
                    <div class="relative">
                        <button class="play-btn flex items-center justify-center z-50">

                        </button>
                        <img src="https://sarafscreening.com/_ipx/f_webp&s_482x267/images/video.png" class="rounded-md"
                            alt="">
                        <div class="absolute top-0 left-0 w-full h-full box-shadow"></div>
                    </div>
                </div>
            </section>
            <DoctorInfo></DoctorInfo>
            <section id="why-saraf"
                class="saraf-bg bg-[#F0F0F5] mb-10 relative container h-auto md:h-[314px] w-full rounded-[20px] mt-[220px]">
                <img class="absolute -right-0 lg:-right-0 xl:-right-10 max-sm:bottom-0 md:block"
                    src="https://sarafscreening.com/images/bitcoing-blur.png" alt="">
                <div class="lg:pl-[100px] pt-12 flex flex-col justify-between h-full pb-[52px]">
                    <img class="-left-20 absolute bottom-10" src="https://sarafscreening.com/images/bit.png" alt="">
                    <div>
                        <h3 class="text-dark font-bold font-poppins text-3xl">Download the app now for FREE!</h3>
                        <p class="text-white-200 font-poppins text-sm md:text-base mt-2">Saraf Screening: Your Trusted Guide
                            in
                            the Crypto World for Informed Decisions</p>
                        <br>
                    </div>
                    <div class="flex items-center">
                        <button @click="openModal" class="me-5">
                            <img src="https://sarafscreening.com/svg/app-store.svg" alt="">
                        </button>
                        <button @click="openModal">
                            <img src="https://sarafscreening.com/svg/google-icon.svg" alt="">
                        </button>
                    </div>
                    <img class="h-[485px] max-lg:w-[250px] max-lg:h-[250px] hidden md:block absolute bottom-0 right-0"
                        src="https://sarafscreening.com/images/why-saraf-phone.webp" alt="">
                </div>
            </section>
            <Footer @openModal="openModal"></Footer>
            <a href="#/" class="cursor-pointer p-3 bottom-10 z-10 right-20 fixed rounded-full bg-green">
                <img width="30" src="../public/assets/images/up-icon.png" alt="">
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import FuncBlock from '~/components/Functionally/FuncBlock.vue';
import FuncNav from '~/components/Functionally/FuncNav.vue';

useHead({
    title: 'Saraf Screening',
    htmlAttrs: {
        lang: 'en',
    },
})

const openModalState = ref(false)

const openModal = () => {
    openModalState.value = true
}
const onCloseModal = () => {
    openModalState.value = false
}

const clickState = reactive({
    homeicon: true,
    exploreicon: false,
    watchlisticon: false,
    communityicon: false,
})
const homeIconCLick = () => {
    clickState.homeicon = true,
        clickState.exploreicon = false,
        clickState.watchlisticon = false,
        clickState.communityicon = false

}
const ExploreCLick = () => {
    clickState.homeicon = false,
        clickState.exploreicon = true,
        clickState.watchlisticon = false,
        clickState.communityicon = false
}
const listIconCLick = () => {
    clickState.homeicon = false,
        clickState.exploreicon = false,
        clickState.watchlisticon = true,
        clickState.communityicon = false
}
const communityCLick = () => {
    clickState.homeicon = false,
        clickState.exploreicon = false,
        clickState.watchlisticon = false,
        clickState.communityicon = true
}

const handleKeyUp = (event) => {
    if (event.key === "Escape") {
        openModalState.value = false
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyUp);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyUp);
});



</script>
<style lang="css">
.main {
    background-image: url('https://sarafscreening.com/images/main-bg-phone.webp');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}

.green-flash {
    background: #0fd647;
    filter: blur(162.09523010253906px);
    height: 148px;
    width: 148px;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

#getAccess {
    background-image: url(https://sarafscreening.com/images/phone-bg.png);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    /* --tw-bg-opacity: 1; */
    /* background-color: rgb(246 247 249/var(--tw-bg-opacity)); */
}

.blur {
    filter: blur(162.09523010253906px);
}

.app-work {
    -webkit-backdrop-filter: blur(42px);
    backdrop-filter: blur(42px);
    background-image: url('https://sarafscreening.com/svg/works-app.png');
    background-position: 80%;
    background-repeat: no-repeat;
    background-size: contain;
}

.play-btn {
    background: transparent;
    border: 1px solid #0fd647;
    border-radius: 50%;
    display: block;
    height: 64px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
}

.play-btn::before {
    animation: pulsate1-394ef6b3 2s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: steps;
    background: rgba(198, 16, 0, 0);
    border: 2px solid #0fd647;
    border-radius: 50%;
    content: "";
    height: 150%;
    left: -25%;
    opacity: 1;
    position: absolute;
    top: -25%;
    width: 150%;
}


.play-btn::after {
    border-bottom: 15px solid transparent;
    border-left: 25px solid #fff;
    border-top: 15px solid transparent;
    content: "";
    height: 0;
    left: 55%;
    position: absolute;
    top: 50%;
    transform: translate(-50%) translateY(-50%);
    transform-origin: center center;
    transition: all .4s cubic-bezier(.55, .055, .675, .19);
    width: 0;
    z-index: 100;
}

.box-shadow {
    background: rgba(8, 10, 21, .4);
}

.saraf-bg {
    background-image: url('https://sarafscreening.com/images/why-saraf-vector.png');
    background-repeat: no-repeat
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>