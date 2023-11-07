<template>
    <div id="sign">
        <div class="container">
            <div class="sign-content">

                <form @submit.prevent="conectUser" action="post">
                    <div class="input-field">
                        <div class="signup-title">
                            <h2>Signin</h2>
                        </div>
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
                        <label for="verificationCode">verificationCode</label>
                        <input type="text" placeholder="Enter your verificationCode" v-model="userData.verificationCode"
                            id="verificationCode">
                    </div>
                    <div class="input-field">
                        <input type="submit" value="Signup">
                    </div>
                    <div class="input-field">
                        <p>Don't have an account? <span><router-link to="/signup"> Signup </router-link> </span> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import router from '@/router';
import { clientHttp } from "../../libs/clientHttp"

const userData = ref({
    email: "",
    password: "",
    verificationCode: "",
})


const errorText = ref('')
const conectUser = async () => {
    try {
        const response = await clientHttp.post('/api/auth/login', userData.value);
        console.log(response);
        const token = response.data.accessToken;
        localStorage.setItem('token', token);
        router.replace('/maindashboard');
        
    }
    catch (error) {
        console.log(error);
    }
};
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