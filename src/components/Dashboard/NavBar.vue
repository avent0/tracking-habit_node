<template>
    <!-- ===== H E A D E R =====  -->
    <header class="header">
        <div class="header__content">
            <div class="navBar-left">
                <router-link to="">
                    <!-- <SearchIconVue class="ico"/> -->
                    ssssss
                </router-link>
            </div>
            <div class="navBar-right">
                <router-link to="">
                    <!-- <BellIcone class="ico"/> -->
                </router-link>
                <div class="profil-box">
                    <img src="../../assets/images/hero-new-bg-cbdcca7d089ae481d801c6561c3b260e.jpg" alt="">
                </div>
                <span id="userName">{{ name }}</span>
                <router-link to="/Sign-up">
                    <!-- <ChevronIconVue class="ico"/> -->
                </router-link>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
/* import SearchIconVue from './SearchIcon.vue';
import BellIcone from './BellIcone.vue';
import ChevronIconVue from './ChevronIcon.vue'; */

defineProps({
    name:String,
})
</script>

<style scoped>
header.header {
    background-color: var(--white);
    box-shadow: var(--box-shadow-principal);
    grid-area: header;
    padding: 16px;
}

.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navBar-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.profil-box {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* border: solid 1px red; */
    overflow: hidden;
}

.ico {
    color: #000;
}

#userName {
    font-weight: bold;
}
</style>