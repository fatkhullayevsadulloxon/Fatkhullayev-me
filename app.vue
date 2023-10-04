<template>
  <div>
    <div class="gradient"></div>
      <img class="absolute z-10 right-0 mt-[-20px]" src="./public/assets/images/Sphere-White-Matte.svg" alt="">
      <div class="px-20 py-10">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    <img class="absolute z-10 bottom-20" src="./public/assets/images/Pill-Blue-Glossy.svg" alt="">
    <!-- <img class="absolute z-10 bottom-0 flex left-[50%]" src="./public/assets/images/RoundCube-Orange-Glossy.svg" alt=""> -->
    <img class="absolute bottom-0 flex right-0" src="./public/assets/images/SuperToroid-Yellow-Glossy.svg" alt="">
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="css">
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
  z-index: -3 !important;
}
</style>