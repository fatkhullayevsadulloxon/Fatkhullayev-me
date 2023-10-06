<template>
    <ul class="flex gap-4 flex-col max-w-[181px] w-full relative" data-v-d8c62812="">
        <li @click="$emit('homeIconCLick')" :class="homeicon ? 'bg-secondary' : ''"
            class="p-3 font-poppins text-white rounded-xl cursor-pointer h-12 flex items-center overflow-hidden transition"
            data-v-d8c62812=""><span class="flex items-center" data-v-d8c62812=""><svg class="me-2" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d8c62812="">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.7816 3.05361C11.6759 2.98213 11.5241 2.98213 11.4184 3.05361L3.0984 8.68013C3.02441 8.73016 3 8.79525 3 8.84379V19.3741C3 19.7835 3.36396 20.2 3.92 20.2H7.4V13.8963C7.4 12.625 8.46873 11.6791 9.68 11.6791H13.52C14.7313 11.6791 15.8 12.625 15.8 13.8963V20.2H19.28C19.836 20.2 20.2 19.7835 20.2 19.3741V8.84379C20.2 8.79525 20.1756 8.73017 20.1016 8.68013L11.7816 3.05361ZM19.28 22.2C20.8447 22.2 22.2 20.9815 22.2 19.3741V8.84379C22.2 8.10427 21.8233 7.43006 21.222 7.0234L12.902 1.39689C12.1195 0.867705 11.0805 0.867703 10.298 1.39689L1.97802 7.0234C1.37669 7.43006 1 8.10427 1 8.84379V19.3741C1 20.9815 2.35527 22.2 3.92 22.2H19.28ZM13.8 20.2V13.8963C13.8 13.8231 13.7226 13.6791 13.52 13.6791H9.68C9.47742 13.6791 9.4 13.8231 9.4 13.8963V20.2H13.8Z"
                        :fill="homeicon ? '#0FD647' : '#fff'" data-v-d8c62812=""></path>
                </svg>Main</span>
        </li>
        <li @click="$emit('ExploreCLick')" :class="exploreicon ? 'bg-secondary' : ''"
            class="p-3 text-white rounded-xl font-poppins cursor-pointer h-12 flex items-center overflow-hidden transition">
            <span class="flex items-center">
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" height="24" fill="none"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->

                    <path :fill="exploreicon ? '#0FD647' : '#fff'"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                Explore
            </span>
        </li>
        <li @click="$emit('listIconCLick')" :class="watchlisticon ? 'bg-secondary' : ''"
            class="p-3 font-poppins text-white rounded-xl cursor-pointer h-12 flex items-center overflow-hidden transition"
            data-v-d8c62812=""><span class="flex items-center" data-v-d8c62812="">
                <svg class="me-3" fill="none" xmlns="http://www.w3.org/2000/svg" height="24"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path :fill="watchlisticon ? '#0FD647' : '#fff'"
                        d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                </svg>
                Watchlist
            </span>
        </li>
        <li @click="$emit('communityCLick')" :class="communityicon ? 'bg-secondary' : ''"
            class="p-3 text-white rounded-xl font-poppins cursor-pointer h-12 flex items-center overflow-hidden transition">
            <span class="flex items-center">
                <svg fill="none" class="me-3" xmlns="http://www.w3.org/2000/svg" height="24"
                    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path :fill="communityicon ? '#0FD647' : '#fff'"
                        d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                </svg>
                Explore
            </span>
        </li>
    </ul>
</template>
<script setup lang="ts">

const custompropsfun = defineProps < {
    homeicon: Boolean,
    exploreicon: Boolean,
    watchlisticon: Boolean,
    communityicon: Boolean,
} > ()


</script>
<style lang="css" scoped>.active-bg {
    background-color: hsla(0, 0%, 100%, .06)
}</style>