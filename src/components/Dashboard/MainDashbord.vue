<template>
    <main class="main">
        <div class="card_box">
            <div class="content_card_box">
                <div class="habitNumber_box">
                    <span> {{ habit.length }} </span>
                </div>
                <div class="habitText_box">
                    <span>Habitudes</span>
                </div>
            </div>
        </div>
        <div class="card_box">
            <div class="content_card_box">
                <div class="habitNumber_box">
                    <span>{{ desactive.length }}</span>
                </div>
                <div class="habitText_box">
                    <span>Done</span>
                </div>
            </div>
        </div>
        <div class="card_box">
            <div class="content_card_box">
                <div class="habitNumber_box">
                    <span>{{ activate.length }}</span>
                </div>
                <div class="habitText_box">
                    <span>Not Done</span>
                </div>
            </div>
        </div>
        <div class="card_box">
            <HabitTablesVue />
        </div>
        <div class="card_box">
            <chart />
        </div>
        <div class="card_box">
            
        </div>

    </main>
</template>

<script lang="ts" setup>
import HabitTablesVue from '../Habit/HabitTables.vue';
import { onMounted, ref } from 'vue'
import { clientHttp } from '@/libs/clientHttp';
import { Console } from 'console';
import chart from '@/components/chart/chart.vue'
import { log } from 'console';

const habit = ref([

]);
const userData = ref({
            user_id:''
        })
const getAll = async () => {
    try {
        const userconnect = localStorage.getItem('userId')
        userData.value.user_id = userconnect
        
        const response = await clientHttp.post('/api/habits/getAll',userData.value)
       /*  console.log('toto'); */
        
        habit.value = response.data;
        console.log(habit.value);
        
    }
    catch (error) {
        console.log(error)
    }
}

console.log(habit);



getAll()



const activate = ref([

])

const desactive = ref([

])

async function count() {
    const response = await clientHttp.post('/api/habits/getAll',userData.value)
    response.data.map(item => {
        if (item.completed == false) activate.value.push(item);
        if (item.completed == true) desactive.value.push(item);
    })
}
count()
console.log(activate.value);






//graphes

const graphes = ref("hello world");
defineProps({
    msg: String,
})

</script>


<style>
.main {
    background-color: var(--background-principal-gray);
    grid-area: main;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    grid-template-areas:
        "c1 c2 c3"
        "c4 c4 c5"
        "c4 c4 c6";
    overflow-y: scroll;
}

.card_box {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: var(--box-shadow-principal);
}

.card_box:nth-child(1) {
    grid-area: c1;
    background-color: #45b7d2;
}

.card_box:nth-child(2) {
    grid-area: c2;
    background-color: #ef853d;
}

.card_box:nth-child(3) {
    grid-area: c3;
    background-color: #7f82f4;

}

.card_box:nth-child(4) {
    grid-area: c4;
}

.card_box:nth-child(5) {
    grid-area: c5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card_box:nth-child(6) {
    grid-area: c6;
}

.habitNumber_box {
    width: 50px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: bold;
    font-size: 30px;
}

.content_card_box {
    display: flex;
    gap: 35px;
    align-items: center;
}

.habitText_box span {
    font-size: 18px;
    font-weight: bold;
    color: white;
}

@media (max-width: 900px) {
    .main {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 200px);
        grid-template-areas: initial;
    }

    .card_box {
        grid-area: initial !important;
    }
}
</style>