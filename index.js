//1
let houer = 1 
let minut = 0 
document.querySelector("#houer").textContent = String(houer).padStart(2, "0");
document.querySelector("#minut").textContent = String(minut).padStart(2, "0");
setInterval(() => {
    if(houer == 1){
        houer = 0;
        minut = 60;
        document.querySelector("#houer").textContent = String(houer).padStart(2, "0");
    }
    if(minut == 30){
        alert("половна часу");
    }
    minut--;
    document.querySelector("#minut").textContent = String(minut).padStart(2, "0");
}, 60000);
//2
let second = 30
let milisecond = 0
document.querySelector("#second").textContent = String(second).padStart(2, "0");
document.querySelector("#milisecond").textContent = String(milisecond).padStart(2, "0");
timer();
function timer() {
    document.querySelector("button").classList.remove("active");
    let second = 30
let milisecond = 0
document.querySelector("#second").textContent = String(second).padStart(2, "0");
document.querySelector("#milisecond").textContent = String(milisecond).padStart(2, "0");
    const i = setInterval(() => {
        if(milisecond == 0){
        document.querySelector("button").removeEventListener("click", () => {
            timer();
            });
            second--;
            milisecond = 100;
            document.querySelector("#second").textContent = String(second).padStart(2, "0");
        }
        milisecond--;
        document.querySelector("#milisecond").textContent = String(milisecond).padStart(2, "0");
        if(second == 10 && milisecond == 0){
            document.querySelector("button").style.animation = "explode 2s";
        }
        if(second == 0 && milisecond == 0){
            document.querySelector("button").classList.add("active");
            document.querySelector("button").addEventListener("click", () => {
                timer();
            });
            clearInterval(i);
        }
    }, 10);
}
