<template>
  <div>
    <div class="gradient"></div>
    <div class="home">
      <img class="absolute z-10 right-0 mt-[-20px]" src="./public/assets/images/Sphere-White-Matte.svg" alt="">
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
  transform: translate(-50%, -50%);
}
</style>