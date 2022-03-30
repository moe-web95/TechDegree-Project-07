/*Alert Bar */
const alertBanner = document.getElementById('alert');
//create the html for the banner
alertBanner.innerHTML = 
`
<div class = "alert-banner"> 
    <p><strong>Alert:</strong> You have unread messages</p>
    <p class = "alert-banner-close">X</p>
</div>
`

alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if( element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
    }
})





// Chart Widgets

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: flase
        }
    }
};

let trafficChart = new Chart (trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
 });
