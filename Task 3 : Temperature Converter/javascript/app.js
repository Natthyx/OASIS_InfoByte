const celsiusField = document.querySelector("#celsius")
const degree = document.querySelector("#degree")
const convertBtn = document.querySelector("#convert-btn")
const tempType = document.querySelector("#temp-type")

window.addEventListener("load",()=>{
    degree.value = ""
    celsiusField.innerHTML = ""
})


convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner'></i> Converting..</span>";
    setTimeout(()=>{
        convertBtn.innerHTML = "<span>Convert</span>"
    },1000)
})

function convertToCelsius(){
    let inputValue = degree.value;
    setTimeout(()=>{
        if(tempType.value==="fahrenhiet"){
            const fahrenheitToCelsius = (inputValue - 32) * (5/9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(2)} &deg c`;
        }
        else if(tempType.value === "kelvin"){
            const kelvinToCelsius = inputValue - 273.15
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg c`;
        }
    },1200)
    
}