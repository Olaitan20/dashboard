const hamburger = document.getElementById ("hamburger")
const collapsed_menu = document.getElementById ("collapsed-menu")
const close = document.getElementById ("close")
hamburger.addEventListener("click", ()=> {
    collapsed_menu.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
})
close.addEventListener("click", ()=> {
    collapsed_menu.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
})
function updateTime() {
    const time = document.getElementById("time");
    
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();
    
    const formattedTime = `${hours}:${minutes}`;
    
    time.textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);