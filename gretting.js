const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser"
const SHOWNG_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName() {
    form.classList.add(SHOWNG_CN)
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWNG_CN)
    greeting.classList.add(SHOWNG_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName()
    } else {
        paintGreeting(currentUser)
    }
}
function init(){
    loadName()
}

init();