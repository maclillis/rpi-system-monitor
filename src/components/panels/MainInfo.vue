<template>
  <div class="rpi-main-info-wrap">
    <div class="rpi-title-wrap d-inline-flex align-items-end">
      <h1 class="rpi-name me-3 lh-0">Glastonbury</h1>
      <span class="rpi-status d-inline-flex align-items-center lh-0 mb-1">
        <span class="status-light online-light me-1 align-self-center"></span>
        Online
      </span>
    </div>
    <h2 class="rpi-model">Raspberry PI 4 Model B</h2>

    <div class="rpi-misc-info-wrap my-4">
      <p class="rpi-misc-info">
        <span class="bolded">OS: </span>Linux (Raspberry Pi OS)
      </p>
      <p class="rpi-misc-info">
        <span class="bolded">Version: </span>5.15.32-v7l+
      </p>
      <p class="rpi-misc-info">
        <span class="bolded">Release: </span>#1538 SMP Thu Mar 31 19:39:41 BST
        2022
      </p>
    </div>
    <!--<font-awesome-icon icon="fa-solid fa-user-secret" />-->
  </div>
</template>

<script>
import "@/components/panels/MainInfo.scss";
export default {
  name: "MainInfo",
};
</script>
