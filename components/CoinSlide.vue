<template>
    <div class="">
        <div class="py-5 w-full bg-transparent">
            <Vue3Marquee>
                <div v-for="coinList in coinLists" :key="coinList.id"
                    class="h-[20px] img-borders px-4 border-x border-white-300 gap-2 flex items-center border-opacity-20">
                    <img data-v-9c701e64="" class="w-5 h-5" :src="coinList.logo" alt=""><span data-v-9c701e64=""
                        class="text-white text-xs uppercase font-bold leading-[14px]">{{ coinList.name }}</span><span
                        data-v-9c701e64="" class="text-white text-xs uppercase font-medium leading-[14px]">${{coinList.price_usd.substr(0, 4) }}</span><span data-v-9c701e64=""
                        class="text-xs uppercase font-medium leading-[14px] text-[#FF4141]">{{
                            coinList.percent_change_24h.substr(0, 5) }}</span><span data-v-9c701e64=""
                        class="text-xs uppercase font-medium leading-[14px] text-[#FF4141]">(-0)</span>
                </div>
            </Vue3Marquee>
        </div>

        <div class="absolute md:block bottom-0 left-0 w-full shadow-bottom h-[562px]" data-v-9c701e64=""></div>
    </div>
</template>
<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import client from '../api/api';

let coinLists = ref([])


const getPaymentType = async () => {
    try {
        const { data } = await client.get(`main/CoinList/`)
        coinLists.value = data.results
        console.log(data.results);
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getPaymentType()
})
</script>
<style lang="css" scoped>
.shadow-bottom {
    background: linear-gradient(180deg, rgba(8, 10, 21, 0), #080a15);
}
</style>