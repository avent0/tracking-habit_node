<template>
    <div id="banner">
        <HeaderVue />
        <div class="banner-content">
            <div class="container">
                <div class="banner-text-content">
                    <div class="banner-title">
                        <h1>Vos habitudes, votre histoire</h1>
                    </div>
                    <div class="banner-first-paragraphe">
                        <p>Avec <strong>TRAKING-HABITS</strong>, vous pouvez suivre vos habitudes et voir comment elles
                            évoluent au fil du temps. Vous découvrirez ce qui vous motive, ce qui vous freine et ce qui vous
                            permet de réussir.
                        </p>
                    </div>
                    <div class="banner-button-content">
                        <div class="banner-button">
                            <router-link to="/signin">Signin</router-link>
                            <router-link to="/signup">Signup</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-bottom-title">
        <div class="banner-bottom-title-content">
            <h1>Avec <span>TRAKING-HABITS</span> une seule motivation : devenir la meilleure version de soi</h1>
        </div>
    </div>
</template>

<script setup>
import HeaderVue from '../Header/Header.vue';
</script>

<style scoped>
#banner {
    background-image: url('../../assets/images/hero-new-bg-cbdcca7d089ae481d801c6561c3b260e.jpg');
    height: 90vh;
    background-size: contain;
    background-repeat: no-repeat;
}

.banner-text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.banner-title {
    margin-top: 60px;
    margin-bottom: 40px;
}

.banner-title h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    color: #fff;
}

.banner-first-paragraphe {
    max-width: 800px;
    width: 100%;
}

.banner-first-paragraphe {
    font-size: 20px;
    line-height: 30px;
    color: #fff;
}

.banner-button-content {
    margin: 25px 0;
}

.banner-button-content .banner-button {
    display: flex;
    gap: 65px;
}

.banner-button-content .banner-button a {
    border: solid 1px rgb(237, 44, 237);
    display: block;
    padding: 15px 100px;
    border-radius: 10px;
}

.banner-button-content .banner-button a:nth-child(2) {
    background: linear-gradient(340deg, rgb(75, 161, 252) 3.44%, rgb(236, 42, 237) 100%);
    border: none;
}

.banner-bottom-title-content h1 {
    position: absolute;
    left: 50%;
    text-align: center;
    font-weight: bold;
    transform: translate(-50%, -50%);
}

.banner-bottom-title-content h1 span {
    background: linear-gradient(to right, #ff00ff, #00ffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-fill-color: transparent;
}
</style>