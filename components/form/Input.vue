<template>
    <div class="input-style bg-white-300 border border-transparent transition focus-within:border-green focus-within:bg-transparent flex items-center rounded mt-2">
        <slot name="prefix"></slot>
        <input :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)"
     v-bind="{placeholder, type}" class="w-full h-full text-base sm:text-xsm px-4 py-[13px] font-medium text-dark bg-transparent outline-none placeholder:text-white-200">
        <slot name="suffix"></slot>
    </div>
</template>
<script setup lang="ts">

const inputprops = defineProps < {
    placeholder: String,
    type: String,
    modelValue: String | number
} > ()
defineEmits(['update:modelValue'])


</script>
<style lang="">
    
</style>