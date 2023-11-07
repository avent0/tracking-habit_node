
<template>
    <!-- ===== S I D E B A R  =====  -->
    <div class="sideBar">
        <div class="logo">
            <!--  <img src="../assets/images/logo.png" alt=""> -->
            <h2>Ha Track</h2>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/maindashboard" class="navlinks">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/habitude" class="navlinks">
                        Habit
                    </router-link>
                </li>
                <li>
                    <button type="submit" @click="logout">
                        Logout
                    </button>
                </li>
           <!--      <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Marquage
                    </router-link>
                </li>
                <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Rappels
                    </router-link>
                </li>
                <li>
                    <router-link to="/Sign-up" class="navlinks">
                        <span>
                            <calendarVue />
                        </span>
                        Récompenses
                    </router-link>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
/* import HomeIconeVue from './HomeIcone.vue';
import calendarVue from './calendar.vue'; */
import {clientHttp} from '@/libs/clientHttp'
import router from '@/router';

async function logout (){
    await clientHttp.get('/auth/user/logout')
    router.replace('/')
}
</script>

<style scoped>
.sideBar {
    background-color: var(--bleu-side);
    grid-area: side;
    padding: 15px;
}

.logo h2 {
    color: var(--white);
}

.menu {
    margin-top: 65px;
}

ul li {
    margin-top: 25px;
}

.navlinks {
    display: flex;
        padding: 8px ;
    align-items: center;
    gap: 15px;
}
.navlinks:hover{
    background-color: rgba(27, 27, 25, 0.26);
    border-radius: 4px;

}
</style>