<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
const labels = [
    'Habitudes',
    'Done',
    'Not Done',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1, 0, 1],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

onMounted(() => {
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
})


</script>