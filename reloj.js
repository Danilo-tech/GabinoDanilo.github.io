const time = document.getElementById('tiempo');
const interval = setInterval(() => {
    const local = new Date();  
    tiempo.innerHTML = local.toLocaleTimeString();
},1000);