<template>
    <div class="transition-100 animate__animated animate__fadeIn">
        <section class="main max-md:bg-center transition-100">
            <div class="green-flash absolute left-0 top-1/3"></div>
            <Header id="/"></Header>
            <Hero></Hero>
            <CoinSlide></CoinSlide>
        </section>
        <section id="functionality" class="function bg-dark py-16">
            <div class="container">
                <h3 class="text-2xl leading-136 font-bold text-white mb-6 font-poppins">Functionality</h3>
                <div class="flex items-center">
                    <FuncNav @homeIconCLick="homeIconCLick" @ExploreCLick="ExploreCLick" @listIconCLick="listIconCLick"
                        @communityCLick="communityCLick" :homeicon="clickState.homeicon"
                        :exploreicon="clickState.exploreicon" :watchlisticon="clickState.watchlisticon"
                        :communityicon="clickState.communityicon"></FuncNav>
                    <Transition name="slide-up">
                        <FuncBlock v-if="clickState.homeicon">
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/main-3.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/main-3.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/main-1.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/main-2.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/main-3.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                        </FuncBlock>
                    </Transition>
                    <Transition name="slide-up">
                        <FuncBlock v-if="clickState.exploreicon">
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/explore-1.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/explore-2.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/explore-3.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/explore-4.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812="" src="https://sarafscreening.com/images/functionality/explore-5.webp"
                                    alt="" width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                        </FuncBlock>
                    </Transition>
                    <transition name="slide-up">
                        <FuncBlock v-if="clickState.watchlisticon">
                            <div class="transition-300">
                                <img data-v-d8c62812=""
                                    src="https://sarafscreening.com/images/functionality/watchlist-5.webp" alt=""
                                    width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812=""
                                    src="https://sarafscreening.com/images/functionality/watchlist-2.webp" alt=""
                                    width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812=""
                                    src="https://sarafscreening.com/images/functionality/watchlist-3.webp" alt=""
                                    width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812=""
                                    src="https://sarafscreening.com/images/functionality/watchlist-4.webp" alt=""
                                    width="163" height="336" class="w-[163px] translate-y-[-20%]">
                            </div>
                            <div class="transition-300">
                                <img data-v-d8c62812=""
                                    src="https://sarafscreening.com/images/functionality/watchlist-1.webp" alt=""
                                    width="163" height="336" class="w-[163px] translate-y-[20%]">
                            </div>
                        </FuncBlock>
                    </transition>
                    <transition name="slide-up">
                        <FuncBlock v-if="clickState.communityicon">
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
                    </transition>
                </div>

            </div>
        </section>
        <section id="getAccess"
            class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
            <div class="flex items-center justify-center">
                <GetAccessImg></GetAccessImg>
                <GetAccess check3="Convenient, one-tap access to information on all popular crypto projects."
                    check2="Fast and free access to project statuses."
                    check1="Regular screening of leading crypto projects every six months"
                    desc="Saraf Screening empowers you to make informed investment decisions, aligning your choices with Shariah principles when considering crypto projects."
                    title="Check out the Shariah experts' quick take on the top crypto projects."></GetAccess>
            </div>
        </section>
        <section id="getAccess"
            class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
            <div class="flex items-center justify-center">
                <GetAccess desc="" check3="See the historycal data of all time" check2="Overview of all crypto projects"
                    check1="All breaking news about crypto world" title="Access fundamental news and informations to aid your investment decisions and select the most promising crypto project.
"></GetAccess>
                <GetAccessImg></GetAccessImg>
            </div>
        </section>
        <section id="getAccess"
            class="container mt-6 md:mt-[88px] mx-auto !bg-white-100 h-auto md:h-[387px] rounded-[20px]">
            <div class="flex items-center justify-center">
                <GetAccessImg></GetAccessImg>
                <GetAccess check3="Instant notifications for any changes in your investment portfolio."
                    check2="Instant notifications for any changes in your investment portfolio."
                    check1="Instant notifications for any changes in your investment portfolio." desc=""
                    title="An All-in-One, Free App: Your Ultimate Guide for Shariah Compliance and Fundamental Analysis in Cryptocurrency Investments">
                </GetAccess>
            </div>
        </section>
        <section class="bg-dark pt-6 pb-4 md:py-11 mt-6 md:mt-16 relative" id="how-app-works">
            <div class="absolute left-0 bottom-0 bg-green blur w-[148px] h-[148px]"></div>
            <div class="container mx-auto md:flex-row flex-col flex justify-between">
                <AppWork></AppWork>
            </div>
        </section>
        <section
            class="container bg-white-100 items-center rounded-[20px] mt-20 p-4 md:py-12 md:px-8 mb-10 flex md:flex-row flex-col gap-12 justify-center">
            <img src="https://hbs-dev.uicgroup.tech/media/reviewer/Group_1.webp" class="w-[350px] h-[260px]" alt="">
            <DoctorInfo></DoctorInfo>
        </section>
        <a href="#/" class="cursor-pointer p-3 bottom-10 z-10 right-20 fixed rounded-full bg-green">
            <img width="30" src="../public/assets/images/up-icon.png" alt="">
        </a>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'Saraf Screening',
    htmlAttrs: {
        lang: 'en',
    },
})

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


</script>
<style lang="css" scoped>
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
</style>