var plt = document.getElementById("platForm");
var arc = document.getElementById("arch");
var cpus = document.getElementById("cpus");
var freemem = document.getElementById("freemem");
var totalmem = document.getElementById("totalmem");
var uptime = document.getElementById("uptime")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var para = document.querySelector(".modal-body p");
var MHead = document.querySelector(".modal-header h2");
var created = document.getElementById("created");


let form = document.getElementById("form");

let loading = false;

//Back to homePage
const backToHome = ()=>{
    window.location.href = "/";
}

created.innerText += `${new Date().getFullYear()} Oyindacodes`;

plt.addEventListener('click',()=>{
    loading = true;
   
    fetch('https://cors-anywhere.herokuapp.com/http://localhost:5001/platform',{
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "Platform"
        para1.innerText = `The platform of your PC is ${plat}`;
        modal.style.display = "block";
    });
})

arc.addEventListener('click',()=>{
    loading = true;

    fetch('http://localhost:5001/arch').then(res => res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "Arch"
        para1.innerText = `The archetype of your PC is ${plat}`;
        modal.style.display = "block";
    });
})

cpus.addEventListener('click',()=>{
    loading = true;
  
    fetch('http://localhost:5001/cpus').then(res => res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "CPUS"
        para1.innerText = `The cpus in your pc is ${plat}`;
        modal.style.display = "block";
    });
})

freemem.addEventListener('click',()=>{
    loading = true;
   
    fetch('http://localhost:5001/freemem').then(res=> res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "Free Memory"
        para1.innerText = `The Number of free memory in your pc is ${plat}`;
        modal.style.display = "block";
    })
})

totalmem.addEventListener('click',()=>{
    loading = true;

    fetch('http://localhost:5001/totalmem').then(res=> res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "Total Memory"
        para1.innerText = `The Total memory on your pc is ${plat}`;
        modal.style.display = "block";
    })
})

uptime.addEventListener('click',()=>{
    loading = true;
   
    fetch('http://localhost:5001/uptime').then(res=>res.json()).then(plat =>{
        loading = false;
        MHead.innerText = "Uptime"
        para1.innerText = `The uptime on your PC is ${plat}`;
        modal.style.display = "block";
    })
})

span.addEventListener('click',()=>{
    modal.style.display = "none";
});

window.addEventListener('click',(event)=>{
    if(event.target == modal){
        modal.style.display="none";
    }
})