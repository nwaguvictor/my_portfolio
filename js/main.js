const setClock = () => {
    // get the html element
    let clock = document.querySelector('.clock');

    // get the time
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = hour >= 12 ? 'pm' : 'am';

    hour = hour <= 12 ? hour : hour - 12;

    // Pad 0s to time
    hour = hour <= 9 ? `0${hour}` : hour
    minute = minute <= 9 ? `0${minute}` : minute
    second = second <= 9 ? `0${second}` : second

    // Set the html element to new time
    clock.innerHTML = `${hour}:${minute}:${second}${ampm}`;

    // Calls the function every seconds with a callback function
    setInterval(setClock, 1000);
}

setClock();



let toggled = false;
let toggler = function() {
    let navList = document.querySelector('.nav-list');

    if (toggled) {
        navList.style.display = "none";
        toggled = !toggled;
    }else {
        navList.style.display = "block";
        toggled = !toggled;
    }
}

