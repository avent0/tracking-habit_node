
<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="header-logo">
                    <router-link to="">
                        habitrack
                    </router-link>
                </div>
                <ul class="header-menu">
                    <li class="header-menu-items signin">
                        <router-link to="/signin">Signin</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>
header.header {
    background: linear-gradient(134.73deg, rgba(80, 36, 65, 0.411) 3.73%, rgba(42, 64, 89, 0.411) 91.65%);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-menu {
    display: flex;
    align-items: center;
}

.header-menu .header-menu-items {
    padding: 8px 25px;
}

.header-menu .signin {
    border: solid 1px rgb(236, 42, 237);
    border-radius: 10px;
}
</style>