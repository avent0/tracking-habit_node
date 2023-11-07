<template>
    <div id="sign">
        <div class="container">
            <div class="sign-content">

                <form @submit.prevent="createUser" action="">
                    <div class="input-field">
                        <div class="signup-title">
                            <h2>Signup</h2>
                        </div>
                    </div>

                    <div class="input-field">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Enter your name" v-model="userData.username" id="name">
                    </div>
                    <div class="input-field">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Enter your email" v-model="userData.email" id="email">
                    </div>
                    <div class="input-field">
                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter your password" v-model="userData.password" id="password">
                    </div>
                    <div class="input-field">
                        <input type="submit" value="Signup">
                    </div>
                    <div class="input-field">
                        <p> have an account? <span><router-link to="/signin"> Signin </router-link> </span> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import router from '@/router';
import { clientHttp } from "../../libs/clientHttp"

const userData = ref({
    username: "",
    email: "",
    password: "",
})


const errorText = ref('')

const createUser = async () => {
    try {
        await clientHttp.post('/api/user/signup', userData.value)
        userData.value.username = "";
        userData.value.email = "";
        userData.value.password = "";
        router.replace('/signin')
    }
    catch (error) {
        console.log(error)
    }
}

</script>

<style scoped>
#sign {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-content {
    width: 400px;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.sign-content form {
    width: 100%;
    padding: 55px 0;
}

/* .signup-title {
    margin: 15px 0;
    text-align: center;
} */

.signup-title h2 {
    font-size: 30px;
    font-weight: 600;
    color: #333;
    text-align: center;
}

.input-field {
    padding: 8px 25px;
}

.input-field label {
    display: block;
    margin-bottom: 10px;
}

.input-field input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline-color: rgb(75, 161, 252);
}

.input-field input[type="submit"] {
    width: 100%;
    background: linear-gradient(340deg, rgb(75, 161, 252) 3.44%, rgb(236, 42, 237) 100%);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
}

.input-field p span a {
    text-decoration: none;
    color: rgb(75, 161, 252);
    padding-left: 5px;
}
</style>