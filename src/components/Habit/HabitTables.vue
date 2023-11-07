<template>
    <div class="dashboard">
        <table class="habit-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Frequency</th>
                    <th>Custom Frequency</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in habit">
                    <td>{{ item['name'] }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.frequency }}</td>
                    <td>{{ item.custom_frequency }}</td>
                    <td>{{ item.create_at }}</td>
                    <td class="action-btn">
                        <button type="submit" class="active-button" @click="$event => showSuccessToast(item._id)">
                            Completed</button><!-- 
                        <button class="active-button" @click="$event => showWarningToast()">Active</button>
                        <button class="active-button" @click="$event => showDangerToast(item._id)">Delete</button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { clientHttp } from '../../libs/clientHttp'




function showWarningToast() {
    toast.warning('modifier !', {
        autoClose: 1000,
    })
}

const deleteUser = ref({
    habitId: "",
})



const habit = ref([
    {
        _id: "",
        name: '',
        description: '',
        frequency: '',
        custom_frequency: '',
        create_at: '',
    }
]);

/* const toggleBoolean = function () {
    this.myBoolean = !this.myBoolean; 
  } */


const getAll = async () => {
    try {
        const userData = ref({
            user_id: ''
        })
        const userconnect = localStorage.getItem('userId')
        userData.value.user_id = userconnect
        console.log(userData.value.user_id);
        const response = await clientHttp.post('/api/habits/getAll', userData.value)

        habit.value = response.data;
        console.log(habit.value);
        deleteUser.value = response.data;
        console.log(deleteUser.value)
        deleteUser.value.habitId = habit.value[0]['_id'];
        console.log(deleteUser.value.habitId);
    }
    catch (error) {
        console.log(error)
    }
}
getAll();

const showDangerToast = async (elementId) => {
    const habitId = deleteUser.value.habitId = elementId;
    console.log(habitId);

    try {
        const response = await clientHttp.post('/api/habits/delete', habitId);
        console.log(deleteUser.value.habitId);
        toast.error('Supprimer !', {
            autoClose: 1000,
        })
    }
    catch (error) {
        console.log(error)
    }
}


const UpdateTable = ref({
    habitId: "",
    completed: ""
})
const active = ref('')
active.value = false

if (active.value = true) {
    UpdateTable.value.completed = false
}
else if (active.value = false)
    UpdateTable.value.completed = true
const showSuccessToast = async (elementId) => {
    const habitId = UpdateTable.value.habitId = elementId;
    UpdateTable.value.completed = true
    console.log(habitId);
    console.log(UpdateTable.value.completed);
    try {
        const response = await clientHttp.post('/api/habits/updateHabitCompleted', UpdateTable.value);
        toast.error('Active', {
            autoClose: 1000,
        })
    }
    catch (error) {
        console.log(error)
    }
    toast.success('Activé !', {
        autoClose: 1000,
    })
}

</script>

<style scoped>
.dashboard {
    /*  max-width: 800px;
    width: 100%; */
    margin: 20px auto;
    /*   background: #7f82f4; */
    /*  padding: 20px; */
}

h1 {
    text-align: center;
}

.habit-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    /*   border-radius: 10px; */
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.habit-table th,
.habit-table td {
    padding: 10px;
    text-align: left;
}

.habit-table th {
    background: #45b7d2;
    color: white;
}

.habit-table tr:nth-child(even) {
    background: #f2f2f2;
}

.active-button {
    background: #ef853d;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.action-btn {
    display: flex;
    gap: 8px;
}

.active-button:hover {
    background: #ffaa22;
}

.active-button:nth-child(1) {
    background-color: #ffaa22;
}

.active-button:nth-child(2) {
    background: #ffaa22;
}

.active-button:nth-child(3) {
    background: #ff2222;
}
</style>





