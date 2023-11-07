<template>
    <div>
        <main class="habitMain">
            <div class="modal-btn-content">
                <div class="modal-btn">
                    <button class="modal-btn-close" @click="showModal = true">Add Habits</button>
                </div>
            </div>

            <HabitTablesVue />
        </main>

        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <button class="modal-btn-close" @click="showModal = false">Close</button>
                <form action="" @submit="createHabits" class="modal-form">
                    <div class="group-form">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="habit.name" />

                    </div>
                    <div class="group-form">
                        <label for="description">Description:</label>
                        <textarea id="description" v-model="habit.description"></textarea>
                    </div>

                    <div class="group-form">
                        <label for="frequency">Frequency:</label>
                        <select id="frequency" v-model="habit.frequency">
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                        <div class="group-form">
                            <label for="time">custummer frequence:</label>
                            <input type="number" v-model="habit.custom_frequency" />
                        </div>

                    </div>
                    <!--   <div class="group-form">
                        <label for="time">Time:</label>
                        <input type="time" id="time" v-model="habit.create_at" />
                    </div> -->

                    <div class="group-form">
                        <input type="submit" value="Enregistrer">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import router from '@/router';
import HabitTablesVue from '../components/Habit/HabitTables.vue';
import { clientHttp } from '../libs/clientHttp'

const showModal = ref(false);


const habit = ref({
    user_id: '',
    name: '',
    description: '',
    frequency: '',
    custom_frequency: '',
    /*     create_at: '', */
});
const userconnect = localStorage.getItem('userId')
const a = habit.value.user_id = userconnect

const errorText = ref('')

const createHabits = async () => {
    try {
        const response = await clientHttp.post('/api/habits/create', habit.value)
        habit.value.user_id = "";
        habit.value.name = "";
        habit.value.description = "";
        habit.value.frequency = "";
        habit.value.custom_frequency = "";
        /*     habit.value.create_at = ""; */
        showModal.value = false
        router.replace('/habitude')
    }
    catch (error) {
        console.log(error)
    }
}




</script>
  
<style scoped>
.habitMain {
    padding: 25px;
}

.modal-btn button {
    display: inline-block;
    padding: 18px 28px;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #45b7d2;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal-content {
    background: #fff;
    padding: 40px 20px;
    border-radius: 4px;
}

.modal-content label {
    display: block;
    margin-bottom: 5px;
}

.modal-content input,
.modal-content select,
.modal-content textarea {
    width: 380px;
    padding: 10px;
    outline-color: #45b7d2;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.modal-btn-close {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    background-color: #e74c3c;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.group-form input[type="submit"] {
    width: 100%;
    padding: 10px;
    outline: none;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #45b7d2;
    outline: none;
    color: #fff;
    font-weight: bold;
}
</style>
  