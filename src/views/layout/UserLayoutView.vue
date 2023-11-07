
<!-- ===================  D A S H B O A R D  L A Y O U T =================== -->

<template>
  <div id="dashbord-content">
    <SideBarVue />
    <NavBarVue :name="name" />

    <RouterView>

    </RouterView>


  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavBarVue from '@/components/Dashboard/NavBar.vue';
import SideBarVue from '@/components/Dashboard/SideBar.vue'
import MainDashbordVue from '@/components/Dashboard/MainDashbord.vue';


const userData = ref({
  email: "",
  userId: ""
});

const name = ref('')

const token = localStorage.getItem('token');

if (token) {
  const decoded = JSON.parse(atob(token.split(".")[1]));
  localStorage.setItem("userId", decoded.userId)

  userData.value.email = decoded.email;
  const userIdconnect = userData.value.userId = decoded.userId;

  name.value = userData.value.email.split("@")[0];

}

</script>

<style>
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