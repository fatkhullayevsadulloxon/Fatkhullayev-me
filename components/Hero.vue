<template>
    <section class="hero">
        <div class="flex z-10 items-end md:items-center h-[calc(100dvh-64px)] relative container mx-auto">
            <div class="hero__left mb-[42px]">
                <h1
                    class="text-white font-extrabold !leading-136 max-w-[682px] uppercase text-2xl w-full md:text-[32px] font-poppins text-white">
                    First Innovative Islamic Finance App for Screening Crypto Projects in Accordance with Shariah Law. </h1>
                <p class="text-white font-poppins max-w-[582px] leading-136 mt-5">HBS Trading is a Shariah Compliant
                    Crypto/Stock Trading, Training&Investment Company in Dubai.</p>
                <div class="flex items-center gap-5 mt-7">
                    <Button @click="$emit('openModal')" variant="success" title="Get access now"></Button>
                    <Button @click="$emit('openModal')" variant="outline" title="Download app"></Button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">


</script>
<style lang="css" scoped></style>