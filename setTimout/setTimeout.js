function story() {
    console.log("I love Dodge muscle cars");
}

setTimeout(story, 3000)
console.log("I love Dodge muscle cars");

// display time every 5 seconds

function displayTime() {
    let dateTime = new Date();
    // console.log(dateTime.getHours()+":"+dateTime.getMinutes());
    let time = dateTime.toLocaleTimeString();
    console.log(time);

    let id = setTimeout(displayTime, 4000);
    console.log(id);
}
displayTime();