
<!-- ===================  D A S H B O A R D  L A Y O U T =================== -->

<template>
    <div>
        <MainDashbordVue/>
    </div>
</template>

<script lang="ts" setup>
import MainDashbordVue from '@/components/Dashboard/MainDashbord.vue';
</script>

<style scoped>
#dashbord-content {
height: 100vh;
min-height: 100vh;
overflow: hidden;
display: grid;
grid-template-columns: 200px 1fr;
grid-template-rows: 60px 1fr;
grid-template-areas:
    "side header"
    "side main";
/*  padding: 25px; */
}
</style>