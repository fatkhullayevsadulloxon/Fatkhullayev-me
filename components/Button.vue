<template>
    <div :class="buttonColor" class="flex items-center transition rounded-md cursor-pointer">
        <slot name="prefix"></slot>
        <button class="font-poppins m-auto">
            {{ title }}
        </button>
        <slot name="suffix"></slot>
    </div>
</template>
<script setup lang="ts">

const custompropsbtn = defineProps<{
    variant?: 'success' | 'outline' | 'secondary' | 'outline2'
    title: String
}>()

const buttonColor = computed(() => {
    switch (custompropsbtn.variant) {
        case 'outline':
            return 'bg-transparent leading-20 border font-semibold border-green text-white text-[15px] py-2.5 px-8 hover:opacity-70 active:opacity-40'
        case 'outline2':
            return 'bg-transparent leading-20 border font-semibold border-green text-green text-[15px] py-2.5 px-8 hover:opacity-70 active:opacity-40'
        case 'success':
            return 'bg-green py-2.5 px-12 text-white border border-green font-semibold text-[15px] leading-20 text-center text-white hover:opacity-80 active:opacity-40'
        case 'secondary':
            return '!bg-[#0fd64724] py-2.5 px-12 !text-green font-semibold text-[15px] leading-20 text-center text-white hover:opacity-80 active:opacity-40'
        default:
            return 'bg-blue text-white border border-blue hover:opacity-50 active:opacity-40'
    }
})

</script>
<style lang="">
    
</style>